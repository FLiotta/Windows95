const defaultState = {
	windows: [],
	higherIndex: 0,
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case 'openWindow':
			const { left, top, window, title} = action.payload;
			return {
				windows: [
					...state.windows,
					{
						left,
						top,
						window,
						title,
						id: `window_${Math.floor(Math.random() * 10000) + 1}`,
						zIndex: state.higherIndex + 1
					}
				],
				higherIndex: state.higherIndex + 1
			}
		case 'closeWindow':
			const {id} = action.payload;
			const windows = state.windows.filter(window => window.id != id);

			return {
				windows,
				higherIndex: state.higherIndex
			}
		default:
			return state;
	}
}