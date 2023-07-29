import polyglotI18nProvider from 'ra-i18n-polyglot';
import { en } from '../../shared/i18n/locales/en/translations';
import { ru } from '../../shared/i18n/locales/ru/translations';
import { pl } from '../../shared/i18n/locales/pl/translations';
import { be } from '../../shared/i18n/locales/be/translations';

const translations = { en, ru, pl, be };

export const i18nProvider = polyglotI18nProvider(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  (locale) => translations[locale],
  'en',
  [
    { locale: 'en', name: 'English' },
    { locale: 'ru', name: 'Русский' },
    { locale: 'pl', name: 'Polski' },
    { locale: 'be', name: 'Беларускі' },
  ],
);
