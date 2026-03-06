import { SidebarProvider } from '@/components/ui/sidebar';
import { ChatProvider } from '@/contexts/ChatContext';
import ChatSidebar from '@/components/ChatSidebar';
import ChatPanel from '@/components/ChatPanel';

const Index = () => {
  return (
    <SidebarProvider>
      <ChatProvider>
        <div className="min-h-screen flex w-full">
          <ChatSidebar />
          <ChatPanel />
        </div>
      </ChatProvider>
    </SidebarProvider>
  );
};

export default Index;
