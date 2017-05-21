import { combineReducers } from 'redux';
import tempReadings from './tempReadings.js';
import comments from './comments.js';
// import other reducers here...

// List all reducers here
const rootReducer = combineReducers({
    tempReadings, comments});

export default rootReducer;