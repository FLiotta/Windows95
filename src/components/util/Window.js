import React, {Component} from 'react';
import {connect} from 'react-redux';
import {closeWindow} from '../../actions/window';
import Notepad from '../Notepad';
import InternetExplorer from '../InternetExplorer';
import Resources from '../folders/Resources';
import File from './File';
class Window extends Component {
	constructor(props) {
		super(props);
		this.state = {
			x: props.left,
			y: props.top
		}

		console.log(this.state)
		this.windowRef = React.createRef();		
		this.drag = this.drag.bind(this);
		this.onMouseDown = this.onMouseDown.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
		this.closeWindow = this.closeWindow.bind(this);
		this.renderWindow = this.renderWindow.bind(this);
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

	renderWindow() {
		switch(this.props.window) {
			case 'notepad':
				return <Notepad />
			case 'ie':
				return <InternetExplorer />
			case 'folder':
				return <Resources />
			default:
				return null;
		}
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
						<div className={"window__head__icon icon--" + this.props.window}></div>
						<p className="ml-1">
						{this.props.title}
						{this.props.window == 'notepad' && <span>.txt</span>}
						</p>
					</div>
					<div className="window__head__actions">
						<div className="window__head__actions__button" onClick={this.closeWindow}>
							<span>X</span>
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
					{this.renderWindow()}
				</div>
			</div>
		)
	}
}

const dispatchToProps = dispatch => ({
	closeWindow: id => dispatch(closeWindow(id))
})

export default connect(undefined, dispatchToProps)(Window);
