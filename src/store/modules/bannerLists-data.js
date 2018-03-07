//引入轮播图的api
import {bannersList, singleBanner} from "@/axios/api"

const state ={
	datas:[],
	total:1,
	page:1
}

const actions = {
    getBannersListData({commit},paras) {
    	bannersList(paras).then(res => {
    		commit('setData', res.data.data)
    		commit('setTotal', res.data.meta.total)
    		commit('setPage', res.data.meta.current_page)
    	})
    },

    getSingleBannerData({commit},id) {
    	singleBanner(id).then(res => {
    		commit('setData', res.data.data)
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
	page: stata => state.page
}


export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}