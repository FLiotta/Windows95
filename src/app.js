import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store';
import {Provider} from 'react-redux';
import './styles/Main.scss';
import Desktop from './components/Desktop';

let store = configStore();

console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<Desktop />
	</Provider>, document.getElementById('app'));
