import * as en from './languages/en.json';
import * as da from './languages/da.json';
import * as de from './languages/de.json';
import * as es from './languages/es.json';
import * as fr from './languages/fr.json';
import * as nl from './languages/nl.json';
import * as ru from './languages/ru.json';
import * as sv from './languages/sv.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const languages: any = {
    en: en,
    // eslint-disable-next-line @typescript-eslint/camelcase
    en_GB: en,
    da: da,
    de: de,
    es: es,
    fr: fr,
    nl: nl,
    ru: ru,
    sv: sv,
};

export function localize(string: string, search = '', replace = ''): string {
    const lang = (localStorage.getItem('selectedLanguage') || 'en').replace(/['"]+/g, '').replace('-', '_');

    let translated: string;

    try {
        translated = string.split('.').reduce((o, i) => o[i], languages[lang]);
    } catch (e) {
        translated = string.split('.').reduce((o, i) => o[i], languages['en']);
    }

    if (translated === undefined) translated = string.split('.').reduce((o, i) => o[i], languages['en']);

    if (search !== '' && replace !== '') {
        translated = translated.replace(search, replace);
    }
    return translated;
}
