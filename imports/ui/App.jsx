import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { TempReadings } from '../api/collections.js';
import TempList from './TempList.jsx';

// App component - represents the whole app
class App extends Component {

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Temperature Readings</h1>
                    <TempList tempReadings={this.props.tempReadings}/>
                </header>
            </div>
        );
    }
}

App.propTypes = {
    tempReadings: PropTypes.array.isRequired,
};

export default createContainer(() => {
    Meteor.subscribe('tempReadings');
    return {
        tempReadings: TempReadings.find({}, { sort: {time: -1}, limit: 10}).fetch(),
    };
}, App);