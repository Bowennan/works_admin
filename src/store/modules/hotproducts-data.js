//引入产品榜的api
import {hotProduct, communityList} from "@/axios/api"

const state ={
	datas:[],
	total:1,
	page:1,
    community_id:'',
    communityList:[]
}

const actions = {
    getHotProduct({commit},paras) {
    	hotProduct(paras).then(res => {
    		commit('setData', res.data.data)
    		commit('setTotal', res.data.meta.total)
    		commit('setPage', res.data.meta.current_page)
    	})
    },

    getCommunityListData({commit}) {
        communityList().then(res => {
            commit('setCommunityList', res.data.data)
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
    setCommunityId(state, commid) {
        state.community_id = commid
    },
    setCommunityList(state, data) {
        state.communityList = data
    }
}

const getters = {
	datas: state => state.datas,
	total: state => state.total,
	page: stata => state.page,
    community_id: state => state.community_id,
    communityList: state => state.communityList
}


export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}