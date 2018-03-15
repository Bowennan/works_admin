import {communityManager} from '@/axios/api'

const state ={
   datas:[],
   total:0,
   page:1
}


const actions = {
	communityManager({commit},paras) {
		communityManager(paras).then(res => {
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
	setTotal(state, total) {
		state.total = total
	},
	setPage(state, page) {
		state.page = page
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
	mutations,
	getters
}

