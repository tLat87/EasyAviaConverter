import { createSlice } from '@reduxjs/toolkit';

const vibrationSlice = createSlice({
    name: 'vibration',
    initialState: {
        enabled: false,
    },
    reducers: {
        toggleVibration: (state) => {
            state.enabled = !state.enabled;
        },
    },
});

export const { toggleVibration } = vibrationSlice.actions;
export default vibrationSlice.reducer;
