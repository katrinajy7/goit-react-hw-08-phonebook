import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        setFilter(state, action) {
            return action.payload;
        },
    },
});

export const { setFilter } = filterSlice.actions;







// SUGGESTIONS CODE
// import { createSlice } from '@reduxjs/toolkit';

// const initialFilterState = '';

// export const filterSlice = createSlice({
//     name: 'filter',
//     initialState: initialFilterState,
//     reducers: {
//         setFilter(state, action) {
//             return action.payload;
//         },
//     },
// });

// // Export actions
// export const { setFilter } = filterSlice.actions;

// // Export the reducer
// export default filterSlice.reducer;
