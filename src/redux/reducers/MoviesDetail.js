import { createSlice } from '@reduxjs/toolkit';

export const moviesDetail = createSlice({
   name: 'moviesDetail',
   initialState: {
    movies: {}
   },
   reducers: {
    updateMovies: (state, action) => {
        const id = action.payload.id;
        let obj = {...state.movies}
        obj[id] = {...action.payload.data}
        return {
            ...state, movies: {...state.movies, ...obj}
         }
    },
   },
});

export const {updateMovies} = moviesDetail.actions;

export default moviesDetail.reducer;