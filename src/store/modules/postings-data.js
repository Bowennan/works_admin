//引入帖子的api
import {communityPosting, reviewCommunityPosting, abnormalCommunityPosting} from "@/axios/api"  //一个首页 一个待审核的列表

//帖子所有状态及数据存储
const state = {
    total:1,
    datas:[],
    id:null,
    title:'',
    content_type: '',
    article_type: '',
    begin_published_at: '',
    end_published_at: '',
    page:1,
    sort_field: ''
}

//异步获取数据的actions 或者提交多个mutations
const actions = {

	//首页
	getPostingData({commit}, paras) {
		communityPosting(paras).then(res => {
			commit('setData', res.data.data)
			commit('setTotal', res.data.meta.total)
			commit('setPage', res.data.meta.current_page)
		})
	},
    
    //待审核
	getPostingReviewData({commit}, paras) {
		reviewCommunityPosting(paras).then(res => {
			commit('setData', res.data.data)
			commit('setTotal', res.data.meta.total)
		})
	},

	//隐藏
	getPostingAbnormalData({commit},paras) {
		abnormalCommunityPosting(paras).then(res => {
			commit('setData', res.data.data)
			commit('setTotal', res.data.meta.total)
			commit('setPage', res.data.meta.current_page)
		})
	},

	//刷新页面
	refreshPage({commit}) {
		commit('setId', null)
		commit('setTitle', '')
		commit('setContent', '')
		commit('setArticle', '')
		commit('setBegin', '')
		commit('setEnd', '')
		commit('setPage', 1)
		commit('setSortfield', '')
	}
}




//组件获取数据的getters
const getters = {
	datas: state => state.datas,
	total: state => state.total,
	id: state => state.id,
	title: state => state.title,
	content_type: state => state.content_type,
	article_type: state => state.article_type,
	begin_published_at: state => state.begin_published_at,
	end_published_at: satate => state.end_published_at,
	page: state => state.page,
	sort_field: state => state.sort_field
    }



//组件提交修改的mutations
const mutations = {
	setId(state, id) {
		state.id = id
	},
	setData(state, data) {
		state.datas = data
	},
	setTotal(state, total) {
		state.total= total
	},
	setTitle(state, title) {
		state.title = title
	},
	setContent(state, content) {
		state.content_type = content
	},
	setArticle(state, article) {
		state.article_type = article
	},
	setBegin(state, begin) {
		state.begin_published_at = begin
	},
	setEnd(satte, end) {
		state.end_published_at = end
	},
	setPage(state, page) {
		state.page = page
	},
	setSortfield(state, sortfield) {
		state.sort_field = sortfield
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