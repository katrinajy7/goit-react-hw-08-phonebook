import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://nodejs-homework-template-2.onrender.com/api';

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async({
        // name, 
        email, 
        password 
    }, thunkAPI) => {
      try {
        const response = await axios.post('/users/signup', {
            // name,
            email,
            password,
        });
        // setAuthHeader(response.data.token);
        return response.data;       
      }  catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
);

export const logIn= createAsyncThunk(
    'auth/login',
    async ({ email, password}, thunkAPI) => {
        try {
            const response = await axios.post('/users/login', { email, password });
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        // await axios.post('/users/logout');
        await axios.get('users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue('unable to fetch user');
        }
        
        try {
            const response = await axios.get('/users/current');
            return response.data;            
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

