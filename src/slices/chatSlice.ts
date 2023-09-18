import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Message {
    id: number;
    type: 'user' | 'ai';
    message: string;
    name: string;
    time: Date;
}

interface Conversation {
    conversationId: number;
    timestamp: string;
    messages: Message[];
}

interface ChatState {
    conversations: Conversation[];
    currentConversation: Conversation | null;
    isLoading: boolean;
}

const initialState: ChatState = {
    conversations: [],
    currentConversation: null,
    isLoading: false
};

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addConversation: (state, action: PayloadAction<Conversation>) => {
            state.conversations.push(action.payload);
        },
        updateConversation: (state, action: PayloadAction<Conversation>) => {
            const index = state.conversations.findIndex(conv => conv.conversationId === action.payload.conversationId);
            if (index !== -1) {
                state.conversations[index] = action.payload;
            }
        },
        setCurrentConversation: (state, action: PayloadAction<Conversation | null>) => {
            state.currentConversation = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        resetCurrentConversation: (state) => {
            state.currentConversation = null;
        }
    }
});

export const { addConversation, updateConversation, setCurrentConversation, setLoading, resetCurrentConversation } = chatSlice.actions;

export default chatSlice.reducer;
