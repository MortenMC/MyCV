import AppReducer from './app';
import { combineReducers } from 'redux' 

export default combineReducers({app: AppReducer})