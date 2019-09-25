import React, { Component } from 'react';
import File from '../util/File';

class Resources extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="folder">
				<File type='notepad' fileName='math' />
				<File type='notepad' fileName='css' />
				<File type='notepad' fileName='html' />
				<File type='notepad' fileName='diary' />
			</div>
		)
	}
}

export default Resources;