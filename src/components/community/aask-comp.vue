<template>
	<div class="tables">
		<aask-search-comp></aask-search-comp>
        <aask-title-comp></aask-title-comp>
        <aask-list-comp></aask-list-comp>

        <Page class="pages"
              :total="total"
              show-sizer
              :page-size="limitPages"
              :page-size-opts="pageArray"
              :current="page"
              @on-change = "turnPage"
              @on-page-size-change = "turnPages"
        ></Page>
	</div>
</template>

<script>
    import aaskSearchComp from '@/components/community/aask-search-comp'
	import aaskTitleComp from '@/components/community/aask-title-comp'
	import aaskListComp from '@/components/community/aask-list-comp'

	import {mapActions, mapGetters, mapMutations} from "vuex"
    
    const _Ok = 200;
	export default {

		     data() {
		     	return {
		     		pageArray:[5,10,20],
		     		limitPages:10
		     	}
		     },

		     computed: {
		     	...mapGetters('questionsData', [
                       'total',
                       'page'
		     		])
		     },



		     methods: {
		     	...mapActions('questionsData', [
                        'getAbnormalQuestionsData'
		     		]),

		     	...mapMutations('questionsData',[
                       'setPage'
		     		]),

		     	turnPage(pageNum) {
		     		this.setPage(pageNum)
		     		this.getAbnormalQuestionsData({
		     			page: this.page,
		     			limit: this.limitPages
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getAbnormalQuestionsData({
		     			limit: this.limitPages
		     		})
		     	}
		     },
             components: {
			    aaskSearchComp,
				aaskTitleComp,
				aaskListComp
			  }
	}
</script>