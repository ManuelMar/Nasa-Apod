import { combineReducers } from 'redux';
import ApodReducer from './reducer_apod';

const rootReducer = combineReducers({
  apod: ApodReducer
});

export default rootReducer;
