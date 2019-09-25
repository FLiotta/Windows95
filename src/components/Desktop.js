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
				<File type='ie' fileName='Internet Explorer' />
				<File type='folder' fileName='Resources' />
				<File type='notepad' fileName='Catullus' />
				<File type='notepad' fileName='Todo' />
				<File type='github' fileName='Repository' />
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

