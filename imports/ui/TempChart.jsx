import React, { Component } from 'react';
import Highcharts from 'highcharts';
import moment from 'moment';
import PropTypes from 'prop-types';
import { HTTP } from 'meteor/http'
import { createContainer } from 'meteor/react-meteor-data';



function getDataForProbe(dataFromDb, probeId) {
    return dataFromDb.map(d => {return {x: d.time, y: d.data.find(pd => pd.probeId === probeId).value}}).reverse();
}

function getAllSeries(dataFromDb, allProbeSettings, selectedGroupId = 'GROUP_01') {

    // return probeIds.map((probeId) => {
    //     const settingsForProbe = allProbeSettings.probes.find(probeSettings => probeSettings.probeId === probeId);
    //     const name = settingsForProbe.name || probeId;
    //     return {name, data: getDataForProbe(dataFromDb, probeId)}
    // });

    return allProbeSettings.probes.map((probeSettings) => {
        //const settingsForProbe = allProbeSettings.probes.find(probeSettings => probeSettings.probeId === probeId);
        console.log('selectedGroupId', selectedGroupId);
        console.log('allProbeSettings', allProbeSettings);
        console.log('probeSettings', probeSettings);

        if (probeSettings.enabled) {
            const name = probeSettings.name || probeId;
            return {
                name,
                data: getDataForProbe(dataFromDb, probeSettings.probeId),
                visible: allProbeSettings.groups.find(group => group.groupId === selectedGroupId).probes.includes(probeSettings.probeId),
            }
        }

    });
}

// App component - represents the whole app
class TempChart extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selectedGroupId: 'GROUP_02',
    //     };
    // }


    componentDidMount() {
        this.updateChart();
    }
    componentDidUpdate() {
        this.updateChart();
    }
    componentWillUnmount() {
        this.chart.destroy();
    }
    updateChart() {
        console.log('need to draw chart here');


        // Get just the data for one probe
        //const probeData = this.props.data.map(d => {return {x: d.time, y: d.data.find(pd => pd.probeId === this.props.probeId).value}});
        // const probeSeries = {
        //     name: this.props.probeId,
        //     data: getDataForProbe(this.props.data, this.props.probeId),
        //     visible: false
        // };

        const allSeriesData = getAllSeries(this.props.data, this.props.allProbeSettings, this.props.selectedGroupId);
        console.log('allSeriesData', allSeriesData);

        // TODO - Caluculate temp difference between DHW Out and DHW In

        // TODO - Providd user default tabs or buttons for viewing grouping.

        // TODO - Email alarms when failure of boiler or thresholds

        // Get data for all probes
        //const probeData = this.props.data.map(d => {return {x: d.time, y: d.data.find(pd => pd.probeId === this.props.probeId).value}});

        // console.log('probeData', probeSeries);
        this.chart = Highcharts.chart(this.props.probeId, {
            chart: {
                type: 'column',
                height: 600,
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
                },
                labels: {
                    // format: '{value:%Y-%m-%d}',
                    formatter: function() {
                        return moment(this.value).format("MM-DD-YYYY, h:mm a");
                    }

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
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true,
                    }
                }
            },
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
