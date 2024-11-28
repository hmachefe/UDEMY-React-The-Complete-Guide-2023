import { createSlice } from '@reduxjs/toolkit';


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

export default authSlice.reducer;
export const authActions = authSlice.actions;