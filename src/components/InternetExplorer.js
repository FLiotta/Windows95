import React,{Component} from 'react';
import normalizeUrl from 'normalize-url';

class InternetExplorer extends Component {
	constructor(props){
		super(props);
		this.state = {
			url: 'http://wikipedia.org'
		}

		this.searchUrl = this.searchUrl.bind(this);
	}

	searchUrl(e){
		e.preventDefault();
		const url = normalizeUrl(e.target.url.value, {forceHttps: true});
		this.setState({url});
	}

	render(){
		return (
			<div className="ie">
				<div className="ie__header">
					<p className="text-center ml-3 mt-1">Address</p>
					<form onSubmit={this.searchUrl} >
					<input placeholder="http://www.wikipedia.org" name="url" id="url"/>
					</form>
				</div>
				<div className="ie__body">
					<iframe src={this.state.url}></iframe>
				</div>
			</div>
		)
	}
}

export default InternetExplorer;