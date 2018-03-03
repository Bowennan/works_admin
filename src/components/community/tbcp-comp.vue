<template>
	<div class="tables">
		<tbcp-search-comp></tbcp-search-comp>
        <tbcp-title-comp></tbcp-title-comp>
        <tbcp-list-comp></tbcp-list-comp>

        <Page class="pages" :current.sync="current" :total="totalPages" show-sizer :page-size="limitPages" :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import tbcpSearchComp from '@/components/community/tbcp-search-comp'
	import tbcpTitleComp from '@/components/community/tbcp-title-comp'
	import tbcpListComp from '@/components/community/tbcp-list-comp'

    import {mapGetters, mapActions} from "vuex"

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
	        	...mapGetters('postingData', [
	                    'totalPages',
	                    'orderType',
	                    'title',
	                    'begin',
	                    'end',
	                    'articleType',
	                    'imageType'
	        		])
            },
		     methods: {
		     	...mapActions('postingData', [
                       'getPostingReviewData'
		     		]),
		     	turnPage(pageNum){
		     		this.getPostingReviewData({
		     			page: pageNum,
		     			limit: this.limitPages
		     		})
		     	},
		     	turnPages(pagesNum) {
                    this.limitPages = pagesNum
		     	    this.getPostingReviewData({
		     	    	limit: this.limitPages
		     	    })
		     	}
		     },
             components: {
			    tbcpSearchComp,
			    tbcpTitleComp,
			    tbcpListComp
			  }
	}
</script>