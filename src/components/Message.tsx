import { Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

interface MessageProps {
  message: ChatMessage;
}

const Message = ({ message }: MessageProps) => {
  const isUser = message.role === 'user';

  return (
    <div
      className={cn(
        'flex gap-3 px-4 py-5 transition-colors',
        isUser ? 'bg-chat-user' : 'bg-chat-ai'
      )}
    >
      <div
        className={cn(
          'flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg',
          isUser ? 'bg-primary/20' : 'bg-accent/30'
        )}
      >
        {isUser ? (
          <User className="h-4 w-4 text-primary" />
        ) : (
          <Bot className="h-4 w-4 text-accent-foreground" />
        )}
      </div>
      <div className="flex-1 min-w-0 pt-0.5">
        {isUser ? (
          <p className="text-sm leading-relaxed whitespace-pre-wrap break-words text-chat-user-foreground">
            {message.content}
          </p>
        ) : (
          <div className="prose prose-invert prose-sm max-w-none text-chat-ai-foreground prose-headings:text-foreground prose-strong:text-foreground prose-code:text-primary prose-code:bg-secondary prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-secondary prose-pre:border prose-pre:border-border prose-pre:rounded-xl prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-li:marker:text-muted-foreground">
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
