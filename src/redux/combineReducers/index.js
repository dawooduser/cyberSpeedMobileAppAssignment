import { combineReducers } from 'redux'
import spinner from '../reducers/spinner'
import searchHistory from '../reducers/searchHistory'
import moviesDetail from '../reducers/MoviesDetail';
const rootReducer = combineReducers({ spinner, searchHistory, moviesDetail });

export default rootReducer