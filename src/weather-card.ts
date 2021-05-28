/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    CSSResult,
    customElement,
    html,
    LitElement,
    property,
    PropertyValues,
    state,
    TemplateResult,
} from 'lit-element';
import {
    fireEvent,
    HomeAssistant,
    LovelaceCardEditor,
} from 'custom-card-helpers'; // This is a community maintained npm module with common helper functions/types
import { HassEntity } from 'home-assistant-js-websocket/dist/types';

import './editor';
import './style';

import { localize } from './localize/localize';
import { cardinalDirectionsIcon, DAY_IN_MILLISECONDS, UPDATE_PROPS, weatherIconsDay, weatherIconsNight } from './const';
import type { WeatherCardConfig } from './types';
import { CardMode, WeatherObjectForecast } from './types';
import { style } from './style';

import './initialize';

@customElement('weather-card')
export class WeatherCard extends LitElement {
    // https://lit-element.polymer-project.org/guide/properties
    @property({ attribute: false }) public hass!: HomeAssistant
    @property({ attribute: false }) public chartData?: object;

    @state() private config!: WeatherCardConfig
    @state() private weatherObj: HassEntity | null | undefined;
    @state() private numberElements: number

    private forecast?: WeatherObjectForecast[]
    private mode: CardMode
    private readonly currentLanguage: string;

    constructor() {
        super();
        this.numberElements = 0
        this.mode = CardMode.daily;
        this.currentLanguage = this.hass?.language || 'en';
    }

    public static async getConfigElement(): Promise<LovelaceCardEditor> {
        return document.createElement('weather-card-editor');
    }

    // https://lit-element.polymer-project.org/guide/properties#accessors-custom
    public setConfig(config: WeatherCardConfig): void {
        if (!config) {
            throw new Error(localize('common.invalid_configuration'));
        }

        if (!config.entity) {
            throw new Error(localize('common.invalid_entity'));
        }

        this.config = {
            name: '',
            ...config,
        };

        this.setWeatherObj();
    }

    private setWeatherObj(): void {
        if (!this.hass || !this.config.entity)
            return;

        this.weatherObj = this.config.entity in this.hass.states ? this.hass.states[this.config.entity] : null;
        if (!this.weatherObj)
            return;

        if (!this.config.forecastMaxColumn || this.config.forecastMaxColumn < 2)
            this.forecast = this.weatherObj.attributes.forecast.slice(0, 9);
        else
            this.forecast = this.weatherObj.attributes.forecast.slice(0, this.config.forecastMaxColumn);

        if (!Array.isArray(this.forecast))
            return;

        let hourly: boolean | undefined;

        if (this.forecast?.length && this.forecast?.length > 2) {
            const date1 = new Date(this.forecast[1].datetime);
            const date2 = new Date(this.forecast[2].datetime);
            const timeDiff = date2.getTime() - date1.getTime();

            hourly = timeDiff < DAY_IN_MILLISECONDS;

            if (hourly) {
                this.mode = CardMode.hourly;
            }
        }
    }

    // https://lit-element.polymer-project.org/guide/lifecycle#shouldupdate
    protected shouldUpdate(changedProps: PropertyValues): boolean {
        if (!this.weatherObj)
            return true;

        return UPDATE_PROPS.some(prop => changedProps.has(prop));
    }

    // https://lit-element.polymer-project.org/guide/lifecycle#updated
    protected updated(): void {
        this.setWeatherObj();

        /* eslint-disable @typescript-eslint/ban-ts-ignore */
        // @ts-ignore
        const chart = this.shadowRoot.querySelector('#Chart');
        if (chart) {
            // @ts-ignore
            chart.data = this.chartData;
            // @ts-ignore
            chart.hass = this.hass
        }
        /* eslint-enable @typescript-eslint/ban-ts-ignore */
    }

    // https://lit-element.polymer-project.org/guide/templates
    protected render(): TemplateResult | void {
        if (!this.config || !this.hass) {
            return html``;
        }

        this.setWeatherObj();
        this.numberElements = 0;

        if (!this.weatherObj) {
            return html`
                <style>
                    .not-found {
                        flex: 1;
                        background-color: yellow;
                        padding: 8px;
                    }
                </style>
                <ha-card>
                    <div class="not-found">
                        Entity not available: ${this.config.entity}
                    </div>
                </ha-card>
            `;
        }

        return html`
            <ha-card @click="${this._handleClick}">
                ${this.config.current !== false ? this.renderCurrent() : ''}
                ${this.config.details !== false ? this.renderDetails() : ''}
                ${this.config.forecast !== false ? this.renderForecast() : ''}
            </ha-card>
        `;
    }

    private _handleClick(): void {
        fireEvent(this, 'hass-more-info', { entityId: this.config.entity });
    }

    private renderCurrent(): TemplateResult {
        this.numberElements++;
        if (!this.weatherObj)
            return html``;

        return html`
            <div class="current ${this.numberElements > 1 ? 'spacer' : ''}">
        <span
                class="icon bigger"
                style="background: none, url('${this.getWeatherIcon(
                        this.weatherObj.state.toLowerCase(),
                        this.hass.states['sun.sun'].state
                )}') no-repeat; background-size: contain;"
        >${this.weatherObj.state}
        </span>
                ${this.config.name
                        ? html`
                            <span class="title"> ${this.config.name} </span>
                        `
                        : ""}
                <span class="temp"
                >${this.getUnit('temperature') == '°F'
                        ? Math.round(this.weatherObj.attributes.temperature)
                        : this.weatherObj.attributes.temperature}</span
                >
                <span class="tempc"> ${this.getUnit('temperature')}</span>
            </div>
        `;
    }

    private renderDetails(): TemplateResult {
        if (!this.weatherObj)
            return html``;

        const sun = this.hass.states['sun.sun'];
        let nextRising;
        let nextSetting;

        if (sun) {
            nextRising = new Date(sun.attributes.next_rising);
            nextSetting = new Date(sun.attributes.next_setting);
        }

        this.numberElements++;

        return html`
            <ul class="variations ${this.numberElements > 1 ? 'spacer' : ''}">
                <li>
                    <ha-icon icon="mdi:water-percent"></ha-icon>
                    ${this.weatherObj.attributes.humidity}<span class="unit"> % </span>
                </li>
                <li>
                    ${WeatherCard.getWindDir(this.weatherObj.attributes.wind_bearing)}
                    <ha-icon
                            style="margin-left: 0;"
                            icon="hass:${WeatherCard.getWindDirIcon(this.weatherObj.attributes.wind_bearing)}"
                    ></ha-icon>
                    ${this.weatherObj.attributes.wind_speed}
                    <span class="unit">${this.getUnit('length')}/h</span>${this.getWindForce()}
                    <ha-icon icon="mdi:weather-windy"></ha-icon>
                </li>
                <li>
                    <ha-icon icon="mdi:gauge"></ha-icon>
                    ${this.weatherObj.attributes.pressure}
                    <span class="unit">
            ${this.getUnit('air_pressure')}
          </span>
                </li>
                <li>
                    ${this.weatherObj.attributes.visibility}
                    <span class="unit">
            ${this.getUnit('length')}
          </span>
                    <ha-icon icon="mdi:weather-fog"></ha-icon>
                </li>
                ${nextRising
                        ? html`
                            <li>
                                <ha-icon icon="mdi:weather-sunset-up"></ha-icon>
                                ${nextRising.toLocaleTimeString(this.currentLanguage)}
                            </li>
                        `
                        : ''}
                ${nextSetting
                        ? html`
                            <li>
                                ${nextSetting.toLocaleTimeString(this.currentLanguage)}
                                <ha-icon icon="mdi:weather-sunset-down"></ha-icon>
                            </li>
                        `
                        : ''}
            </ul>
        `;
    }

    private renderForecast(): TemplateResult {
        if (!this.forecast || this.forecast.length === 0) {
            return html``;
        }

        this.numberElements++;
        if (this.config.graph === true)
            return this.renderForecastGraph();
        else
            return this.renderForecastTable();
    }

    private renderForecastTable(): TemplateResult {
        if (!this.forecast || this.forecast.length === 0)
            return html``;

        return html`
            <div class="forecast clear ${this.numberElements > 1 ? 'spacer' : ''}">
                ${this.forecast.map(
                        forecast => html`
                            <div class="day">
                                <div class="dayname">
                                    ${this.getDateString(forecast.datetime)}
                                </div>
                                <i class="icon"
                                   style="background: none, url('${this.getWeatherIcon(forecast.condition.toLowerCase(), this.hass.states['sun.sun'].state)}') no-repeat; background-size: contain"></i>
                                <div class="highTemp">
                                    ${forecast.temperature}${this.getUnit('temperature')}
                                </div>
                                ${forecast.templow !== undefined
                                        ? html`
                                            <div class="lowTemp">
                                                ${forecast.templow}${this.getUnit('temperature')}
                                            </div>
                                        `
                                        : ''}
                                ${!this.config.hidePrecipitation &&
                                forecast.precipitation !== undefined &&
                                forecast.precipitation !== null
                                        ? html`
                                            <div class="precipitation">
                                                ${forecast.precipitation} ${this.getUnit('precipitation')}
                                            </div>
                                        `
                                        : ''}
                            </div>
                        `
                )}
            </div>
        `;
    }

    private renderForecastGraph(): TemplateResult {
        if (!this.forecast || this.forecast.length === 0)
            return html``;

        this.drawChart();
        return html`
            <div class="clear ${this.numberElements > 1 ? 'spacer' : ''}">
                <ha-chart-base id="Chart"></ha-chart-base>
            </div>
            <div class="conditions">
                ${this.forecast.map(forecast => html`<i class="icon"
                                                        style="background: none, url('${this.getWeatherIcon(forecast.condition.toLowerCase(), this.hass.states['sun.sun'].state)}') no-repeat; background-size: contain"></i>`
                )}
            </div>
        `;
    }

    private drawChart(): void {
        if (!this.forecast)
            return;

        const dateTime: Date[] = [];
        const tempHigh: number[] = [];
        const tempLow: number[] = [];
        const precip: number[] = [];

        for (let i = 0; i < this.forecast.length; i++) {
            const d = this.forecast[i];
            dateTime.push(new Date(d.datetime));
            tempHigh.push(d.temperature);
            tempLow.push(d.templow);
            precip.push(d.precipitation);
        }
        const style = getComputedStyle(document.body);
        const textColor = style.getPropertyValue('--primary-text-color');
        const dividerColor = style.getPropertyValue('--divider-color');

        this.chartData = {
            type: 'bar',
            data: {
                labels: dateTime,
                datasets: [
                    {
                        label: this.mode === CardMode.hourly ? localize('temp') : localize('tempHi'),
                        type: 'line',
                        data: tempHigh,
                        yAxisID: 'TempAxis',
                        borderWidth: 2.0,
                        lineTension: 0.4,
                        pointRadius: 0.0,
                        pointHitRadius: 5.0,
                        fill: false,
                    },
                    {
                        label: localize('tempLo'),
                        type: 'line',
                        data: tempLow,
                        yAxisID: 'TempAxis',
                        borderWidth: 2.0,
                        lineTension: 0.4,
                        pointRadius: 0.0,
                        pointHitRadius: 5.0,
                        fill: false,
                    },
                    {
                        label: localize('precip'),
                        type: 'bar',
                        data: precip,
                        yAxisID: 'PrecipAxis',
                    },
                ]
            },
            options: {
                animation: {
                    duration: 300,
                    easing: 'linear',
                    onComplete: function (): void {
                        console.log('running animation completed')
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore
                        const chartInstance = this.chart;
                        const ctx = chartInstance.ctx;
                        ctx.fillStyle = textColor;
                        const fontSize = 10;
                        const fontStyle = 'normal';
                        const fontFamily = 'Roboto';
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore
                        ctx.font = Chart.helpers.fontString(fontSize, fontStyle, fontFamily);
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';
                        const meta = chartInstance.controller.getDatasetMeta(2);
                        meta.data.forEach(function (bar, index) {
                            const data = (Math.round((chartInstance.data.datasets[2].data[index]) * 10) / 10).toFixed(1);
                            ctx.fillText(data, bar._model.x, bar._model.y - 5);
                        });
                    },
                },
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            type: 'time',
                            maxBarThickness: 15,
                            display: false,
                            ticks: {
                                display: false,
                            },
                            gridLines: {
                                display: false,
                            },
                        },
                        {
                            id: 'DateAxis',
                            position: 'top',
                            gridLines: {
                                display: true,
                                drawBorder: false,
                                color: dividerColor,
                            },
                            ticks: {
                                display: true,
                                source: 'labels',
                                autoSkip: true,
                                fontColor: textColor,
                                maxRotation: 0,
                                callback: (value): string => {
                                    return this.getDateString(value)
                                },
                            }
                        }
                    ],
                    yAxes: [
                        {
                            id: 'TempAxis',
                            position: 'left',
                            gridLines: {
                                display: true,
                                drawBorder: false,
                                color: dividerColor,
                                borderDash: [1, 3],
                            },
                            ticks: {
                                display: true,
                                fontColor: textColor,
                            },
                            afterFit: (scaleInstance): void => {
                                scaleInstance.width = 28;
                            },
                        },
                        {
                            id: 'PrecipAxis',
                            position: 'right',
                            gridLines: {
                                display: false,
                                drawBorder: false,
                                color: dividerColor,
                            },
                            ticks: {
                                display: false,
                                min: 0,
                                suggestedMax: 20,
                                fontColor: textColor,
                            },
                            afterFit: (scaleInstance): void => {
                                scaleInstance.width = 15;
                            },
                        }
                    ],
                },
                tooltips: {
                    mode: 'index',
                    callbacks: {
                        title: (items, data): string => {
                            const item = items[0];
                            const date = data.labels[item.index];
                            return new Date(date).toLocaleDateString(this.currentLanguage, {
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
                                return label + ': ' + (tooltipItems.yLabel ? (tooltipItems.yLabel + ' ' + this.getUnit('precipitation')) : ('0 ' + this.getUnit('precipitation')));
                            }
                            return label + ': ' + tooltipItems.yLabel + ' ' + this.getUnit('temperature');
                        },
                    },
                },
            },
        };
    }

    private getWeatherIcon(condition, sun): string {
        return `${
            this.config.icons
                ? this.config.icons
                : 'https://cdn.jsdelivr.net/gh/MarcHagen/weather-card/dist/icons/'
        }${
            sun && sun === 'below_horizon'
                ? weatherIconsNight[condition]
                : weatherIconsDay[condition]
        }.svg`;
    }

    private static getWindDirIcon(degree): string {
        return cardinalDirectionsIcon[((degree + 22.5) / 45.0)];
    }

    private static getWindDir(degree): string {
        return localize('cardinalDirections')[((degree + 11.25) / 22.5)];
    }

    private getWindForce(): TemplateResult {
        if (this.getUnit('length') !== 'km' || !this.weatherObj) {
            return html``;
        }

        const force = Math.ceil(Math.cbrt(Math.pow((this.weatherObj.attributes.wind_speed / 3.6) / 0.836, 2)))
        return html` | ${force} <span class="unit">Bft</span>`;
    }

    private getUnit(measure): string {
        const lengthUnit = this.hass.config.unit_system.length;
        switch (measure) {
            case 'air_pressure':
                return lengthUnit === 'km' ? localize('uPress') : 'mbar';
            case 'length':
                return lengthUnit;
            case 'precipitation':
                return lengthUnit === 'km' ? localize('uPrecip') : 'in';
            case 'intensity':
                return lengthUnit === 'km' ? localize('uPrecip') + '/h' : 'in/h'
            default:
                return this.hass.config.unit_system[measure] || '';
        }
    }

    private getDateString(datetime): string {
        if (this.mode === CardMode.hourly) {
            return new Date(datetime).toLocaleTimeString(this.currentLanguage, { hour: 'numeric' });
        }

        return new Date(datetime).toLocaleDateString(this.currentLanguage, { weekday: 'short' });
    }

    private getCardSize(): number {
        return this.numberElements || 3;
    }

    // https://lit-element.polymer-project.org/guide/styles
    static get styles(): CSSResult {
        return style
    }
}
