import { LitElement, html, TemplateResult, CSSResult, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';

import { WeatherCardConfig, WeatherCardConfigKeys } from './types';
import { stopPropagation } from './const';

@customElement('weather-card-editor')
export class WeatherCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: WeatherCardConfig;
  @state() private _toggle?: boolean;

  private _initialized = false;
  private _config_version = 2;

  public setConfig(config: WeatherCardConfig): void {
    this._config = config;
  }

  protected shouldUpdate(): boolean {
    if (!this._initialized) {
      this._initialize();
    }

    return true;
  }

  private _configCleanup() {
    if (!this._config || !this.hass) {
      return;
    }

    let tmpConfig = { ...this._config };

    // Rename options
    if (tmpConfig.entity) {
      tmpConfig['entity_weather'] = tmpConfig.entity;
      delete tmpConfig['entity'];
    }

    // Remove unused entries
    for (const element in this._config) {
      if (!WeatherCardConfigKeys.includes(element)) {
        delete tmpConfig[element];
      }
    }

    tmpConfig = {
      ...tmpConfig,
      card_config_version: this._config_version,
    };

    this._config = tmpConfig;

    fireEvent(this, 'config-changed', { config: this.sortObjectByKeys(this._config) });
  }

  private sortObjectByKeys(object: Record<string, unknown>) {
    return Object.keys(object)
      .sort()
      .reduce((r, k) => ((r[k] = object[k]), r), {});
  }

  protected async firstUpdated(): Promise<void> {
    if (this._config && this.hass) {
      if (this._config.card_config_version !== this._config_version) {
        this._configCleanup();
      }
    }
  }

  get _name(): string {
    return this._config?.name || '';
  }

  get _entity_weather(): string {
    return this._config?.entity_weather || '';
  }

  get _entity_sun(): string {
    return this._config?.entity_sun || 'sun.sun';
  }

  get _forecast_type(): string {
    return this._config?.forecast_type || 'daily';
  }

  get _icons(): string {
    return this._config?.icons || '';
  }

  get _current(): boolean {
    return this._config?.current !== false;
  }

  get _details(): boolean {
    return this._config?.details !== false;
  }

  get _forecast(): boolean {
    return this._config?.forecast !== false;
  }

  get _graph(): boolean {
    return this._config?.graph !== false;
  }

  get _forecastMaxColumn(): number {
    return this._config?.forecastMaxColumn || 5;
  }

  get _hidePrecipitation(): boolean {
    return this._config?.hidePrecipitation === true;
  }

  protected render(): TemplateResult | typeof nothing {
    if (!this.hass || !this._config) {
      return nothing;
    }

    return html`
      <div class="card-config">
        <div>
          <paper-input
            label="Name"
            .value=${this._name}
            .configValue=${'name'}
            @value-changed=${this._valueChanged}
          ></paper-input>
          <paper-input
            label="Icons location"
            .value=${this._icons}
            .configValue=${'icons'}
            @value-changed=${this._valueChanged}
          ></paper-input>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._entity_weather}
            .configValue=${'entity_weather'}
            .includeDomains=${['sun', 'sensor']}
            name="weather_entity"
            label="Entity Weater"
            allow-custom-entity
            @value-changed=${this._valueChangedPicker}
          ></ha-entity-picker>
          <ha-entity-picker
            .hass=${this.hass}
            .value=${this._entity_sun}
            .configValue=${'entity_sun'}
            .includeDomains=${['sun', 'sensor']}
            name="entity_sun"
            label="Entity Sun"
            allow-custom-entity
            @value-changed=${this._valueChangedPicker}
          ></ha-entity-picker>
          <br />
          <ha-select
            label="Forecast Type"
            .configValue=${'forecast_type'}
            .value=${this._forecast_type}
            @selected=${this._valueChangedPicker}
            @closed=${stopPropagation}
          >
            <mwc-list-item></mwc-list-item>
            <mwc-list-item value="daily">Daily</mwc-list-item>
            <mwc-list-item value="hourly">Hourly</mwc-list-item>
          </ha-select>
          <div class="options">
            <div class="option">
              <ha-switch .checked=${this._current} .configValue=${'current'} @change=${this._valueChanged}></ha-switch>
              <span class="label">Show current temperature</span>
            </div>
            <div class="option">
              <ha-switch .checked=${this._details} .configValue=${'details'} @change=${this._valueChanged}></ha-switch>
              <span class="label">Show weather details</span>
            </div>
            <div class="option">
              <ha-switch
                .checked=${this._forecast}
                .configValue=${'forecast'}
                @change=${this._valueChanged}
              ></ha-switch>
              <span class="label">Show forecast (table or graph)</span>
            </div>
            ${this._forecast
              ? html`
                  <div class="option">
                    <ha-switch
                      .checked=${this._graph}
                      .configValue=${'graph'}
                      @change=${this._valueChanged}
                    ></ha-switch>
                    <span class="label">Show graph</span>
                  </div>
                `
              : nothing}
            ${this._forecast && !this._graph
              ? html`
                  <div class="option">
                    <ha-switch
                      .checked=${this._hidePrecipitation}
                      .configValue=${'hidePrecipitation'}
                      @change=${this._valueChanged}
                    ></ha-switch>
                    <span class="label">Hide rain precipitation</span>
                  </div>
                `
              : nothing}
          </div>
          <paper-input
            label="forecast max columns (optional)"
            type="number"
            .value=${this._forecastMaxColumn}
            .configValue=${'forecastMaxColumn'}
            @value-changed=${this._valueChangedNumber}
            min="2"
            max="20"
          ></paper-input>
        </div>
      </div>
    `;
  }

  private _initialize(): void {
    if (this.hass === undefined) return;
    if (this._config === undefined) return;
    this._initialized = true;
  }

  private _valueChanged(ev): void {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;
    if (this[`_${target.configValue}`] === target.value) {
      return;
    }
    if (target.configValue) {
      if (target.value === '') {
        delete this._config[target.configValue];
      } else {
        this._config = {
          ...this._config,
          [target.configValue]: target.checked !== undefined ? target.checked : target.value,
        };
      }
    }
    fireEvent(this, 'config-changed', { config: this._config });
  }

  private _valueChangedNumber(ev): void {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;
    if (this[`_${target.configValue}`] === target.value) {
      return;
    }
    if (target.configValue) {
      if (target.value === '' || target.value === null) {
        delete this._config[target.configValue];
      } else {
        this._config = {
          ...this._config,
          [target.configValue]: Number(target.value),
        };
      }
    }
    fireEvent(this, 'config-changed', { config: this.sortObjectByKeys(this._config) });
  }

  private _valueChangedPicker(ev): void {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;
    const value = ev.detail.value;
    if (this[`_${target.configValue}`] === value) {
      return;
    }
    if (target.configValue) {
      if (value) {
        this._config = {
          ...this._config,
          [target.configValue]: value,
        };
      } else {
        this._config = { ...this._config };
        delete this._config[target.configValue];
      }
    }
    fireEvent(this, 'config-changed', { config: this.sortObjectByKeys(this._config) });
  }

  static readonly styles: CSSResult = css`
    .options {
      display: grid;
    }

    .option {
      display: flex;
      margin: 1rem 0;
      align-items: center;
    }

    .option .label {
      margin: 0 1rem;
    }

    .option .help {
      color: var(--secondary-text-color);
    }
  `;
}
