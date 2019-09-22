import React, {Component} from 'react';
import { connect } from 'react-redux';
import Window from './util/Window';
import File from './util/File';
import { openWindow } from '../actions/window';

class Desktop extends Component {
	constructor(props) {
		super(props);

		this.openWindoww = this.openWindoww.bind(this);
	}

	openWindoww() {
		this.props.dispatch(openWindow(250,50,'javascript'))
	}

	render() {
		return (
			<div className="desktop">
				<div onClick={this.openWindoww}>
					<File />
				</div>
				{this.props.windows.map(window => <Window x={window.x} y={window.y} title={window.title} />)}
			</div>
		)
	}
}

const stateToProps = (state) => ({
	windows: state.windowsReducer.windows
})
export default connect(stateToProps)(Desktop);

