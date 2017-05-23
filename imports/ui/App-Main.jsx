import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HTTP } from 'meteor/http'
//import { createContainer } from 'meteor/react-meteor-data';
// Don't need this anymore...
// import { TempReadings } from '../api/collections/collections.js';
import TempList from './TempList.jsx';
import getDataFromFakeAPI from '../api/data/fakeData.js';

// App component - represents the whole app
class AppMain extends Component {

    componentDidMount() {
        console.log('About to perform fake API Call and put data into redux store - not sure if this is the best place to do this?');

        // get data from API - is this the best place to do this?
        const fakeAPIData = getDataFromFakeAPI();

        HTTP.call('GET', 'http://localhost:3001/tempData', {
            data: { some: 'json', stuff: 1 }
        }, (error, result) => {
            if (!error) {
                console.log('result', result);
                this.props.addFetchedTempData(result.data);
            }
        });

        // Put data from API call into redux store...here's what happens:
        // 1. Calling this.props.addFetchedTempData() will dispatch an action (see actionCreators.js)
        // 2. The action will in turn fire the reducers and the one with the matching action.type will handle it (see tempReadings.js)
        // 3. Because the state (with redux store) has been mapped to props, we can access via props

        //this.props.addFetchedTempData(fakeAPIData);
    }
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

AppMain.propTypes = {
    tempReadings: PropTypes.array.isRequired,
    addFetchedTempData: PropTypes.func,
};
export default AppMain;

// Can't use this anymore :(
// export default createContainer(() => {
//     Meteor.subscribe('tempReadings');
//     return {
//         tempReadings: TempReadings.find({}, { sort: {time: -1}, limit: 10}).fetch(),
//     };
// }, App);