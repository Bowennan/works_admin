<template>
	<div class="tables">
		<asking-search-comp></asking-search-comp>
        <asking-title-comp></asking-title-comp>
        <asking-list-comp></asking-list-comp>

        <Page class="pages"
              :total="totalPages"
              show-sizer
              :page-size="limitPages"
              :page-size-opts="pageArray"
              :current.sync="current"
              @on-change = "turnPage"
              @on-page-size-change = "turnPages"
        ></Page>
	</div>
</template>

<script>
    import askingSearchComp from '@/components/community/asking-search-comp'
	import askingTitleComp from '@/components/community/asking-title-comp'
	import askingListComp from '@/components/community/asking-list-comp'

	import {mapActions, mapGetters} from "vuex"
    
    const _Ok = 200;
	export default {

		     data() {
		     	return {
		     		pageArray:[5,10,20],
		     		limitPages:10,
		     		current:1
		     	}
		     },

		     computed: {
		     	...mapGetters('questionsData', [
                       'totalPages'
		     		])
		     },



		     methods: {
		     	...mapActions('questionsData', [
                        'getQuestionsData'
		     		]),

		     	turnPage(pageNum) {
		     		this.getQuestionsData({
		     			page:pageNum,
		     			limit:this.limitPages
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getQuestionsData({
		     			limit: this.limitPages
		     		})
		     	}
		     },
             components: {
			    askingSearchComp,
			    askingTitleComp,
			    askingListComp
			  }
	}
</script>