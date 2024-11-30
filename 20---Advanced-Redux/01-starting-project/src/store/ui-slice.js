import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        cartIsVisible: false,
        notification: null
    },
    reducers: {
        toggle(state) {
            state.cartIsVisible = !state.cartIsVisible; // not mutating the state
        },
        showNotification(state, action) {
            state.notification = { // state not mutated, but provided as a deep clone
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            };
        }
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice;