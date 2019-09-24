import React, {Component} from 'react';
import { connect } from 'react-redux';
import Window from './util/Window';
import File from './util/File';
import Notepad from './Notepad';
import TaskBar from './TaskBar';
class Desktop extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (

			<div className="desktop">
				<File type='folder' fileName='Homework' />
				<File type='folder' fileName='Projects' />
				<File type='folder' fileName='AOE 2' />
				<File type='notepad' fileName='Catullus' />
				<File type='notepad' fileName='Todo' />
				{this.props.windows.map(window => <Window key={window.id} {...window} />)}
				<TaskBar />
			</div>
		)
	}
}

const stateToProps = (state) => ({
	windows: state.windowsReducer.windows
})

export default connect(stateToProps)(Desktop);

