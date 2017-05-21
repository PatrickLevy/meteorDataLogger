import { createStore } from 'redux';
import rootReducer from '../reducers/index';
// import myFakeData from '../data/fakeData.js';  // Default Data

// create an object for the default data

// Get Data from API Here???
// const defaultState = {
//     tempReadings: myFakeData,
// };

// ...or just create an empty default state???
const defaultState = {};

//const store = createStore(rootReducer, defaultState);
const store = createStore(rootReducer, defaultState);

export default store;
