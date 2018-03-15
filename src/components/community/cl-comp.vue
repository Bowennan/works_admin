<template>
	<div class="tables">
		<cl-search-comp></cl-search-comp>
        <cl-title-comp></cl-title-comp>
        <cl-list-comp></cl-list-comp>
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
    import clSearchComp from '@/components/community/cl-search-comp'
	import clTitleComp from '@/components/community/cl-title-comp'
	import clListComp from '@/components/community/cl-list-comp'
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
                       'summary_catalog',
                       'begin_created_at',
                       'end_created_at'
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
		     			summary_catalog: this.summary_catalog,
		     			begin_created_at: this.begin_created_at,
		     			end_created_at: this.end_created_at
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getCommentData({
		     			limit: this.limitPages,
		     			summary_catalog: this.summary_catalog,
		     			begin_created_at: this.begin_created_at,
		     			end_created_at: this.end_created_at
		     		})
		     	}
		     },
             components: {
			    clSearchComp,
				clTitleComp,
				clListComp
			  }
	}
</script>