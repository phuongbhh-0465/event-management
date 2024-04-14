import { configureStore } from "@reduxjs/toolkit";
import eventsReduer from './eventsSlice';

export default configureStore({
    reducer: {
        events: eventsReduer,
    },
});