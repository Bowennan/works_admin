const mutations = {
	setPopStatus(state,data) {
		state.popStatus = !state.popStatus
	},
	setRouterId(state,data) {
		state.routerId = data
		window.localStorage.setItem('routerId', data)
	},
	setPopNum(state, data) {
		state.popNum = data
	},
	sendId(state, data) {
		state.articleId = data
	}
}

export default mutations

 