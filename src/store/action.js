import {getCommunityNameId, updateCommunity, updateArticle, updatePro} from "@/axios/api"

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

     updatePro({commit}, paras) {
     	updatePro(paras).then(res => {
     		commit('setPopStatus')
     	})
     }
}

export default actions