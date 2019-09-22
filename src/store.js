import { createStore, combineReducers } from 'redux';
import windowsReducer from './reducers/windows';
export default () => {
	let reducers = combineReducers({
		windowsReducer
	});

	let store = createStore(reducers);

	return store;
}