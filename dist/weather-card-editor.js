const fireEvent = (node, type, detail, options) => {
  options = options || {};
  detail = detail === null || detail === undefined ? {} : detail;
  const event = new Event(type, {
    bubbles: options.bubbles === undefined ? true : options.bubbles,
    cancelable: Boolean(options.cancelable),
    composed: options.composed === undefined ? true : options.composed,
  });
  event.detail = detail;
  node.dispatchEvent(event);
  return event;
};

if (
  !customElements.get("ha-switch") &&
  customElements.get("paper-toggle-button")
) {
  customElements.define("ha-switch", customElements.get("paper-toggle-button"));
}

const LitElement = Object.getPrototypeOf(customElements.get("hui-view"));
const html = LitElement.prototype.html;
const css = LitElement.prototype.css;

export class WeatherCardEditor extends LitElement {
  setConfig(config) {
    this._config = config;
  }

  static get properties() {
    return { hass: {}, _config: {} };
  }

  get _entity() {
    return this._config.entity || "";
  }

  get _name() {
    return this._config.name || "";
  }

  get _icons() {
    return this._config.icons || "";
  }
  
  get _language() {
    return this._config.language || "";
  }

  get _current() {
    return this._config.current !== false;
  }

  get _details() {
    return this._config.details !== false;
  }

  get _forecast() {
    return this._config.forecast !== false;
  }

  get _graph() {
    return this._config.graph !== false;
  }

  get _forecast_max_Column() {
    return this._config.forecast_max_Column || 9;
  }

  get _hide_precipitation() {
    return this._config.hide_precipitation === true;
  }
  
  render() {
    if (!this.hass) {
      return html``;
    }

    const entities = Object.keys(this.hass.states).filter(
      (eid) => eid.substr(0, eid.indexOf(".")) === "weather"
    );
    
    const languages = [
      'hacs', 'da', 'de', 'en', 'es', 'fr', 'nl', 'ru', 'sv'
    ]

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
          <paper-dropdown-menu
            label="Language"
            @value-changed="${this._valueChanged}"
            .configValue="${"language"}"
          >
            <paper-listbox
              slot="dropdown-content"
              .selected="${languages.indexOf(this._language)}"
            >
              ${languages.map((lang) => {
                return html`
                  <paper-item>${lang}</paper-item>
                `;
              })}
            </paper-listbox>
          </paper-dropdown-menu>
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
                  <paper-listbox
                    slot="dropdown-content"
                    .selected="${entities.indexOf(this._entity)}"
                  >
                    ${entities.map((entity) => {
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
            .checked=${this._hide_precipitation}
            .configValue="${"hide_precipitation"}"
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
            .value="${this._forecast_max_Column}"
            .configValue="${"forecast_max_Column"}"
            @value-changed="${this._valueChanged}"
            min="2"
            max="20"
          ></paper-input>
        </div>
      </div>
    `;
  }

  _valueChanged(ev) {
    if (!this._config || !this.hass) {
      return;
    }
    const target = ev.target;
    if (this[`_${target.configValue}`] === target.value) {
      return;
    }
    if (target.configValue) {
      if (target.value === "") {
        delete this._config[target.configValue];
      } else {
        this._config = {
          ...this._config,
          [target.configValue]:
            target.checked !== undefined ? target.checked : target.value,
        };
      }
    }
    fireEvent(this, "config-changed", { config: this._config });
  }

  static get styles() {
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

customElements.define("weather-card-editor", WeatherCardEditor);
