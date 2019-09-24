import React, {Component} from 'react';

class TaskBar extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="taskbar">
				<div className="taskbar__start">
					<span className="taskbar__start__icon"></span>
					<p>Start</p>
				</div>
				<div className="taskbar__clock">
					<p>23:03</p>
				</div>

			</div>
		)
	}
}

export default TaskBar;