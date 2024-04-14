import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const eventsSlice = createSlice({
    name: "events",
    initialState: {
        data: [],
        page: 1,
        totalPages: 1,
        status: "idle",
        error: null,
    },
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload;
        },
    },

    extraReducers(builder) {
        builder
            .addCase(fetchEvents.pending, (state, action) => {
                state.status = "loading";
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.data = action.payload.data;
                state.totalPages = action.payload.meta.last_page;
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

export const fetchEvents = createAsyncThunk(
    "events/fetchEvents",
    async (_, { getState }) => {
        const { events } = getState();
        const response = await axios.get(`api/events?page=${events.page}&include=user`);
        return response.data;
    }
);

export const { changePage } = eventsSlice.actions;

export const selectAllEvents = (state) => state.events.data;

export default eventsSlice.reducer;
