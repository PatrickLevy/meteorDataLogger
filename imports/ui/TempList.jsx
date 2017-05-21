import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

export default class TempList extends Component {
    render() {
        return (
            <ul>
                {this.props.tempReadings.map((temp, i) => {
                    return (<li key={`temp_${i}`}>{`${temp.temp} - ${temp.time}`}</li>)
                })
                }
            </ul>
        );
    }
}

TempList.propTypes = {
    tempReadings: PropTypes.array.isRequired,
};