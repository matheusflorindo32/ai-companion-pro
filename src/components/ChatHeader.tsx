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
    <header className="flex items-center justify-between px-6 py-4 border-b border-border bg-card/80 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/15">
          <Bot className="h-5 w-5 text-primary" />
        </div>
        <div>
          <h1 className="text-base font-semibold text-foreground tracking-tight">{title}</h1>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
      </div>
      <LanguageSelector locale={locale} onLocaleChange={onLocaleChange} />
    </header>
  );
};

export default ChatHeader;
