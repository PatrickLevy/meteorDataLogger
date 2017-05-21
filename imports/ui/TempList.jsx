import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TempList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.tempReadings.map((temp, i) => {
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