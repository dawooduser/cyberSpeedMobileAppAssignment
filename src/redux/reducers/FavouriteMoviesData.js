import {createSlice} from '@reduxjs/toolkit'

export const FavouriteMoviesDataSlice = createSlice({
  name: 'FavouriteMoviesData',
  initialState: {
    data: [],
  },
  reducers: {
    add: (state, action) => {
      let arr = [...state.data]
      arr.push(action.payload)
      return {...state, data: [...arr]}
    },
    remove: (state, action) => {
      let arr = [...state.data]
      arr.splice(action.payload, 1) 
      return {...state, data: [...arr]}
    },
  },
})

export const {add, remove} = FavouriteMoviesDataSlice.actions

export default FavouriteMoviesDataSlice.reducer
