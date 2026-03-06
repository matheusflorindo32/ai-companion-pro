import { useState, useCallback } from 'react';
import { Locale, getTranslation } from '@/i18n';

export const useI18n = () => {
  const [locale, setLocale] = useState<Locale>('pt-BR');

  const t = useCallback(
    (key: string) => getTranslation(locale, key),
    [locale]
  );

  return { locale, setLocale, t };
};
