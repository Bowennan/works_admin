import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getter'
import state from './state'
import mutations from './mutation'
import postingData from './modules/postings-data'

Vue.use(Vuex)

export default new Vuex.Store({
	getters,
	mutations,
	state,
	modules: {
		postingData
	}
})