import React,{Component} from 'react';

class Notepad extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return (
			<textarea style={{width: '100%',height: '100%', resize: 'none'}}></textarea>
		)
	}
}

export default Notepad;