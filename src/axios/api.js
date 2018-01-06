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

//社区通用内容（通用帖子）
export function communityPosting(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/article/index',
		method: 'post',
		params:paramsObj
	})
}

let typec = {'type':'comment'}
let typer = {'type':'reply'}
//社区通用内容（通用评论）
export function communityComments(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/article/comment',
		method: 'post',
		params:Object.assign({},paramsObj,typec)
	})
}

//社区通用内容（通用回答）
export function communityReply(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/article/comment',
		method: 'post',
		params:Object.assign({},paramsObj,typer)
	})
}


// 社区通用提问
export function communityQuestion(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/article/question',
		method: 'post',
		params: paramsObj
	})
}


// 社区通用作品
export function communityOpus(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/article/master_piece',
		method: 'post',
		params: paramsObj
	})
}

// 社区通用好价
export function communityCoupons(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/article/coupons',
		method: 'post',
		params: paramsObj
	})
}

// 社区通用二手
export function communityIdle(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/article/idle',
		method: 'post',
		params: paramsObj
	})
}

// 社区通用装备秀
export function communityQshow(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/article/exhibition',
		method: 'post',
		params: paramsObj
	})
}

// 社区通用爆料
export function communityDisclose(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/article/disclose',
		method: 'post',
		params: paramsObj
	})
}


