import { useState, useRef, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useI18n } from '@/hooks/useI18n';
import ChatHeader from './ChatHeader';
import Message, { ChatMessage } from './Message';
import InputBox from './InputBox';
import LoadingIndicator from './LoadingIndicator';
import WelcomeScreen from './WelcomeScreen';
import { toast } from 'sonner';

const Chat = () => {
  const { locale, setLocale, t } = useI18n();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  const handleSend = async (content: string) => {
    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('chat', {
        body: {
          message: content,
          history: messages.map((m) => ({ role: m.role, content: m.content })),
        },
      });

      if (error) throw error;

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: data.response,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      toast.error(t('chat.error'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen max-h-screen">
      <ChatHeader
        title={t('app.title')}
        subtitle={t('app.subtitle')}
        locale={locale}
        onLocaleChange={setLocale}
      />

      <main className="flex-1 overflow-y-auto">
        {messages.length === 0 && !isLoading ? (
          <WelcomeScreen
            title={t('chat.welcome.title')}
            subtitle={t('chat.welcome.subtitle')}
          />
        ) : (
          <div className="max-w-3xl mx-auto">
            {messages.map((msg) => (
              <Message key={msg.id} message={msg} />
            ))}
            {isLoading && <LoadingIndicator text={t('chat.loading')} />}
            <div ref={messagesEndRef} />
          </div>
        )}
      </main>

      <InputBox
        placeholder={t('chat.placeholder')}
        sendLabel={t('chat.send')}
        onSend={handleSend}
        disabled={isLoading}
      />
    </div>
  );
};

export default Chat;
