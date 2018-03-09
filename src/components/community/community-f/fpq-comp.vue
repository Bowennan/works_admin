<template>
	<div class="um">
		<fpq-search-comp></fpq-search-comp>
        <fpq-title-comp></fpq-title-comp>
        <fpq-list-comp></fpq-list-comp>
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
    import fpqSearchComp from '@/components/community/community-f/fpq-search-comp'
	import fpqTitleComp from '@/components/community/community-f/fpq-title-comp'
	import fpqListComp from '@/components/community/community-f/fpq-list-comp'
	import {mapActions, mapGetters, mapMutations} from "vuex"

	export default {
		 data() {
		     	return {
		     		pageArray:[5,10,20],
		     		limitPages:10
		     	}
		     },

		     computed: {
		     	...mapGetters('chooseQuestionData', [
                       'total',
                       'page'
		     		])
		     },



		     methods: {
		     	...mapActions('chooseQuestionData', [
                        'getChooseQuestionData'
		     		]),

		     	...mapMutations('chooseQuestionData',[
                       'setPage'
		     		]),

		     	turnPage(pageNum) {
		     		this.setPage(pageNum)
		     		this.getChooseQuestionData({
		     			page:this.page,
		     			limit:this.limitPages
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getChooseQuestionData({
		     			limit: this.limitPages
		     		})
		     	}
		     },
             components: {
			    fpqSearchComp,
			    fpqTitleComp,
			    fpqListComp
			  }
	}
</script>

<style scoped>
	  .tables {
	  	height: 100%;
	    width:96%;
	    min-width:1052px;
	    margin:0 10px;
	  }
</style>