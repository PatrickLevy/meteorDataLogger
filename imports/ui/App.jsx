import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../api/tasks.js';
import { TempReadings } from '../api/tasks.js';

// App component - represents the whole app
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hideCompleted: false,
        };
    }
    getTasks() {
        return [
            { _id: 1, text: 'This is task 1' },
            { _id: 2, text: 'This is task 2' },
            { _id: 3, text: 'This is task 3' },
        ];
    }

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
        Meteor.call('tasks.insert', text);

        Tasks.insert({
            text,
            createdAt: new Date(), // current time
        });

        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    toggleHideCompleted() {
        this.setState({
            hideCompleted: !this.state.hideCompleted,
        });
    }

    renderTasks() {
        let filteredTasks = this.props.tasks;
        if (this.state.hideCompleted) {
            filteredTasks = filteredTasks.filter(task => !task.checked);
        }
        return filteredTasks.map((task) => (
            <Task key={task._id} task={task} />
        ));
    }

    render() {
        return (
            <div className="container">
                <header>
                    <h1>Temp Readings</h1>
                    <ul>
                        {this.props.tempReadings.map((temp, i) => {
                            return (<li key={`temp_${i}`}>{`${temp.temp} - ${temp.time}`}</li>)
                        })
                        }
                    </ul>


                    {/*<label className="hide-completed">*/}
                        {/*<input*/}
                            {/*type="checkbox"*/}
                            {/*readOnly*/}
                            {/*checked={this.state.hideCompleted}*/}
                            {/*onClick={this.toggleHideCompleted.bind(this)}*/}
                        {/*/>*/}
                        {/*Hide Completed Tasks*/}
                    {/*</label>*/}

                    {/*<form className="new-task" onSubmit={this.handleSubmit.bind(this)} >*/}
                        {/*<input*/}
                            {/*type="text"*/}
                            {/*ref="textInput"*/}
                            {/*placeholder="Type to add new tasks"*/}
                        {/*/>*/}
                    {/*</form>*/}
                </header>

                <ul>
                    {this.renderTasks()}
                </ul>
            </div>
        );
    }
}

App.propTypes = {
    tasks: PropTypes.array.isRequired,
};

export default createContainer(() => {
    Meteor.subscribe('tasks');
    Meteor.subscribe('tempReadings');
    return {
        tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
        incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
        tempReadings: TempReadings.find({}, { sort: {time: -1}, limit: 10}).fetch(),
    };
}, App);