<template>
	<div class="tables">
		<posting-search-comp></posting-search-comp>
        <posting-title-comp></posting-title-comp>
        <posting-list-comp></posting-list-comp>

        <Page class="pages" :current="page" :total="total" show-sizer :page-size="limitPages" :page-size-opts="pageArray"
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
               	 limitPages:10
               }
		    },
            computed: {
	        	...mapGetters('postingsData', [
	                    'total',
	                    'content_type',
						'article_type',
						'begin_published_at',
						'end_published_at',
						'page',
						'sort_field',
						'title'
	        		])
            },
		     methods: {
		     	...mapActions('postingsData', [
                       'getPostingData'
		     		]),
		     	turnPage(pageNum){
		     		this.getPostingData({
		     			 page: pageNum,
		     			 limit: this.limitPages,
		     			 content_type: this.content_type,
		                 article_type: this.article_type,
		                 begin_published_at: this.begin_published_at,
		                 end_published_at: this.end_published_at,
		                 sort_field: this.sort_field,
		                 title: this.title
		     		})
		     	},
		     	turnPages(pagesNum) {
                    this.limitPages = pagesNum
		     	    this.getPostingData({
		     	    	 limit: this.limitPages,
		     	    	 content_type: this.content_type,
		                 article_type: this.article_type,
		                 begin_published_at: this.begin_published_at,
		                 end_published_at: this.end_published_at,
		                 sort_field: this.sort_field,
		                 title: this.title
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