import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LogEntry = {
    date: string;
    title: string;
    note: string;
    photo: string | null;
};

type LogState = {
    entries: LogEntry[];
};

const initialState: LogState = {
    entries: [],
};

const logSlice = createSlice({
    name: 'log',
    initialState,
    reducers: {
        addLogEntry: (state, action: PayloadAction<LogEntry>) => {
            state.entries.push(action.payload);
        },
    },
});

export const { addLogEntry } = logSlice.actions;
export default logSlice.reducer;
