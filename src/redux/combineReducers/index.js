import { combineReducers } from 'redux'
import spinner from '../reducers/spinner'
import searchHistory from '../reducers/searchHistory'

const rootReducer = combineReducers({ spinner, searchHistory });

export default rootReducer