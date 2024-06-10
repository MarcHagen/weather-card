import { LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';
import { HassEntityAttributeBase, HassEntityBase } from 'home-assistant-js-websocket';

declare global {
  interface HTMLElementTagNameMap {
    'weather-card-editor': LovelaceCardEditor;
  }
}

export interface WeatherCardConfig extends LovelaceCardConfig {
  entity_weather: string;
  entity_sun: string;
  forecast_type?: ForecastType;
  card_config_version?: number;
  forecastMaxColumn?: number;
  icons?: string;
  details?: boolean;
  forecast?: boolean;
  current?: boolean;
  graph?: boolean;
  hidePrecipitation?: boolean;
}
export const WeatherCardConfigKeys: string[] = [
  'entity_weather',
  'entity_sun',
  'forecast_type',
  'card_config_version',
  'forecastMaxColumn',
  'icons',
  'details',
  'forecast',
  'current',
  'graph',
  'hidePrecipitation',
];

// https://github.com/home-assistant/frontend/blob/dev/src/data/weather.ts
export type ModernForecastType = 'hourly' | 'daily' | 'twice_daily';
// https://github.com/home-assistant/frontend/blob/dev/src/data/weather.ts
export type ForecastType = ModernForecastType | 'legacy';

// https://github.com/home-assistant/frontend/blob/dev/src/data/weather.ts
export interface ForecastEvent {
  type: 'hourly' | 'daily' | 'twice_daily';
  forecast: ForecastAttribute[] | null;
}

// https://github.com/home-assistant/frontend/blob/dev/src/data/weather.ts
export interface ForecastAttribute {
  temperature: number;
  datetime: string;
  templow?: number;
  precipitation?: number;
  precipitation_probability?: number;
  humidity?: number;
  condition?: string;
  is_daytime?: boolean;
  pressure?: number;
  wind_speed?: string;
}

// https://github.com/home-assistant/frontend/blob/dev/src/data/weather.ts
interface WeatherEntityAttributes extends HassEntityAttributeBase {
  attribution?: string;
  humidity?: number;
  forecast?: ForecastAttribute[];
  is_daytime?: boolean;
  pressure?: number;
  temperature?: number;
  visibility?: number;
  wind_bearing?: number | string;
  wind_speed?: number;
  precipitation_unit: string;
  pressure_unit: string;
  temperature_unit: string;
  visibility_unit: string;
  wind_speed_unit: string;
}

//  https://github.com/home-assistant/frontend/blob/dev/src/data/weather.ts
export interface WeatherEntity extends HassEntityBase {
  attributes: WeatherEntityAttributes;
}
