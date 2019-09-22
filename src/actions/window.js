export const openWindow = (left, top, window, title) => {
	return {
		type: 'openWindow',
		payload: { left, top, window, title }
	}
}

export const closeWindow = (id) => {
	return {
		type: 'closeWindow',
		payload: {id}
	}
}