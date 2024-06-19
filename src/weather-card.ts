import { CSSResult, html, LitElement, nothing, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import { fireEvent, HomeAssistant, LovelaceCard, LovelaceCardEditor } from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types
import { HassEntity } from 'home-assistant-js-websocket/dist/types';

import './style';

import { localize } from './localize/localize';
import { cardinalDirectionsIcon, weatherIconsDay, weatherIconsNight } from './const';
import { ChartData, ForecastEvent, WeatherCardConfig } from './types';
import { style } from './style';

import './initialize';
import { getLocale, subscribeForecast } from './helpers';

@customElement('weather-card')
export class WeatherCard extends LitElement implements LovelaceCard {
  // https://lit.dev/docs/components/properties/
  @property({ attribute: false }) public hass?: HomeAssistant;
  @property({ attribute: false }) public chartData?: ChartData;
  // eslint-disable-next-line lit/attribute-names
  @property({ type: Boolean }) public isPanel = false;
  // eslint-disable-next-line lit/attribute-names
  @property({ type: Boolean }) public editMode = false;

  @state() private _config!: WeatherCardConfig;
  @state() private numberElements: number;

  // https://github.com/home-assistant/frontend/blob/dev/src/panels/lovelace/cards/hui-weather-forecast-card.ts
  @state() private _subscribed?: Promise<() => void>;
  @state() private _forecastEvent?: ForecastEvent;

  constructor() {
    super();
    this.numberElements = 0;
  }

  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    await import('./editor');
    return document.createElement('weather-card-editor');
  }

  // https://lit-element.polymer-project.org/guide/properties#accessors-custom
  public setConfig(config: WeatherCardConfig): void {
    if (!config) {
      throw new Error('Invalid configuration');
    }

    this._config = {
      name: '',
      forecast_type: 'daily',
      ...config,
    };
  }

  _needForecastSubscription(): boolean {
    return (this._config &&
      this._config.entity_weather &&
      this._config.forecast_type &&
      this._config.forecast_type !== 'legacy') as boolean;
  }

  _unsubscribeForecastEvents() {
    if (this._subscribed) {
      this._subscribed.then((unsub) => unsub());
      this._subscribed = undefined;
    }
  }

  async _subscribeForecastEvents() {
    this._unsubscribeForecastEvents();
    if (!this.isConnected || !this.hass || !this._config || !this._needForecastSubscription()) {
      return;
    }

    // https://github/homeassistant/frontend/src/panels/lovelace/cards/hui-weather-forecast-card.ts
    // Note: forecast_type required to be set.
    // Note: forecast_type daily supported by this card but not hourly nor twice_daily
    this._subscribed = subscribeForecast(
      this.hass!,
      this._config!.entity_weather,
      this._config!.forecast_type as 'daily' | 'hourly' | 'twice_daily',
      (event) => {
        this._forecastEvent = event;
      },
    );
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.hasUpdated && this._config && this.hass) {
      this._subscribeForecastEvents();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._unsubscribeForecastEvents();
  }

  // https://lit-element.polymer-project.org/guide/lifecycle#shouldupdate
  protected shouldUpdate(changedProps: PropertyValues): boolean {
    if (!this._config) {
      return false;
    }

    if (changedProps.has('_config') || changedProps.has('_forecastEvent')) {
      return true;
    }

    if (changedProps.has('hass')) {
      return true;
    }

    const oldHass = (changedProps.get('hass') as HomeAssistant) || undefined;
    if (!oldHass || oldHass.themes !== this.hass!.themes || oldHass.locale !== this.hass!.locale) {
      return true;
    }

    // Check if any entities mentioned in the config have changed
    if (
      Object.keys(this._config).every((entity) => {
        if (entity.match(/^entity_/) !== null) {
          if (oldHass.states[this._config[entity]] !== this.hass!.states[this._config[entity]]) {
            return false;
          }
        }
        return true;
      }) === false
    ) {
      return true;
    }

    return changedProps.has('config');
  }

  updated(changedProps: PropertyValues) {
    if (!this.hass || !this._config) {
      return;
    }
    if (changedProps.has('_config') || !this._subscribed) {
      this._subscribeForecastEvents();
    }
  }

  // https://lit-element.polymer-project.org/guide/templates
  protected render(): TemplateResult | typeof nothing {
    if (!this._config || !this.hass) {
      return nothing;
    }

    const stateObj = this.hass!.states[this._config.entity_weather];
    if (!stateObj) {
      return nothing;
    }

    return html`
      <ha-card @click=${this._handleClick}>
        ${this._config.current !== false ? this.renderCurrent() : ''}
        ${this._config.details !== false ? this.renderDetails() : ''}
        ${this._config.forecast !== false
          ? this.renderForecast(
              this._forecastEvent || {
                forecast: stateObj!.attributes.forecast,
                type: 'daily',
              },
            )
          : ''}
      </ha-card>
    `;
  }

  private _handleClick(): void {
    fireEvent(this, 'hass-more-info', { entityId: this._config.entity_weather });
  }

  private renderCurrent(): TemplateResult | typeof nothing {
    this.numberElements++;

    const weatherObj = this.hass!.states[this._config.entity_weather];
    if (!weatherObj) {
      return nothing;
    }

    return html`
      <div class="current ${this.numberElements > 1 ? 'spacer' : ''}">
        <span
          class="icon bigger"
          style="background: none, url('${this.getWeatherIcon(
            weatherObj.state.toLowerCase(),
            this.hass!.states[this._config.entity_sun],
          )}') no-repeat; background-size: contain;"
          >${weatherObj.state}</span
        >
        ${this._config.name ? html`<span class="title"> ${this._config.name} </span>` : ''}
        <span class="temp"
          >${this.getUnit('temperature') == '°F'
            ? Math.round(weatherObj.attributes.temperature)
            : weatherObj.attributes.temperature}</span
        >
        <span class="tempc"> ${this.getUnit('temperature')}</span>
      </div>
    `;
  }

  private renderDetails(): TemplateResult | typeof nothing {
    const sun = this.hass!.states[this._config.entity_sun];
    const weatherObj = this.hass!.states[this._config.entity_weather];
    if (!weatherObj || !sun) {
      return nothing;
    }

    const locale = getLocale(this.hass!);
    let nextRising: Date | undefined;
    let nextSetting: Date | undefined;

    if (sun) {
      nextRising = new Date(sun.attributes.next_rising);
      nextSetting = new Date(sun.attributes.next_setting);
    }

    this.numberElements++;

    return html`
      <ul class="variations ${this.numberElements > 1 ? 'spacer' : ''}">
        <li>
          <ha-icon icon="mdi:water-percent"></ha-icon>
          ${weatherObj.attributes.humidity}<span class="unit"> % </span>
        </li>
        <li>
          ${WeatherCard.getWindDir(this.hass!, weatherObj.attributes.wind_bearing)}
          <ha-icon
            style="margin-left: 0;"
            icon="hass:${WeatherCard.getWindDirIcon(weatherObj.attributes.wind_bearing)}"
          ></ha-icon>
          ${weatherObj.attributes.wind_speed}
          <span class="unit">${this.getUnit('length')}/h</span>${this.getWindForce()}
          <ha-icon icon="mdi:weather-windy"></ha-icon>
        </li>
        <li>
          <ha-icon icon="mdi:gauge"></ha-icon>
          ${weatherObj.attributes.pressure}
          <span class="unit">${this.getUnit('air_pressure')}</span>
        </li>
        <li>
          ${weatherObj.attributes.visibility}
          <span class="unit">${this.getUnit('length')}</span>
          <ha-icon icon="mdi:weather-fog"></ha-icon>
        </li>
        ${nextRising
          ? html`
              <li>
                <ha-icon icon="mdi:weather-sunset-up"></ha-icon>
                ${nextRising.toLocaleTimeString(locale.language)}
              </li>
            `
          : ''}
        ${nextSetting
          ? html`
              <li>
                ${nextSetting.toLocaleTimeString(locale.language)}
                <ha-icon icon="mdi:weather-sunset-down"></ha-icon>
              </li>
            `
          : ''}
      </ul>
    `;
  }

  private renderForecast(forecast: ForecastEvent): TemplateResult | typeof nothing {
    if (!forecast.forecast || forecast.forecast.length === 0) {
      return nothing;
    }

    this.numberElements++;
    if (this._config.graph === true) return this.renderForecastGraph(forecast);
    else return this.renderForecastTable(forecast);
  }

  private renderForecastTable(forecast: ForecastEvent): TemplateResult | typeof nothing {
    if (!forecast || !forecast.forecast || forecast.forecast.length === 0) return nothing;

    const listItems = forecast.forecast
      .slice(0, this._config.forecastMaxColumn ? this._config.forecastMaxColumn : 5)
      .map(
        (daily) => html`
          <div class="day">
            <div class="dayname">${this.getDateString(forecast, daily.datetime)}</div>
            ${daily.condition
              ? html` <i
                  class="icon"
                  style="background: none, url('${this.getWeatherIcon(
                    daily.condition.toLowerCase(),
                    this.hass!.states[this._config.entity_sun],
                  )}') no-repeat; background-size: contain"
                ></i>`
              : ''}
            <div class="highTemp">${daily.temperature}${this.getUnit('temperature')}</div>
            ${daily.templow !== undefined
              ? html` <div class="lowTemp">${daily.templow}${this.getUnit('temperature')}</div> `
              : ''}
            ${!this._config.hidePrecipitation && daily.precipitation !== undefined && daily.precipitation !== null
              ? html`
                  <div class="precipitation">
                    ${Math.round(daily.precipitation * 10) / 10} ${this.getUnit('precipitation')}
                  </div>
                `
              : ''}
            ${!this._config.hidePrecipitation &&
            daily.precipitation_probability !== undefined &&
            daily.precipitation_probability !== null
              ? html`
                  <div class="precipitation_probability">
                    ${Math.round(daily.precipitation_probability * 10) / 10}
                    ${this.getUnit('precipitation_probability')}
                  </div>
                `
              : ''}
          </div>
        `,
      );
    return html` <div class="forecast clear ${this.numberElements > 1 ? 'spacer' : ''}">${listItems}</div>`;
  }

  private renderForecastGraph(forecast: ForecastEvent): TemplateResult | typeof nothing {
    if (!forecast.forecast || forecast.forecast.length === 0) return nothing;

    this.drawChart(forecast);
    const listItems = forecast.forecast.map((daily) =>
      daily.condition
        ? html` <i
            class="icon"
            style="background: none, url('${this.getWeatherIcon(
              daily.condition.toLowerCase(),
              this.hass!.states[this._config.entity_sun],
            )}') no-repeat; background-size: contain"
          ></i>`
        : '',
    );
    return html`
      <div class="clear ${this.numberElements > 1 ? 'spacer' : ''}">
        <ha-chart-base
          .data=${this.chartData!.data}
          .options=${this.chartData!.options}
          .hass=${this.hass}
          chart-type="bar"
        ></ha-chart-base>
      </div>
      <div class="conditions">${listItems}</div>
    `;
  }

  private drawChart(forecast: ForecastEvent): void {
    if (!forecast.forecast || forecast.forecast.length === 0) return;

    const dateTime: Date[] = [];
    const tempHigh: number[] = [];
    const tempLow: number[] = [];
    const precip: number[] = [];

    for (const d of forecast.forecast) {
      dateTime.push(new Date(d.datetime));
      tempHigh.push(d.temperature);
      if (d.templow !== undefined) {
        tempLow.push(d.templow);
      }
      if (d.precipitation !== undefined) {
        precip.push(d.precipitation);
      }
    }
    const style = getComputedStyle(document.body);
    const textColor = style.getPropertyValue('--primary-text-color');
    const dividerColor = style.getPropertyValue('--divider-color');
    const locale = getLocale(this.hass!);

    this.chartData = {
      data: {
        labels: dateTime,
        datasets: [
          {
            label: forecast.type === 'hourly' ? localize('temp', locale) : localize('tempHi', locale),
            type: 'line',
            data: tempHigh,
            yAxisID: 'TempAxis',
            borderWidth: 2.0,
            tension: 0.4,
            pointRadius: 0.0,
            pointHitRadius: 5.0,
            fill: false,
          },
          {
            label: localize('tempLo', locale),
            type: 'line',
            data: tempLow,
            yAxisID: 'TempAxis',
            borderWidth: 2.0,
            tension: 0.4,
            pointRadius: 0.0,
            pointHitRadius: 5.0,
            fill: false,
          },
          {
            label: localize('precip', locale),
            type: 'bar',
            data: precip,
            maxBarThickness: 22,
            barThickness: 'flex',
            yAxisID: 'PrecipAxis',
          },
        ],
      },
      options: {
        animation: {
          duration: 300,
          easing: 'linear',
          onComplete: function (): void {
            // @ts-expect-error 2339
            const chartInstance = this.chart;
            const ctx = chartInstance.ctx;
            ctx.fillStyle = textColor;
            const fontSize = 10;
            const fontStyle = 'normal';
            const fontFamily = 'Roboto';
            // @ts-expect-error 2304
            ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            const meta = chartInstance.controller.getDatasetMeta(2);
            meta.data.forEach(function (bar: { _model: { x: never; y: number } }, index: string | number) {
              const data = (Math.round(chartInstance.data.datasets[2].data[index] * 10) / 10).toFixed(1);
              ctx.fillText(data, bar._model.x, bar._model.y - 5);
            });
          },
        },
        legend: {
          display: false,
        },
        scales: {
          x: {
            type: 'time',
            display: false,
            ticks: {
              display: false,
            },
            grid: {
              display: false,
            },
          },
          DateAxis: {
            position: 'top',
            grid: {
              display: true,
              color: dividerColor,
            },
            border: {
              display: false,
              dash: [1, 3],
            },
            ticks: {
              display: true,
              source: 'labels',
              autoSkip: true,
              color: textColor,
              maxRotation: 0,
              callback: (value): string => {
                return this.getDateString(forecast, value);
              },
            },
          },
          TempAxis: {
            position: 'left',
            grid: {
              display: true,
              color: dividerColor,
            },
            border: {
              display: false,
              dash: [1, 3],
            },
            ticks: {
              display: true,
              color: textColor,
            },
            afterFit: (scaleInstance): void => {
              scaleInstance.width = 28;
            },
          },
          PrecipAxis: {
            position: 'right',
            grid: {
              display: false,
              color: dividerColor,
            },
            border: {
              display: false,
            },
            min: 0,
            suggestedMax: 20,
            ticks: {
              display: false,
              color: textColor,
            },
            afterFit: (scaleInstance): void => {
              scaleInstance.width = 15;
            },
          },
        },
        tooltips: {
          mode: 'index',
          callbacks: {
            title: (items, data): string => {
              const item = items[0];
              const date = data.labels[item.index];
              return new Date(date).toLocaleDateString(locale.language, {
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                hour: 'numeric',
                minute: 'numeric',
              });
            },
            label: (tooltipItems, data): string => {
              const label = data.datasets[tooltipItems.datasetIndex].label || '';
              if (data.datasets[2].label === label) {
                return (
                  label +
                  ': ' +
                  (tooltipItems.yLabel
                    ? tooltipItems.yLabel + ' ' + this.getUnit('precipitation')
                    : '0 ' + this.getUnit('precipitation'))
                );
              }
              return label + ': ' + tooltipItems.yLabel + ' ' + this.getUnit('temperature');
            },
          },
        },
      },
    };
  }

  private getWeatherIcon(condition: string, sun: HassEntity | null | undefined): string {
    const iconPath = this._config.icons
      ? this._config.icons
      : 'https://cdn.jsdelivr.net/gh/MarcHagen/weather-card/dist/icons/';
    const sunIcon = sun && sun.state === 'below_horizon' ? weatherIconsNight[condition] : weatherIconsDay[condition];
    return `${iconPath}${sunIcon}.svg`;
  }

  private static getWindDirIcon(degree: number): string {
    return cardinalDirectionsIcon[(degree + 22.5) / 45.0];
  }

  private static getWindDir(hass: HomeAssistant, degree: number): string {
    return localize('cardinalDirections', getLocale(hass))[(degree + 11.25) / 22.5];
  }

  // beaufortWind - returns the wind speed on the beaufort scale
  // reference https://en.wikipedia.org/wiki/Beaufort_scale
  private getWindForce(): TemplateResult | typeof nothing {
    const weatherObj = this.hass!.states[this._config.entity_weather];
    if (this.getUnit('length') !== 'km' || !weatherObj) {
      return nothing;
    }

    const force = Math.ceil(Math.cbrt(Math.pow(weatherObj.attributes.wind_speed / 3.6 / 0.836, 2)));
    return html` | ${force} <span class="unit">Bft</span>`;
  }

  private getUnit(
    measure: 'air_pressure' | 'length' | 'precipitation' | 'intensity' | 'precipitation_probability' | string,
  ): string {
    const lengthUnit = this.hass!.config.unit_system.length;
    const locale = getLocale(this.hass!);
    switch (measure) {
      case 'air_pressure':
        return lengthUnit === 'km' ? localize('uPress', locale) : 'mbar';
      case 'length':
        return lengthUnit;
      case 'precipitation':
        return lengthUnit === 'km' ? localize('uPrecip', locale) : 'in';
      case 'intensity':
        return lengthUnit === 'km' ? localize('uPrecip', locale) + '/h' : 'in/h';
      case 'precipitation_probability':
        return '%';
      default:
        return this.hass!.config.unit_system[measure] || '';
    }
  }

  private getDateString(forecast: ForecastEvent, datetime: string): string {
    if (forecast.type === 'hourly') {
      return new Date(datetime).toLocaleTimeString(getLocale(this.hass!).language, { hour: 'numeric' });
    }

    return new Date(datetime).toLocaleDateString(getLocale(this.hass!).language, { weekday: 'short' });
  }

  public getCardSize(): number | Promise<number> {
    return 1;
  }

  // https://lit-element.polymer-project.org/guide/styles
  static get styles(): CSSResult {
    return style;
  }
}
