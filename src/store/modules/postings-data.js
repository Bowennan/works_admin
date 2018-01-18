//引入帖子的api
import {communityPosting, reviewCommunityPosting, abnormalCommunityPosting} from "@/axios/api"  //一个首页 一个待审核的列表
//引入公用提交标识符
import * as types from '../mutation-types'

//帖子所有状态及数据存储
const state = {
	datas:[],
	totalPages:1,
    source:'',
    commid:[],
    choice:0,
    communities:[]

}

//异步获取数据的actions 或者提交多个mutations
const actions = {

	//首页
	getPostingData({commit},paras) {
		communityPosting(paras).then(res => {
			commit(types.GET_POSTING_DATA, res.data.data)
			commit(types.GET_TOTAL_PAGES, res.data.meta.total)
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
	getPostingAbnormalData({commit},paras) {
		abnormalCommunityPosting(paras).then(res => {
			commit(types.GET_POSTING_DATA, res.data.data)
			commit(types.GET_TOTAL_PAGES, res.data.meta.total)
		})
	}
}




//组件获取数据的getters
const getters = {
	datas: state => state.datas,
	totalPages: state => state.totalPages,
	source: state => state.source,
	commid: state => state.commid,
	choice: state => state.choice,
	communities: state => state.communities
}



//组件提交修改的mutations
const mutations = {
	[types.GET_POSTING_DATA](state, data) {
		state.datas = data
	},
	[types.GET_TOTAL_PAGES](state, data) {
		state.totalPages = data
	},
	[types.SET_POSTING_SOURCE](state, data) {
		state.source = data
	},
	[types.GET_COMMUNITY_ID](state, data) {
		(state.commid).length = 0
		data.forEach(item => {
			(state.commid).push(item.id)
		})
	},
	[types.SET_COMMUNITY_CHIOCE](state, data) {
		state.choice = data
	},
	[types.GET_COMMUNITIES](state, data) {
		state.communities = data
	}
}





//导出本模块的状态数据 异步提交  同步提交  获取 
export default {
	state,
	actions,
	getters,
	mutations
}