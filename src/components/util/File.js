import React, {Component} from 'react';
import { connect } from 'react-redux';
import { openWindow } from '../../actions/window';

class File extends Component {
	constructor(props){
		super(props);

		this.openWindow = this.openWindow.bind(this);
	}

	openWindow() {
		if(this.props.type == 'github')
			return window.open('https://github.com/FLiotta/ReactW95');
		this.props.openWindow(200,50, this.props.type, this.props.fileName);
	}

	render(){
		return (
			<div className="file" onDoubleClick={this.openWindow}>
				<div className={'icon icon--' + this.props.type}></div>
				<small>{this.props.fileName}</small>
			</div>			
		)
	}
}

const dispatchToProps = dispatch => ({
	openWindow: (x,y,type, fileName) => dispatch(openWindow(x,y,type, fileName))
})

export default connect(undefined, dispatchToProps)(File);