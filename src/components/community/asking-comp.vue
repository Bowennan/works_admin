<template>
	<div class="tables">
		<asking-search-comp></asking-search-comp>
        <asking-title-comp></asking-title-comp>
        <asking-list-comp></asking-list-comp>

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
    import askingSearchComp from '@/components/community/asking-search-comp'
	import askingTitleComp from '@/components/community/asking-title-comp'
	import askingListComp from '@/components/community/asking-list-comp'

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
                       'page',
                       'sort_field'
		     		])
		     },



		     methods: {
		     	...mapActions('questionsData', [
                        'getQuestionsData'
		     		]),

		     	...mapMutations('questionsData',[
                       'setPage'
		     		]),

		     	turnPage(pageNum) {
		     		this.setPage(pageNum)
		     		this.getQuestionsData({
		     			page:this.page,
		     			limit:this.limitPages,
		     			sort_field: this.sort_field
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getQuestionsData({
		     			limit: this.limitPages,
		     			sort_field: this.sort_field
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