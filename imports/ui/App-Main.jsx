import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { HTTP } from 'meteor/http'
import { createContainer } from 'meteor/react-meteor-data';
// Don't need this anymore...
import { TempReadings, Settings } from '../api/collections/collections.js';
import TempList from './TempList.jsx';
import TempChart from './TempChart.jsx';
import getDataFromFakeAPI from '../api/data/fakeData.js';

// App component - represents the whole app
class AppMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGroupId: 'GROUP_01',
        };
    }
    setSelectedGroupId(selectedGroupId) {
        this.setState({ selectedGroupId });
    }

    render() {
        console.log('this.props', this.props);
        if (!this.props.loading) {
            return (
                <div className="container">
                    <header>
                        <h1>Probe Readings</h1>
                        <div>
                            {
                                this.props.allProbeSettings.groups.map(group => {
                                    return (
                                        <button
                                            className="btn btn-success"
                                            onClick={() => this.setSelectedGroupId(group.groupId)}
                                        >
                                            {group.name}
                                        </button>
                                    )
                                })
                            }

                        </div>

                    </header>

                        {/*<TempList tempReadings={this.props.tempReadings}/>*/}
                        <TempChart
                            probeId="PROBE_01"
                            data={this.props.tempReadings}
                            allProbeSettings={this.props.allProbeSettings}
                            selectedGroupId={this.state.selectedGroupId}
                        />

                </div>
            );
        }
        return (
            <div>Loading...</div>
        );
    }
}

AppMain.propTypes = {
    tempReadings: PropTypes.array.isRequired,
    addFetchedTempData: PropTypes.func,
};
//export default AppMain;

export default createContainer(() => {
    const tempReadingSub = Meteor.subscribe('tempReadings');
    const settingsSub = Meteor.subscribe('settings');
    const loading = !tempReadingSub.ready() || !settingsSub.ready();
    return {
        tempReadings: TempReadings.find({}, { sort: {time: 1}, limit: 10}).fetch(),
        allProbeSettings: Settings.findOne(),
        loading,
    };
}, AppMain);