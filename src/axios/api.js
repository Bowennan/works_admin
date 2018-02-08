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

//以下为社区接口
//通用帖子和隐藏帖子 status = 1 为正常显示  status = 0 为
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



let typec = {'type':'comment'}
let typer = {'type':'reply'}
//社区通用内容（通用评论）
export function communityComments(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/article/comment',
		method: 'get',
		params:Object.assign({},paramsObj,typec)
	})
}

//社区通用内容（通用回答）
export function communityReply(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/article/comment',
		method: 'get',
		params:Object.assign({},paramsObj,typer)
	})
}


// 社区通用提问
export function communityQuestion(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/article/question',
		method: 'get',
		params: paramsObj
	})
}


// 社区通用作品
export function communityMasterpiece(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/community/masterpieces',
		method: 'get',
		params: paramsObj
	})
}

// 社区通用好价
export function communityCoupons(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/article/coupons',
		method: 'get',
		params: paramsObj
	})
}

// 社区通用二手
export function communityIdle(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/article/idle',
		method: 'get',
		params: paramsObj
	})
}

// 社区通用装备秀
export function communityQshow(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/article/exhibition',
		method: 'get',
		params: paramsObj
	})
}

// 社区通用爆料
export function communityDisclose(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/article/disclose',
		method: 'get',
		params: paramsObj
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
export function updateArticleComm(paramsObj) {
	return fetch({
		url:api.Bestkit + 'admin/community/articles/' + paramsObj.id + '/communities',
		method: 'put',
		data: paramsObj
	})
}

//更新文章(推首)
export function updateArticleChoice(paramsObj) {
	return fetch({
		url:api.Bestkit + 'admin/community/articles/' + paramsObj.id + '/community_choices',
		method: 'put',
		data: paramsObj
	})
}




