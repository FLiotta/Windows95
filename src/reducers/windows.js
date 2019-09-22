const defaultState = {
	windows: [],
	higherIndex: 0,
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case 'openWindow':
			const { left, top, title} = action.payload;
			return {
				windows: [
					...state.windows,
					{
						left,
						top,
						title
					}
				],
				higherIndex: state.higherIndex + 1
			}
		default:
			return state;
	}
}