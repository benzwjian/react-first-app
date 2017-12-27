import React, { Component } from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import helpers from './Helpers';
import '../css/semantic.min.css';

class TimersDashboard extends Component {
	state = {
		timers: [
			{
				title: 'Practice squat',
				project: 'Gym Chores',
				id: 1001,
				elapsed: 3600000,
				runningSince: new Date().getTime()
			},
			{
				title: 'Bake squash',
				project: 'Kitchen Chores',
				id: 1002,
				elapsed: 3600000,
				runningSince: new Date().getTime()
			}
		]
	}

	handleCreateFormSubmit = (timer) => {
		this.createTimer(timer);
	};

	handleEditFormSubmit = (attrs) => {
		this.updateTimer(attrs);
	};

	handleTrashClick = (timerId) => {
		this.deleteTimer(timerId);
	};

	handleStartClick = (timerId) => {
		this.startTimer(timerId);
	};

	handleStopClick = (timerId) => {
		this.stopTimer(timerId);
	};

	createTimer = (timer) => {
		const t = helpers.newTimer(timer);
		this.setState({
			timers: this.state.timers.concat(t)
		});
	};

	updateTimer = (attrs) => {
		this.setState({
			timers: this.state.timers.map((timer) => {
				if (timer.id === attrs.id) {
					return Object.assign({}, timer, {
						title: attrs.title,
						project: attrs.project
					});
				} else {
					return timer;
				}
			})
		});
	};

	deleteTimer = (timerId) => {
		this.setState({
			timers: this.state.timers.filter(t => t.id !== timerId)
		});
	};

	startTimer = (timerId) => {
		const now = new Date().getTime();
		this.setState({
			timers: this.state.timers.map((timer) => {
				if (timer.id === timerId) {
					return Object.assign({}, timer, {
						runningSince: now
					});
				} else {
					return timer;
				}
			})
		});
	};

	stopTimer = (timerId) => {
		const now = new Date().getTime();
		this.setState({
			timers: this.state.timers.map((timer) => {
				if (timer.id === timerId) {
					const lastElapsed = now - timer.runningSince;
					return Object.assign({}, timer, {
						elapsed: timer.elapsed + lastElapsed,
						runningSince: null
					});
				} else {
					return timer;
				}
			})
		});
	};

	render() {
		return (
			<div className="ui three column centered grid">
				<div className="column">
					<EditableTimerList
						timers={this.state.timers}
						onFormSubmit={this.handleEditFormSubmit}
						onTrashClick={this.handleTrashClick}
						onStartClick={this.handleStartClick}
						onStopClick={this.handleStopClick} />
					<ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
				</div>
			</div>
		);
	}
}

export default TimersDashboard;
