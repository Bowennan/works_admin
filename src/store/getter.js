export const popStatus = state => state.popStatus

export const popNum = state => state.popNum

export const articleId = state => state.articleId

export const routerId = () =>{
	 return window.localStorage.getItem('routerId')
}