import React, { Component } from 'react';
import Highcharts from 'highcharts';
import moment from 'moment';
import PropTypes from 'prop-types';
import { HTTP } from 'meteor/http'
import { createContainer } from 'meteor/react-meteor-data';



function getDataForProbe(dataFromDb, probeId) {
    return dataFromDb.map(d => {return {x: d.time, y: d.data.find(pd => pd.probeId === probeId).value}});
}

function getAllSeries(dataFromDb, probeIds, allProbeSettings) {

    // return probeIds.map((probeId) => {
    //     const settingsForProbe = allProbeSettings.probes.find(probeSettings => probeSettings.probeId === probeId);
    //     const name = settingsForProbe.name || probeId;
    //     return {name, data: getDataForProbe(dataFromDb, probeId)}
    // });

    return allProbeSettings.probes.map((probeSettings) => {
        //const settingsForProbe = allProbeSettings.probes.find(probeSettings => probeSettings.probeId === probeId);
        if (probeSettings.enabled) {
            const name = probeSettings.name || probeId;
            return {name, data: getDataForProbe(dataFromDb, probeSettings.probeId)}
        }

    });
}

// App component - represents the whole app
class TempChart extends Component {

    componentDidMount() {
        this.updateChart();
    }
    componentWillUnmount() {
        this.chart.destroy();
    }
    updateChart() {
        console.log('need to draw chart here');


        // Get just the data for one probe
        //const probeData = this.props.data.map(d => {return {x: d.time, y: d.data.find(pd => pd.probeId === this.props.probeId).value}});
        const probeSeries = {
            name: this.props.probeId,
            data: getDataForProbe(this.props.data, this.props.probeId),
        };

        const allSeriesData = getAllSeries(this.props.data, ['PROBE_01', 'PROBE_02'], this.props.allProbeSettings);
        console.log('allSeriesData', allSeriesData);

        // Get data for all probes
        //const probeData = this.props.data.map(d => {return {x: d.time, y: d.data.find(pd => pd.probeId === this.props.probeId).value}});

        console.log('probeData', probeSeries);
        this.chart = Highcharts.chart(this.props.probeId, {
            chart: {
                type: 'line'
            },
            credits: {
                enabled: false
            },
            title: {
                text: 'Temperature Vs. Time'
            },
            // xAxis: {
            //     categories: ['Apples', 'Bananas', 'Oranges']
            // },
            xAxis: {
                title: {
                    text: 'Date'
                }
            },
            yAxis: {
                title: {
                    text: 'Temperature'
                }
            },
            series:
                // [
                //     {
                //         name: 'Jane',
                //         data: [[0,1], [1,0], [2,4]]
                //     },
                //     {
                //         name: 'John',
                //         data: [[0,5], [1,7], [2,3]]
                //     }
                // ]

                //[{type: 'line', data: [{x: 5, y: 7}, {x: 6, y: 8}]}],
                // [probeSeries],
                allSeriesData,
                //probeData,
        });



    }

    render() {
        console.log('this.props', this.props);
        return (
            <div className="highcharts-chart">

                    <div id={this.props.probeId}></div>


            </div>
        );
    }
}
export default TempChart;
