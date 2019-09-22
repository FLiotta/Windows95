import React, {Component} from 'react';

class File extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="file">
				<div className="icon"></div>
				<small>Javascript</small>
			</div>			
		)
	}
}

export default File;