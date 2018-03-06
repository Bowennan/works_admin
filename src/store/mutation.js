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
	setCommunityCol(state, commCol) {
        state.communityCol = commCol
	},
	setId(state, id) {
		state.id = id
	}
}

export default mutations

 