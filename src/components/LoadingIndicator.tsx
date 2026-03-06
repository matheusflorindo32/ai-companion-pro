import { Bot } from 'lucide-react';

interface LoadingIndicatorProps {
  text: string;
}

const LoadingIndicator = ({ text }: LoadingIndicatorProps) => {
  return (
    <div className="flex gap-3 px-4 py-5 bg-chat-ai">
      <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-accent/30">
        <Bot className="h-4 w-4 text-accent-foreground" />
      </div>
      <div className="flex items-center gap-2 pt-1">
        <div className="flex gap-1">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot animate-pulse-dot-delay-1" />
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-dot animate-pulse-dot-delay-2" />
        </div>
        <span className="text-sm text-muted-foreground ml-1">{text}</span>
      </div>
    </div>
  );
};

export default LoadingIndicator;
