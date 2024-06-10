import { ModernForecastType, ForecastEvent, ForecastType, ForecastAttribute } from './types';
import { FrontendLocaleData, HomeAssistant, NumberFormat } from 'custom-card-helpers';
import { Language } from './localize/localize';

export const getLocale = (hass: HomeAssistant): FrontendLocaleData =>
  hass.locale || {
    language: hass.language || Language.ENGLISH,
    number_format: NumberFormat.system,
  };

export const subscribeForecast = (
  hass: HomeAssistant,
  entity_id: string,
  forecast_type: ModernForecastType,
  callback: (forecastevent: ForecastEvent) => void,
) =>
  hass.connection.subscribeMessage<ForecastEvent>(callback, {
    type: 'weather/subscribe_forecast',
    forecast_type,
    entity_id,
  });

export const getForecast = (
  forecast_event?: ForecastEvent,
  forecast_type?: ForecastType | undefined,
):
  | {
      forecast: ForecastAttribute[];
      type: 'daily' | 'hourly' | 'twice_daily';
    }
  | undefined => {
  if (forecast_type === undefined) {
    if (forecast_event?.type !== undefined && forecast_event?.forecast && forecast_event?.forecast?.length > 2) {
      return { forecast: forecast_event.forecast, type: forecast_event?.type };
    }

    forecast_type = 'daily';
  }

  if (forecast_type === forecast_event?.type && forecast_event?.forecast && forecast_event?.forecast?.length > 2) {
    return { forecast: forecast_event.forecast, type: forecast_type };
  }

  return undefined;
};
