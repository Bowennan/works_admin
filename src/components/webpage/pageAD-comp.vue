<template>
	<div class="tables">
		<pagead-search-comp></pagead-search-comp>
        <pagead-title-comp></pagead-title-comp>
        <pagead-list-comp></pagead-list-comp>
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
    import pageadSearchComp from '@/components/webpage/pagead-search-comp'
	import pageadTitleComp from '@/components/webpage/pagead-title-comp'
	import pageadListComp from '@/components/webpage/pagead-list-comp'
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
			    pageadSearchComp,
				pageadTitleComp,
				pageadListComp
			  }
	}
</script>