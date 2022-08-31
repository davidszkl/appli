import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token'),
        userid: null,
    },
    reducers: {
        loginAction: (state, action) => {
            state.token  = action.payload['token'];
            state.userid = action.payload['userid'];
        },
        logoutAction: (state) => {
            localStorage.removeItem('token');
            state.token  = null;
            state.userid = null;
        }
    }
})

export const {loginAction, logoutAction} = authSlice.actions
export default authSlice.reducer