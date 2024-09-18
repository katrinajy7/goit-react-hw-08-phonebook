import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    },   
    extraReducers: builder => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;    
            })
            .addCase(logOut.fulfilled, state => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.pending, (state, action ) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            });
    },
});

export const authReducer = authSlice.reducer;