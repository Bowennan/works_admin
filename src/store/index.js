import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getter'
import state from './state'
import mutations from './mutation'
import postingData from './modules/postings-data'
import masterpieceData from './modules/masterpiece-data'
import questionsData from './modules/questions-data'
import couponsData from './modules/coupons-data'
import idlesData from './modules/idles-data'

Vue.use(Vuex)

export default new Vuex.Store({
	getters,
	mutations,
	state,
	modules: {
		postingData,
		masterpieceData,
		questionsData,
		couponsData,
        idlesData
	}
})