import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../../ui/App.js';
import AppMain from '../../ui/App-Main.jsx';
import { Provider } from 'react-redux';
import store from '../../api/reduxStore/store.js';
Meteor.startup(() => {
    console.log('running startup');
    const myApp = (
        <Provider store={store}>

            <App />
        </Provider>
    )
    render(myApp, document.getElementById('render-target'));
});
