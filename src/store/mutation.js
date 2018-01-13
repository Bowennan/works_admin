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
	},
	sendConnection(state,data) {
		state.connectionArr = data
	},
	setOrderType(state, data) {
		state.orderType = data
	},
	setTitle(state, data) {
		state.title = data
	},
	setId(state, data) {
		state.id = data
	},
	setBegin(state, data) {
		state.begin = data
	},
	setEnd(state, data) {
		state.end = data
	},
	setArticleType(state, data) {
		state.articleType = data
	},
	setImageType(state, data) {
		state.imageType = data
	},
	setArticleIndex(state, data) {
		state.articleIndex = data
	}
}

export default mutations

 