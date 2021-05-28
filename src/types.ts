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
    daily
}

export interface WeatherObjectForecast {
    templow: number;
    temperature: number;
    condition: string;
    datetime: string;
    wind_bearing: number;
    wind_speed: number;
    precipitation: number;
}
