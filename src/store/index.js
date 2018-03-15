import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getter'
import state from './state'
import mutations from './mutation'
import actions from './action'
import postingsData from './modules/postings-data'
import masterpieceData from './modules/masterpiece-data'
import questionsData from './modules/questions-data'
import couponsData from './modules/coupons-data'
import idlesData from './modules/idles-data'
import exhibitionsData from './modules/exhibitions-data'
import disclosesData from './modules/discloses-data'
import commentsData from './modules/comments-data'
import replysData from './modules/replys-data'
import bannerListsData from './modules/bannerLists-data'
import hotproductsData from './modules/hotproducts-data'
import bulletinsData from './modules/bulltins-data'
import choosePostingData from './modules/choose-posting-data'
import chooseCouponsData from './modules/choose-coupons-data'
import chooseQuestionData from './modules/choose-question-data'
import chooseIdleData from './modules/choose-idle-data'
import catalogCommunityData from './modules/catalogcommunity-data'
import communitymanagerData from './modules/communitymanager-data'

Vue.use(Vuex)

export default new Vuex.Store({
	getters,
	mutations,
	actions,
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
        replysData,
        bannerListsData,
        hotproductsData,
        bulletinsData,
        choosePostingData,
		chooseCouponsData,
		chooseQuestionData,
		chooseIdleData,
		catalogCommunityData,
		communitymanagerData
        
	}
})