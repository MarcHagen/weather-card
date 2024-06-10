import * as en from './languages/en.json';
import * as da from './languages/da.json';
import * as de from './languages/de.json';
import * as es from './languages/es.json';
import * as fr from './languages/fr.json';
import * as nl from './languages/nl.json';
import * as ru from './languages/ru.json';
import * as sv from './languages/sv.json';
import { FrontendLocaleData } from 'custom-card-helpers';

export enum Language {
  // English (default)
  ENGLISH = 'en',
  ENGLISH_BRITISH = 'en_GB',

  // Foreign Languages
  DANISH = 'da',
  GERMAN = 'de',
  SPANISH = 'es',
  FRENCH = 'fr',
  DUTCH = 'nl',
  RUSSIAN = 'ru',
  SWEDISH = 'sv',
}

export interface LanguageEntry {
  // Common phases
  common?: {
    invalid_configuration: string;
    invalid_entity: string;
    show_warning: string;
    show_error: string;
  };

  temp: string;
  tempHi: string;
  tempLo: string;
  precip: string;
  uPress: string;
  uSpeed: string;
  uPrecip: string;
  cardinalDirections: string[];
}

const languages: { [key in Language]: LanguageEntry } = {
  en: en,
  en_GB: en,
  da: da,
  de: de,
  es: es,
  fr: fr,
  nl: nl,
  ru: ru,
  sv: sv,
};

const defaultLanguage: string = Language.ENGLISH.valueOf();

export function localize(
  string: string,
  locale: FrontendLocaleData,
  search: string | (string | number)[] = '',
  replace: string | (string | number)[] = '',
): string {
  let translated: string;

  try {
    if (locale.language === 'test') return 'TRANSLATED';
    translated = string.split('.').reduce((o: string, i: string) => o[i], languages[locale.language]);
    if (!translated) translated = string.split('.').reduce((o: string, i: string) => o[i], languages[defaultLanguage]);
  } catch (e) {
    try {
      translated = string.split('.').reduce((o, i) => o[i], languages[defaultLanguage]);
    } catch (e) {
      translated = '';
    }
  }

  if (search !== '' && replace !== '' && translated) {
    if (!Array.isArray(search)) search = [search];
    if (!Array.isArray(replace)) replace = [replace];
    for (let i = 0; i < (search as string[]).length; i++) {
      translated = translated.replace(String(search[i]), String(replace[i]));
      const res = translated.match(/\{if ([a-z]+) is ([^}]+)} ?([^{]+) ?\{else} ?([^{]+)/i);
      if (res && String(search[i]).replace(/[{}']+/g, '') == res[1]) {
        const is_match = String(replace[i]) == res[2];
        if (is_match) translated = translated.replace(res[0], res[3]);
        else translated = translated.replace(res[0], res[4]);
      }
    }
  }
  return translated;
}
