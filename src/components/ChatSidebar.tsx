import { MessageSquare, Plus, Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Conversation } from '@/hooks/useConversations';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

interface ChatSidebarProps {
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onNew: () => void;
  onDelete: (id: string) => void;
  t: (key: string) => string;
}

const ChatSidebar = ({ conversations, activeId, onSelect, onNew, onDelete, t }: ChatSidebarProps) => {
  const { state } = useSidebar();
  const collapsed = state === 'collapsed';

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todayConversations = conversations.filter((c) => new Date(c.createdAt) >= today);
  const previousConversations = conversations.filter((c) => new Date(c.createdAt) < today);

  const renderItem = (conv: Conversation) => (
    <SidebarMenuItem key={conv.id}>
      <SidebarMenuButton
        onClick={() => onSelect(conv.id)}
        className={cn(
          'group justify-between',
          conv.id === activeId && 'bg-sidebar-accent text-sidebar-accent-foreground'
        )}
      >
        <div className="flex items-center gap-2 min-w-0">
          <MessageSquare className="h-4 w-4 flex-shrink-0" />
          {!collapsed && (
            <span className="truncate text-sm">{conv.title || '…'}</span>
          )}
        </div>
        {!collapsed && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(conv.id);
            }}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-destructive/20 hover:text-destructive"
            aria-label="Delete"
          >
            <Trash2 className="h-3 w-3" />
          </button>
        )}
      </SidebarMenuButton>
    </SidebarMenuItem>
  );

  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader className="p-3">
        <button
          onClick={onNew}
          className={cn(
            'flex items-center gap-2 w-full rounded-lg border border-sidebar-border px-3 py-2.5 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors',
            collapsed && 'justify-center px-2'
          )}
        >
          <Plus className="h-4 w-4 flex-shrink-0" />
          {!collapsed && <span>{t('sidebar.newChat')}</span>}
        </button>
      </SidebarHeader>

      <SidebarContent>
        {conversations.length === 0 ? (
          !collapsed && (
            <div className="px-4 py-8 text-center">
              <p className="text-xs text-muted-foreground">{t('sidebar.noHistory')}</p>
            </div>
          )
        ) : (
          <>
            {todayConversations.length > 0 && (
              <SidebarGroup>
                {!collapsed && <SidebarGroupLabel>{t('sidebar.today')}</SidebarGroupLabel>}
                <SidebarGroupContent>
                  <SidebarMenu>{todayConversations.map(renderItem)}</SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            )}
            {previousConversations.length > 0 && (
              <SidebarGroup>
                {!collapsed && <SidebarGroupLabel>{t('sidebar.previous')}</SidebarGroupLabel>}
                <SidebarGroupContent>
                  <SidebarMenu>{previousConversations.map(renderItem)}</SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            )}
          </>
        )}
      </SidebarContent>
    </Sidebar>
  );
};

export default ChatSidebar;
