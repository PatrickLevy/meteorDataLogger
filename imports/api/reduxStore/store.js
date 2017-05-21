import { createStore, compose } from 'redux';
//import { syncHistoryWithStore } from 'react-router-redux';
//import { browserHistory } from 'react-router';

// import the root reducer
import rootReducer from '../reducers/index';

// Default Data
//import comments from '../data/comments';
import myFakeData from '../../startup/client/getData.js';

//create an object for the default data
const defaultState = {
    tempReadings: myFakeData,
};

//const store = createStore(rootReducer, defaultState);
const store = createStore(rootReducer, defaultState);

console.log('store', store);

//export const history = syncHistoryWithStore(browserHistory, store);

export default store;
