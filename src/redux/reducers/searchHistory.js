import { createSlice } from '@reduxjs/toolkit';

export const searchHistory = createSlice({
   name: 'SearchHistory',
   initialState: {
    results: []
   },
   reducers: {
    updateResult: (state, action) => ({
        ...state, 
        results: [...state.results, ...action.payload]
     }),
   },
});

export const {updateResult} = searchHistory.actions;

export default searchHistory.reducer;