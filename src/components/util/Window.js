import React, {Component} from 'react';

class Window extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: props.title,
			x: props.x,
			y: props.y
		}
		this.windowRef = React.createRef();		
		this.drag = this.drag.bind(this);
		this.onMouseDown = this.onMouseDown.bind(this);
		this.onMouseUp = this.onMouseUp.bind(this);
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

	render(){
		return (
			<div className="window" 
				style={{left: this.state.x}}
				ref={this.windowRef} >		
				<div className="window__head"
					onMouseDown={this.onMouseDown}
					onMouseUp={this.onMouseUp}>
					<div className="title">
						<p>{this.state.title}.exe</p>
					</div>
					<div className="window__head__actions">
						<p>[ _ ]</p>
						<p>[ □ ]</p>
						<p>[ X ]</p>						
					</div>
				</div>
			</div>
		)
	}
}

export default Window;
