import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getter'
import state from './state'
import mutations from './mutation'
import postingsData from './modules/postings-data'
import masterpieceData from './modules/masterpiece-data'
import questionsData from './modules/questions-data'
import couponsData from './modules/coupons-data'
import idlesData from './modules/idles-data'
import exhibitionsData from './modules/exhibitions-data'
import disclosesData from './modules/discloses-data'
import commentsData from './modules/comments-data'
import replysData from './modules/replys-data'

Vue.use(Vuex)

export default new Vuex.Store({
	getters,
	mutations,
	state,
	modules: {
		postingsData,
		masterpieceData,
		questionsData,
		couponsData,
        idlesData,
        exhibitionsData,
        disclosesData,
        commentsData,
        replysData
	}
})