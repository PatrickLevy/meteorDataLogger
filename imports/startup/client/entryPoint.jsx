import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../../ui/App.jsx';
import Routes from '../../router/routes.jsx';

Meteor.startup(() => {
    render(React.createElement(Routes), document.getElementById('render-target'));
});
