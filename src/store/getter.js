export const popStatus = state => state.popStatus

export const popNum = state => state.popNum

export const communityCol = state => state.communityCol

export const id = state => state.id

export const routerId = () =>{
	 return window.localStorage.getItem('routerId')
}