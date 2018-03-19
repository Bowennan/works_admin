//引入轮播图的api
import {bannersList, singleBanner, communityList} from "@/axios/api"

const state ={
	datas:[],
	total:1,
	page:1,
	community_id:'',
    communityList:[]
}

const actions = {
    getBannersListData({commit},paras) {
    	bannersList(paras).then(res => {
    		commit('setData', res.data.data)
    		commit('setTotal', res.data.meta.total)
    		commit('setPage', res.data.meta.current_page)
    	})
    },

    getCommunityListData({commit}) {
        communityList().then(res => {
            commit('setCommunityList', res.data.data)
        })
    },

    //显示对应的弹窗
    setPop({ dispatch, commit, getters, rootGetters }, num ) {
        commit('setPopNum', num, { root: true })
        commit('setPopStatus', null, { root: true })
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
    setCommunityId(state, comm) {
    	state.community_id = comm
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
    communityList: state => state.communityList,
    popStatus: (state, getters, rootState, rootGetters) => rootGetters.popStatus,
    popNum: (state, getters, rootState, rootGetters) => rootGetters.popNum
}


export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}