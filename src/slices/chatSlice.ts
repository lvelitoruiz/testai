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
        setActiveConversation: (state, action) => {
            return state.map(conv => {
                console.log(conv.conversationId);
                console.log(action.payload);
                if (conv.conversationId === parseInt(action.payload)) {
                    return { ...conv, active: true };
                }
                return { ...conv, active: false };
            });
        }
    }
});

export const { addOrUpdateConversation } = chatSlice.actions;

export const { setActiveConversation } = chatSlice.actions;

export default chatSlice.reducer;
