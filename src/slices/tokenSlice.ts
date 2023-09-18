import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = 1000; 

const maxTokenSlice = createSlice({
    name: 'maxToken',
    initialState,
    reducers: {
        setMaxToken: (state, action: PayloadAction<number>) => {
            return action.payload;
        }
    }
});

export const { setMaxToken } = maxTokenSlice.actions;
export default maxTokenSlice.reducer;