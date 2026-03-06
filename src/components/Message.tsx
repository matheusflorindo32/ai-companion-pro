import { Bot, User } from 'lucide-react';
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
        <p
          className={cn(
            'text-sm leading-relaxed whitespace-pre-wrap break-words',
            isUser ? 'text-chat-user-foreground' : 'text-chat-ai-foreground'
          )}
        >
          {message.content}
        </p>
      </div>
    </div>
  );
};

export default Message;
