import React, {Component} from 'react';

class TaskBar extends Component {

	constructor(props){
		super(props);

		let date = new Date();

		this.state = {
			hour: `${date.getHours()}:${date.getMinutes()}`
		}
	}

	render(){
		return (
			<div className="taskbar">
				<div className="taskbar__start">
					<span className="taskbar__start__icon"></span>
					<p>Start</p>
				</div>
				<div className="taskbar__clock">
					<p>{this.state.hour}</p>
				</div>
			</div>
		)
	}
}

export default TaskBar;