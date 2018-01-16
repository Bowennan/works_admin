//引入帖子的api
import {communityPosting, reviewCommunityPosting} from "@/axios/api"  //一个首页 一个待审核的列表
//引入公用提交标识符
import * as types from '../mutation-types'

//帖子所有状态及数据存储
const state = {
	datas:[],
	totalPages:1,
    

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
	getPostingReviewData({commit}) {
		reviewCommunityPosting().then(res => {
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
	totalPages: state => state.totalPages
}



//组件提交修改的mutations
const mutations = {
	[types.GET_POSTING_DATA](state, data) {
		state.datas = data
	},
	[types.GET_TOTAL_PAGES](state, data) {
		state.totalPages = data
	}
}





//导出本模块的状态数据 异步提交  同步提交  获取 
export default {
	state,
	actions,
	getters,
	mutations
}