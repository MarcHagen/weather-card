/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/camelcase */
import {
  LitElement,
  html,
  customElement,
  property,
  TemplateResult,
  CSSResult,
  css,
  state,
} from 'lit-element';
import { HomeAssistant, fireEvent, LovelaceCardEditor } from 'custom-card-helpers';

import { WeatherCardConfig } from './types';

@customElement('weather-card-editor')
export class WeatherCardEditor extends LitElement implements LovelaceCardEditor {
  @property({ attribute: false }) public hass?: HomeAssistant;
  @state() private _config?: WeatherCardConfig;
  @state() private _toggle?: boolean;
  @state() private _helpers?: any;
  private _initialized = false;

  public setConfig(config: WeatherCardConfig): void {
    this._config = config;
  }

  protected shouldUpdate(): boolean {
    if (!this._initialized) {
      this._initialize();
    }

    return true;
  }

  get _name(): string {
    return this._config?.name || '';
  }

  get _entity(): string {
    return this._config?.entity || "";
  }

  get _icons(): string {
    return this._config?.icons || "";
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
    return this._config?.forecastMaxColumn || 9;
  }

  get _hidePrecipitation(): boolean {
    return this._config?.hidePrecipitation === true;
  }

  protected render(): TemplateResult | void {
    if (!this.hass || !this._helpers)
      return html``;

    // The climate more-info has ha-switch and paper-dropdown-menu elements that are lazy loaded unless explicitly done here
    this._helpers.importMoreInfoControl('weather');

    const entities = Object.keys(this.hass.states).filter(eid => eid.substr(0, eid.indexOf('.')) === 'weather');

    return html`
      <div class="card-config">
        <div>
          <paper-input
            label="Name"
            .value="${this._name}"
            .configValue="${"name"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          <paper-input
            label="Icons location"
            .value="${this._icons}"
            .configValue="${"icons"}"
            @value-changed="${this._valueChanged}"
          ></paper-input>
          ${customElements.get("ha-entity-picker")
            ? html`
                <ha-entity-picker
                  .hass="${this.hass}"
                  .value="${this._entity}"
                  .configValue=${"entity"}
                  domain-filter="weather"
                  @change="${this._valueChanged}"
                  allow-custom-entity
                ></ha-entity-picker>
              `
            : html`
                <paper-dropdown-menu
                  label="Entity"
                  @value-changed="${this._valueChanged}"
                  .configValue="${"entity"}"
                >
                  <paper-listbox slot="dropdown-content" .selected="${entities.indexOf(this._entity)}">
                    ${entities.map(entity => {
                      return html`
                        <paper-item>${entity}</paper-item>
                      `;
                    })}
                  </paper-listbox>
                </paper-dropdown-menu>
              `}
          <ha-switch
            .checked=${this._current}
            .configValue="${"current"}"
            @change="${this._valueChanged}"
            >Show current</ha-switch
          >
          <ha-switch
            .checked=${this._details}
            .configValue="${"details"}"
            @change="${this._valueChanged}"
            >Show details</ha-switch
          >
          <ha-switch
            .checked=${this._hidePrecipitation}
            .configValue="${"hidePrecipitation"}"
            @change="${this._valueChanged}"
            >Hide precipitation</ha-switch
          >
          <ha-switch
            .checked=${this._forecast}
            .configValue="${"forecast"}"
            @change="${this._valueChanged}"
            >Show forecast</ha-switch
          >
          <ha-switch
            .checked=${this._graph}
            .configValue="${"graph"}"
            @change="${this._valueChanged}"
            >Show graph</ha-switch
          >
          <paper-input
            label="forecast max columns (optional)"
            type="number"
            .value="${this._forecastMaxColumn}"
            .configValue="${"forecastMaxColumn"}"
            @value-changed="${this._valueChanged}"
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
    if (this._helpers === undefined) return;
    this._initialized = true;
  }

  private async loadCardHelpers(): Promise<void> {
    this._helpers = await (window as any).loadCardHelpers();
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

  static get styles(): CSSResult {
    return css`
      ha-switch {
        padding-top: 16px;
      }
      .side-by-side {
        display: flex;
      }
      .side-by-side > * {
        flex: 1;
        padding-right: 4px;
      }
    `;
  }
}
