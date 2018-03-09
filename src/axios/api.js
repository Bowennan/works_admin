import {fetch} from './fetch';
import api from './url';

//用户管理（默认的用户列表）
export function userManage(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/user/index',
		method: 'post',
		params: paramsObj
	})
}

//禁用或者是解冻
export function forbiddenUser(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/user/disable',
		method: 'post',
		params:paramsObj
	})
}

//以下为社区通用内容接口
//通用帖子和隐藏帖子 status = 1 为正常显示  status = 0 为隐藏
let normal = {status: 1}
let abnormal = {status: 0}
export function communityPosting(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/articles',
		method: 'get',
		params:Object.assign({},paramsObj,normal)
	})
}
//待审核帖子
export function reviewCommunityPosting(paramsObj){
	return fetch({
		url:api.Bestkit+'/admin/community/articles/review',
		method: 'get',
		params: paramsObj
	})
}
//隐藏帖子
export function abnormalCommunityPosting(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/articles',
		method: 'get',
		params:Object.assign({},paramsObj,abnormal)
	})
}



//社区通用评论
export function communityComments(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/comments?comment_type=comment',
		method: 'get',
		params:Object.assign({},paramsObj,normal)
	})
}
//隐藏通用评论
export function abnormalCommunityComments(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/comments?comment_type=comment',
		method: 'get',
		params:Object.assign({},paramsObj,abnormal)
	})
}

//社区通用回答
export function communityReply(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/comments?comment_type=reply',
		method: 'get',
		params:Object.assign({},paramsObj,normal)
	})
}
//隐藏通用回答
export function abnormalCommunityReply(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/comments?comment_type=reply',
		method: 'get',
		params:Object.assign({},paramsObj,abnormal)
	})
}


// 社区通用提问
export function communityQuestion(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/questions',
		method: 'get',
		params:Object.assign({},paramsObj,normal)
	})
}
//隐藏通用提问
export function abnormalCommunityQuestion(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/questions',
		method: 'get',
		params:Object.assign({},paramsObj,abnormal)
	})
}


// 社区通用作品
export function communityMasterpiece(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/masterpieces',
		method: 'get',
		params: Object.assign({},paramsObj,normal)
	})
}
//隐藏作品
export function abnormalCommunityMasterpiece(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/masterpieces',
		method: 'get',
		params:Object.assign({},paramsObj,abnormal)
	})
}

// 社区通用好价
export function communityCoupons(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/coupons',
		method: 'get',
		params: Object.assign({},paramsObj,normal)
	})
}
//隐藏好价
export function abnormalCommunityCoupons(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/coupons',
		method: 'get',
		params: Object.assign({},paramsObj,abnormal)
	})
}

// 社区通用二手
export function communityIdle(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/idles',
		method: 'get',
		params: Object.assign({},paramsObj,normal)
	})
}
//隐藏二手
export function abnormalCommunityIdle(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/idles',
		method: 'get',
		params: Object.assign({},paramsObj,abnormal)
	})
}

// 社区通用装备秀
export function communityQshow(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/exhibitions',
		method: 'get',
		params: Object.assign({},paramsObj,normal)
	})
}
//隐藏装备秀
export function abnormalCommunityQshow(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/exhibitions',
		method: 'get',
		params: Object.assign({},paramsObj,abnormal)
	})
}

// 社区通用爆料
export function communityDisclose(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/discloses',
		method: 'get',
		params: Object.assign({},paramsObj,normal)
     })
}
// 隐藏通用爆料
export function abnormalCommunityDisclose(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/discloses',
		method: 'get',
		params: Object.assign({},paramsObj,abnormal)
     })
}

//待审核数量
export function postingCount(){
	return fetch({
		url:api.Bestkit+'/admin/community/articles/review/num',
		method: 'get'
	})
}
export function masterPieceCount(){
	return fetch({
		url:api.Bestkit+'/admin/community/masterpieces/review/num',
		method: 'get'
	})
}
export function commentsCount(){
	return fetch({
		url:api.Bestkit+'/admin/community/comments/review/num',
		method: 'get'
	})
}
export function replyCount(){
	return fetch({
		url:api.Bestkit+'/admin/community/comments/review/num?summary_catalog=question',
		method: 'get'
	})
}
export function couponsCount(){
	return fetch({
		url:api.Bestkit+'/admin/community/coupons/review/num',
		method: 'get'
	})
}
export function idlesCount(){
	return fetch({
		url:api.Bestkit+'/admin/community/idles/review/num',
		method: 'get'
	})
}
export function questionsCount(){
	return fetch({
		url:api.Bestkit+'/admin/community/questions/review/num',
		method: 'get'
	})
}
export function exhibitionsCount(){
	return fetch({
		url:api.Bestkit+'/admin/community/exhibitions/review/num',
		method: 'get'
	})
}
export function disclosesCount(){
	return fetch({
		url:api.Bestkit+'/admin/community/discloses/review/num',
		method: 'get'
	})
}

//更新文章(状态 等级 权重)
export function updateArticle(paramsObj) {
	return fetch({
		url:api.Bestkit + 'admin/community/articles/' + paramsObj.id,
		method: 'put',
		params: paramsObj
	})
}

//获得所有社区名称
export function getCommunityNameId() {
	return fetch({
		url:api.Bestkit + 'admin/community/communities?field=id,name&limit=50',
		method: 'get'
	})
}

//更新文章(关联社区)
export function updateCommunity(paramsObj) {
	return fetch({
		url:api.Bestkit + `/admin/community/articles/${paramsObj.id}/communities`,
		method: 'put',
		params: paramsObj
	})
}

//更新文章(推首)
export function updateArticleChoice(paramsObj) {
	return fetch({
		url:api.Bestkit + 'admin/community/articles/' + paramsObj.id + '/community_choices',
		method: 'put',
		params: paramsObj
	})
}

//更新文章(关联产品)
export function updateConPro(paramsObj) {
	return fetch({
		url:api.Bestkit + `/admin/community/articles/${paramsObj.id}/products`,
		method: 'put',
		params: paramsObj
	})
}





//以下为社区通用模块接口
//banner列表
export function bannersList(paramsObj) {
    return fetch({
    	url:api.Bestkit + `/admin/community/banners`,
    	method: 'get',
    	params: paramsObj
    })
}

//产品榜
export function hotProduct(paramsObj) {
	return fetch({
		url: api.Bestkit + `/admin/community/heat_products`,
		method: 'get',
		params: paramsObj
	})
}

//公告
export function bulletinList(paramsObj) {
	return fetch({
		url: api.Bestkit + `/admin/community/notices`,
		method: 'get',
		params: paramsObj
	})
}


//社区首页管理接口（实际上就是精选内容 is_choice = 1）
//精选帖子
export function choosePosting(paramsObj) {
	return fetch({
		url: api.Bestkit + `/admin/community/articles?is_choice=1`,
		method: 'get',
		params: paramsObj
	})
}
//精选问题
export function chooseQuestion(paramsObj) {
	return fetch({
		url: api.Bestkit + `/admin/community/questions?is_choice=1`,
		method: 'get',
		params: paramsObj
	})
}
//精选好价
export function chooseCoupons(paramsObj) {
	return fetch({
		url: api.Bestkit + `/admin/community/coupons?is_choice=1`,
		method: 'get',
		params: paramsObj
	})
}
//精选二手
export function chooseIdle(paramsObj) {
	return fetch({
		url: api.Bestkit + `/admin/community/idles?is_choice=1`,
		method: 'get',
		params: paramsObj
	})
}




