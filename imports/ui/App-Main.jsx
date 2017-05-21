import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import { TempReadings } from '../api/collections/collections.js';
import TempList from './TempList.jsx';
import store from '../api/reduxStore/store.js';
import App from './App.js';

// App component - represents the whole app
class AppMain extends Component {

    render() {
        console.log('store', store);
        console.log('this.props', this.props);
        return (
            <div>HI</div>

        );
    }
}

AppMain.propTypes = {
    tempReadings: PropTypes.array.isRequired,
};

// const AppMain = ({props}) =>  {
//     return (
//         <Provider store={store} >
//             <div>Hi</div>
//             <App/>
//         </Provider>
//     );
// };

// const AppMain = React.createClass({
//     render() {
//         return(
//             <Provider>
//                 <div>Hi</div>
//                 <App />
//             </Provider>
//         );
//     }
// });

export default AppMain;


//render(AppMain, document.getElementById('render-target'));


// export default createContainer(() => {
//     Meteor.subscribe('tempReadings');
//     return {
//         tempReadings: TempReadings.find({}, { sort: {time: -1}, limit: 10}).fetch(),
//     };
// }, App);