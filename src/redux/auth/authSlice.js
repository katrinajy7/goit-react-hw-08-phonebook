// // import { createSlice } from '@reduxjs/toolkit';
// // import { register, logIn, logOut, refreshUser } from './authOperations';


// // const authSlice = createSlice({
// //     name: 'auth',
// //     initialState: {
// //         user: { name: null, email: null },
// //         token: null,
// //         isLoggedIn: false,
// //         isRefreshing: false,
// //     },   
// //     extraReducers: builder => {
// //         builder
// //             .addCase(register.fulfilled, (state, action) => {
// //                 state.user = action.payload.user;
// //                 state.token = action.payload.token;
// //                 state.isLoggedIn = true;
// //             })
// //             .addCase(logIn.fulfilled, (state, action) => {
// //                 state.user = action.payload.user;
// //                 state.token = action.payload.token;
// //                 state.isLoggedIn = true;    
// //             })
// //             .addCase(logOut.fulfilled, state => {
// //                 state.user = { name: null, email: null };
// //                 state.token = null;
// //                 state.isLoggedIn = false;
// //             })
// //             .addCase(refreshUser.pending, state => {
// //                 state.isRefreshing = true;
// //             })
// //             .addCase(refreshUser.fulfilled, (state, action ) => {
// //                 state.user = action.payload;
// //                 state.isLoggedIn = true;
// //                 state.isRefreshing = false;
// //             })
// //             .addCase(refreshUser.rejected, state => {
// //               state.isRefreshing = false;
// //             });
// //     },
// // });

// // export const authReducer = authSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { register, logIn, logOut, refreshUser } from '../../components/../redux/auth/authOperations';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     user: { name: null, email: null },
//     token: null,
//     isLoggedIn: false,
//     isRefreshing: false,
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logOut.fulfilled, state => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(refreshUser.pending, state => {
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.rejected, state => {
//         state.isRefreshing = false;
//       });
//   },
// });

// export const authReducer = authSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from '../../redux/auth/authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { 
      //remove the name field in the user to align with the using mongoDB
      // name: null, 
      email: null 
    },
      token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        //remove token state setting in register function to align with mongoDB
      
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        // state.token = action.payload.token;
        state.token = null;
        // state.isLoggedIn = true;
        state.isLoggedIn = false;

      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;

