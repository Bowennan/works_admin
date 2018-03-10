//引入轮播图的api
import {bulletinList} from "@/axios/api"

const state ={
	datas:[],
	total:1,
	page:1,
    type:''
}

const actions = {
    getBulletinListData({commit},paras) {
    	bulletinList(paras).then(res => {
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
    setType(state, type) {
        state.type = type
    }
    
}

const getters = {
	datas: state => state.datas,
	total: state => state.total,
	page: stata => state.page,
    type: state => state.type
}


export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}