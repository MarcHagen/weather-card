import { LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'weather-card-editor': LovelaceCardEditor;
  }
}

export interface WeatherCardConfig extends LovelaceCardConfig {
  entity: string;
  forecastMaxColumn?: number;
  icons?: string;
  details?: boolean;
  forecast?: boolean;
  current?: boolean;
  graph?: boolean;
  hidePrecipitation?: boolean;
}

export enum CardMode {
  hourly,
  daily,
}

// https://developers.home-assistant.io/docs/core/entity/weather/#forecast
export interface WeatherObjectForecast {
  datetime: string;
  temperature: number;
  condition: string;
  templow: number;
  precipitation: number;
  precipitation_probability: number;
  pressure: number;
  wind_bearing: number | string;
  wind_speed: number;
}
