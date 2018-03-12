<template>
	<div class="tables">
		<piece-search-comp></piece-search-comp>
        <piece-title-comp></piece-title-comp>
        <piece-list-comp></piece-list-comp>
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
    import pieceSearchComp from '@/components/webpage/piece-search-comp'
	import pieceTitleComp from '@/components/webpage/piece-title-comp'
	import pieceListComp from '@/components/webpage/piece-list-comp'
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
			    pieceSearchComp,
				pieceTitleComp,
				pieceListComp
			  }
	}
</script>