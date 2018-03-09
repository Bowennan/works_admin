//引入轮播图的api
import {bannersList, singleBanner} from "@/axios/api"

const state ={
	datas:[],
	total:1,
	page:1,
	community_id:''
}

const actions = {
    getBannersListData({commit},paras) {
    	bannersList(paras).then(res => {
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
    },
    setCommunity(state, comm) {
    	state.community_id = comm
    }
    
}

const getters = {
	datas: state => state.datas,
	total: state => state.total,
	page: stata => state.page,
	community_id: state => state.community_id
}


export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}