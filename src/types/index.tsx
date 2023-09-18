export interface promptProperties {
    className?: string,
    wand?: boolean,
    maxTokens: number,
    onUpdatePrompt: (value: string) => void,
}

export interface hourProperties {
    time: string;
}

export interface buttonProps {
    icon: 'AddCircle' | 'Send',
    text: string,
}

export interface chatProps {
    sidebar: boolean,
}

export interface ChatImperativeHandles {
    triggerConversationChange: (id: string) => void;
    triggerConversationHistoryChange: (id: string) => void;
}


export interface messageProps {
    id: number,
    type: 'user' | 'ai',
    name: string,
    message: string,
    time: Date,
}

export interface Conversation {
    conversationId: number;
    timestamp: string;
    messages: messageProps[];
};

export interface HeaderProps {
    sidebar: boolean;
    onActivateSidebar: () => void;
}

export interface historyMessage {
    id: number,
    type: "user" | "ai",
    message: string,
    name: string,
    time: string,
}

export interface historyItem {
    conversationId: string,
    messages: historyMessage[],
    timestamp: string,
    active: boolean,
}

export interface ItemProps {
    activeItem: boolean,
    title: string,
    time: string,
    conversationId: string,
    onActivateItem: (id: string) => void,
}

export type IconProps = {
    name: 'AddCircle' | 'Send';
    className?: string;
}

export interface inputProps {
    texto: string;
    placeholder: string;
    name: string;
    type?: string;
    customStyles?: React.CSSProperties;
    extraStyles?: string;
    onValueChange: (value: string) => void;
}

export interface chatLayoutProperties {
    conversation: Conversation | null,
    loading: boolean,
}

export interface historyProperties {
    chatList: string,
    onHistoryChange: (id: string) => void,
}

export interface sidebarProperties {
    onConversationChange: (id: string) => void,
    onConversationHistoryChange: (id: string) => void,
}

export interface chatHeaderProperties {
    onNewConversation: () => void,
}


export interface promptContainerProperties {
    onPromptChangingConversation: (value: string) => void,
}