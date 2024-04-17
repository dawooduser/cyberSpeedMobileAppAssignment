import { combineReducers } from 'redux'
import spinner from '../reducers/spinner'
import FavouriteMoviesDataSlice from '../reducers/FavouriteMoviesData'
const rootReducer = combineReducers({ spinner, FavouriteMoviesDataSlice });

export default rootReducer