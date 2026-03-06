import { Bot } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { Locale } from '@/i18n';

interface ChatHeaderProps {
  title: string;
  subtitle: string;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

const ChatHeader = ({ title, subtitle, locale, onLocaleChange }: ChatHeaderProps) => {
  return (
    <div className="flex-1 flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-primary/15">
          <Bot className="h-4 w-4 text-primary" />
        </div>
        <div>
          <h1 className="text-sm font-semibold text-foreground tracking-tight">{title}</h1>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <LanguageSelector locale={locale} onLocaleChange={onLocaleChange} />
    </div>
  );
};

export default ChatHeader;
