import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = {
    value: 0,
    show: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
        increase(state, action) {
            state.value = state.value + action.payload;
        },
        toggleCounter(state) {
            state.show = !state.show;
        }

    }
})

const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true; // no state mutation, sliently deep cloned
        },
        logout(state) {
            state.isAuthenticated = false; // no state mutation, sliently deep cloned
        }    
    }
})


const store = configureStore({
    reducer: {
         counter: counterSlice.reducer,
         auth: authSlice.reducer
    }
    // reducer: counterSlice.reducer
});

const counterActions = counterSlice.actions;
const authActions = authSlice.actions;

export { counterActions };
export { authActions };

export default store;

