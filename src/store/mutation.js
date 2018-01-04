const mutations = {
	setPopStatus(state,data) {
		state.popStatus = data
	},
	setRouterId(state,data) {
		state.routerId = data
		window.localStorage.setItem('routerId', data)
	}
}

export default mutations