import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../slices/chatSlice';
import maxTokenReducer from '../slices/tokenSlice';

const store = configureStore({
    reducer: {
        chat: chatReducer,
        maxToken: maxTokenReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;