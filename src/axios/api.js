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


//社区通用内容（通用评论）
export function communityComments(paramsObj) {
	return fetch({
		url:api.Bestkit+'/admin/article/comment',
		method: 'post',
		params:paramsObj
	})
}