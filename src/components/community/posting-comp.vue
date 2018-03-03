<template>
	<div class="tables">
		<posting-search-comp></posting-search-comp>
        <posting-title-comp></posting-title-comp>
        <posting-list-comp></posting-list-comp>

        <Page class="pages" :current.sync="current" :total="totalPages" show-sizer :page-size="limitPages" :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import postingSearchComp from '@/components/community/posting-search-comp'
	import postingTitleComp from '@/components/community/posting-title-comp'
	import postingListComp from '@/components/community/posting-list-comp'

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
                       'getPostingData'
		     		]),
		     	turnPage(pageNum){
		     		this.getPostingData({
		     			page: pageNum,
		     			limit: this.limitPages,
                        sort_field: this.orderType,
                        title: this.title,
                        article_type: this.articleType,
                        content_type: this.imageType,
                        begin_pulished_at: this.begin,
                        end_published_at: this.end
		     		})
		     	},
		     	turnPages(pagesNum) {
                    this.limitPages = pagesNum
		     	    this.getPostingData({
		     	    	limit: this.limitPages,
		     	    	sort_field: this.orderType,
		     	    	title: this.title,
		     	    	article_type: this.articleType,
		     	    	content_type: this.imageType,
		     	    	begin_pulished_at: this.begin,
		     	    	end_published_at: this.end
		     	    })
		     	}
		     },
             components: {
			    postingSearchComp,
			    postingTitleComp,
			    postingListComp
			  }
	}
</script>