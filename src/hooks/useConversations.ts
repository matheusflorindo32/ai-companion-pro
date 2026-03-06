import { useState, useCallback } from 'react';
import { ChatMessage } from '@/components/Message';

export interface Conversation {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
}

export const useConversations = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeConversation = conversations.find((c) => c.id === activeId) ?? null;

  const createConversation = useCallback(() => {
    const id = crypto.randomUUID();
    const conv: Conversation = {
      id,
      title: '',
      messages: [],
      createdAt: new Date(),
    };
    setConversations((prev) => [conv, ...prev]);
    setActiveId(id);
    return id;
  }, []);

  const setActiveConversation = useCallback((id: string) => {
    setActiveId(id);
  }, []);

  const addMessage = useCallback((conversationId: string, message: ChatMessage) => {
    setConversations((prev) =>
      prev.map((c) => {
        if (c.id !== conversationId) return c;
        const updated = { ...c, messages: [...c.messages, message] };
        // Set title from first user message
        if (!c.title && message.role === 'user') {
          updated.title = message.content.slice(0, 40) + (message.content.length > 40 ? '…' : '');
        }
        return updated;
      })
    );
  }, []);

  const deleteConversation = useCallback(
    (id: string) => {
      setConversations((prev) => prev.filter((c) => c.id !== id));
      if (activeId === id) {
        setActiveId(null);
      }
    },
    [activeId]
  );

  const startNewChat = useCallback(() => {
    setActiveId(null);
  }, []);

  return {
    conversations,
    activeConversation,
    activeId,
    createConversation,
    setActiveConversation,
    addMessage,
    deleteConversation,
    startNewChat,
  };
};
