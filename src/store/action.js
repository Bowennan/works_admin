import {getCommunityNameId, updateCommunity, updateArticle, updateConPro, updateArticleChoice} from "@/axios/api"

const actions = {
	 getAllCommunity({commit}) {
	 	getCommunityNameId().then(res => {
	 		commit('setCommunityCol', res.data.data)
	 	})
	 },

	 updateCommunity({commit},paras) {
	 	updateCommunity(paras).then(res => {
	 		commit('setPopStatus')
	 	})
	 },

	 updateArticle({commit}, paras) {
        updateArticle(paras).then(res => {
        	commit('setPopStatus')
        })
	 },

     updateConPro({commit}, paras) {
     	updateConPro(paras).then(res => {
     		commit('setPopStatus')
     	})
     },

     updateArticleChoice({commit}, paras) {
     	updateArticleChoice(paras).then(res => {
     		commit('setPopStatus')
     	})
     }
}

export default actions