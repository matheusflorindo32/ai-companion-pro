import ptBR from './pt-BR.json';
import en from './en.json';
import fr from './fr.json';

export type Locale = 'pt-BR' | 'en' | 'fr';

const translations: Record<Locale, Record<string, string>> = {
  'pt-BR': ptBR,
  en,
  fr,
};

export const getTranslation = (locale: Locale, key: string): string => {
  return translations[locale]?.[key] ?? translations['pt-BR'][key] ?? key;
};

export const locales: { value: Locale; label: string }[] = [
  { value: 'pt-BR', label: 'Português' },
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'Français' },
];
