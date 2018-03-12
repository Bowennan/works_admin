<template>
	<div class="tables">
		<pageposting-search-comp></pageposting-search-comp>
        <pageposting-title-comp></pageposting-title-comp>
        <pageposting-list-comp></pageposting-list-comp>
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
    import pagepostingSearchComp from '@/components/webpage/pageposting-search-comp'
	import pagepostingTitleComp from '@/components/webpage/pageposting-title-comp'
	import pagepostingListComp from '@/components/webpage/pageposting-list-comp'
 	import {mapActions, mapGetters} from "vuex"
    
    const _Ok = 200;
	export default {

		     data() {
		     	return {
		     		pageArray:[5,10,20],
		     		limitPages:10
		     	}
		     },

		     computed: {
		     	...mapGetters('commentsData', [
                       'total',
                       'page',
                       'summary_catalog'
		     		])
		     },



		     methods: {
		     	...mapActions('commentsData', [
                        'getCommentData'
		     		]),

		     	turnPage(pageNum) {
		     		this.getCommentData({
		     			page:pageNum,
		     			limit:this.limitPages,
		     			summary_catalog: this.summary_catalog
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getCommentData({
		     			limit: this.limitPages,
		     			summary_catalog: this.summary_catalog
		     		})
		     	}
		     },
             components: {
			    pagepostingSearchComp,
				pagepostingTitleComp,
				pagepostingListComp
			  }
	}
</script>