import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Conversation } from '../types';

const initialState: Conversation[] = [];

const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addOrUpdateConversation: (state, action: PayloadAction<Conversation>) => {
            const index = state.findIndex(conv => conv.conversationId === action.payload.conversationId);
            if (index !== -1) {
                state[index] = action.payload;
            } else {
                state.push(action.payload);
            }
        },
        removeConversation: (state, action: PayloadAction<string>) => {
            return state.filter(conv => conv.conversationId !== parseInt(action.payload));
        },
        setActiveConversation: (state, action) => {
            return state.map(conv => {
                if (conv.conversationId === parseInt(action.payload)) {
                    return { ...conv, active: true };
                }
                return { ...conv, active: false };
            });
        }
    }
});

export const { addOrUpdateConversation, removeConversation, setActiveConversation } = chatSlice.actions;

export default chatSlice.reducer;
