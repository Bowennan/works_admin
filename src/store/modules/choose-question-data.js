import {chooseQuestion} from '@/axios/api'

const state = {
	datas:[],
	total:1,
	page:1
}

const actions = {
	getChooseQuestionData({commit}, paras) {
		chooseQuestion(paras).then(res => {
			commit('setData', res.data.data)
			commit('setTotal', res.data.meta.total)
			commit('setPage', res.data.meta.current_page)
		})
	}
}


const mutations = {
	setData(state, data) {
		state.datas = data
	},

	setPage(state, page) {
		state.page = page
	},

	setTotal(state, total) {
		state.total = total
	}
}


const getters = {
	datas: state => state.datas,
	total: state => state.total,
	page: state => state.page
}

export default {
	namespaced: true,
	state,
	actions,
	getters,
	mutations
}