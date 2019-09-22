import React, {Component} from 'react';
import {connect} from 'react-redux';
import {closeWindow} from '../../actions/window';
import Notepad from '../Notepad';

class Window extends Component {
	constructor(props) {
		super(props);
		this.state = {
			x: props.x,
			y: props.y
		}

		console.log(this.props)
		this.windowRef = React.createRef();		
		this.drag = this.drag.bind(this);
		this.onMouseDown = this.onMouseDown.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
		this.closeWindow = this.closeWindow.bind(this);
	}

	onMouseDown(e) {
		this.windowRef.current.style.zIndex = 10;
		window.addEventListener('mousemove', this.drag);
	}

	onMouseUp(e) {
		window.removeEventListener('mousemove', this.drag);
	}

	drag(e) {		
		this.windowRef.current.style.left = `${e.clientX - 200}px`;
		this.windowRef.current.style.top = `${e.clientY - 10}px`;
	}

	closeWindow() {
		this.props.closeWindow(this.props.id)
	}
	render(){
		return (
			<div className="window" 
				id={this.props.id}
				style={{left: `${this.state.x}px`, top: `${this.state.y}px`}}
				ref={this.windowRef} >		
				<div className="window__head"
					onMouseDown={this.onMouseDown}
					onMouseUp={this.onMouseUp}>
					<div className="title">
						<p>
						{this.props.title}
						{this.props.window == 'notepad' && <span>.txt</span>}
						</p>
					</div>
					<div className="window__head__actions">
						<div className="window__head__actions__button">
							_
						</div>					
						<div className="window__head__actions__button">
							□
						</div>					
						<div className="window__head__actions__button" onClick={this.closeWindow}>
							X
						</div>					
					</div>
				</div>
				<div className="window__options">
					<span>File</span>
					<span>Edit</span>
					<span>View</span>
					<span>Help</span>
				</div>
				<div className="window__body">
					{this.props.window == 'notepad' && <Notepad />}
					{this.props.window == 'folder' && <p>this is just an empty window</p>}
				</div>
			</div>
		)
	}
}

const dispatchToProps = dispatch => ({
	closeWindow: id => dispatch(closeWindow(id))
})

export default connect(undefined, dispatchToProps)(Window);
