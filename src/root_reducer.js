import { combineReducers } from 'redux';
import landing from './App/landing/landing_reducer';

const rootReducer=combineReducers({
    landing,
});
export default rootReducer;