import {catalogCommunity} from '@/axios/api'

const state = {
	catalog: [],
	community_id:null,

}


const actions ={
	getCatalogs({commit}) {
		catalogCommunity().then((res) => {
			commit('setCatalog', res.data.data)
			commit('setCommunityId', res.data.data[0].id)
		})
	}
}


const mutations = {
	setCatalog(state, catalog) {
		state.catalog = catalog
	},
	setCommunityId(state, id) {
		state.community_id = id
	}
}

const getters = {
	catalog: state => state.catalog,
	community_id : state => state.community_id
}

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}