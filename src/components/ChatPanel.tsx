import Message from './Message';
import InputBox from './InputBox';
import LoadingIndicator from './LoadingIndicator';
import WelcomeScreen from './WelcomeScreen';
import ChatHeader from './ChatHeader';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useChatContext } from '@/contexts/ChatContext';

const ChatPanel = () => {
  const {
    locale,
    setLocale,
    t,
    messages,
    isLoading,
    messagesEndRef,
    handleSend,
  } = useChatContext();

  return (
    <div className="flex flex-col h-screen max-h-screen flex-1">
      <header className="flex items-center border-b border-border bg-card/80 backdrop-blur-sm">
        <SidebarTrigger className="ml-3 text-muted-foreground hover:text-foreground" />
        <ChatHeader
          title={t('app.title')}
          subtitle={t('app.subtitle')}
          locale={locale}
          onLocaleChange={setLocale}
        />
      </header>

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

export default ChatPanel;
