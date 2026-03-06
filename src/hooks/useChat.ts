import { useState, useRef, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useI18n } from '@/hooks/useI18n';
import { useConversations } from '@/hooks/useConversations';
import { ChatMessage } from '@/components/Message';
import { toast } from 'sonner';

const useChat = () => {
  const { locale, setLocale, t } = useI18n();
  const {
    activeConversation,
    activeId,
    createConversation,
    addMessage,
    conversations,
    setActiveConversation,
    deleteConversation,
    startNewChat,
  } = useConversations();
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const messages = activeConversation?.messages ?? [];

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  const handleSend = async (content: string) => {
    let convId = activeId;
    if (!convId) {
      convId = createConversation();
    }

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content,
    };

    addMessage(convId, userMessage);
    setIsLoading(true);

    try {
      const history = [...messages, userMessage].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const { data, error } = await supabase.functions.invoke('chat', {
        body: { message: content, history },
      });

      if (error) throw error;

      const assistantMessage: ChatMessage = {
        id: crypto.randomUUID(),
        role: 'assistant',
        content: data.response,
      };

      addMessage(convId, assistantMessage);
    } catch {
      toast.error(t('chat.error'));
    } finally {
      setIsLoading(false);
    }
  };

  return {
    locale,
    setLocale,
    t,
    messages,
    isLoading,
    messagesEndRef,
    handleSend,
    conversations,
    activeId,
    setActiveConversation,
    deleteConversation,
    startNewChat,
  };
};

export default useChat;
