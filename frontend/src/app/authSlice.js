import { createSlice } from '@reduxjs/toolkit';
import jwt_decode from "jwt-decode";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token'),
        userData: null,
    },
    reducers: {
        loginAction: (state, action) => {
            state.token  = action.payload;
            state.userData = jwt_decode(state.token);
            localStorage.setItem('token', state.token);
        },
        logoutAction: (state) => {
            localStorage.removeItem('token');
            state.token  = null;
            state.userData = null;
        }
    }
})

export const {loginAction, logoutAction} = authSlice.actions
export default authSlice.reducer