//引入帖子的api
import {communityReply, abnormalCommunityReply} from "@/axios/api"  //一个首页 一个待审核的列表


//帖子所有状态及数据存储
const state = {
	total:1,
    datas:[],
    page:1,
    id: null,
    summary_catalog: 'article',
    begin_created_at: '',
    end_created_at: ''

}

//异步获取数据的actions 或者提交多个mutations
const actions = {

	//首页
	getReplyData({commit},paras) {
		communityReply(paras).then(res => {
			commit('setData', res.data.data)
			commit('setTotal', res.data.meta.total)
			commit('setPage', res.data.meta.current_page)
		})
	},
    
    //待审核
	getPostingReviewData({commit}, paras) {
		reviewCommunityPosting(paras).then(res => {
			commit(types.GET_POSTING_DATA, res.data.data)
			commit(types.GET_TOTAL_PAGES, res.data.meta.total)
		})
	},

	//隐藏
	abnormalCommunityReply({commit},paras) {
		abnormalCommunityReply(paras).then(res => {
			commit('setData', res.data.data)
			commit('setTotal', res.data.meta.total)
			commit('setPage', res.data.meta.current_page)
		})
	},

	//刷新页面
	refreshPage({commit}) {
		commit('setPage', 1)
		commit('setSummarycatalog', 'article')
		commit('setId', null)
		commit('setBegin', '')
		commit('setEnd', '')
	},
	//显示对应的弹窗
	setPop({ dispatch, commit, getters, rootGetters }, num ) {
		commit('setPopNum', num, { root: true })
		commit('setPopStatus', null, { root: true })
	}
}




//组件获取数据的getters
const getters = {
	datas: state => state.datas,
	total: state => state.total,
	page: state => state.page,
	summary_catalog: state => state.summary_catalog,
	id: state => state.id,
	begin_created_at: state => state.begin_created_at,
	end_created_at: state => state.end_created_at,
    popStatus: (state, getters, rootState, rootGetters) => rootGetters.popStatus,
	popNum: (state, getters, rootState, rootGetters) => rootGetters.popNum
}



//组件提交修改的mutations
const mutations = {
	setData(state, data) {
		state.datas = data
	},
	setPage(state, page) {
		state.page = page
	},
	setTotal(state, total) {
		state.total = total
	},
	setId(state, id) {
		state.id = id
	},
	setSummarycatalog(state, catalog) {
		state.summary_catalog = catalog
	},
	setBegin(state, begin) {
		state.begin_created_at = begin
	},
	setEnd(state, end) {
		state.end_created_at = end
	}
}





//导出本模块的状态数据 异步提交  同步提交  获取 
export default {
	namespaced: true,
	state,
	actions,
	getters,
	mutations
}