export const popStatus = state => state.popStatus

export const popNum = state => state.popNum

export const connectionArr = state => state.connectionArr

export const orderType = state => state.orderType

export const id = state => state.id

export const title = state => state.title

export const begin = state => state.begin

export const end = state => state.end

export const articleType = state => state.articleType

export const imageType = state => state.imageType

export const articleId = state => state.articleId

export const articleIndex = state => state.articleIndex

export const routerId = () =>{
	 return window.localStorage.getItem('routerId')
}