import { Globe } from 'lucide-react';
import { Locale, locales } from '@/i18n';

interface LanguageSelectorProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

const LanguageSelector = ({ locale, onLocaleChange }: LanguageSelectorProps) => {
  return (
    <div className="relative flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <select
        value={locale}
        onChange={(e) => onLocaleChange(e.target.value as Locale)}
        className="appearance-none bg-secondary text-secondary-foreground text-sm rounded-lg px-3 py-1.5 pr-8 border border-border focus:outline-none focus:ring-2 focus:ring-ring cursor-pointer transition-colors hover:bg-muted"
      >
        {locales.map((l) => (
          <option key={l.value} value={l.value}>
            {l.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
