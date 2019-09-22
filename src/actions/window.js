export const openWindow = (left, top, title) => {
	return {
		type: 'openWindow',
		payload: {
			left,
			top,
			title
		}
	}
}