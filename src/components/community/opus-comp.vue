<template>
	<div class="tables">
		<opus-search-comp></opus-search-comp>
        <opus-title-comp></opus-title-comp>
        <opus-list-comp></opus-list-comp>

        <Page class="pages" :current.sync="current" :total="totalPages" show-sizer :page-size-opts="pageArray" :page-size="limitPages"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import opusSearchComp from '@/components/community/opus-search-comp'
	import opusTitleComp from '@/components/community/opus-title-comp'
	import opusListComp from '@/components/community/opus-list-comp'
	import {mapGetters, mapActions} from 'vuex'
    
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
	        	...mapGetters('masterpieceData', [
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
		     	...mapActions('masterpieceData', [
                       'getMasterpieceData'
		     		]),
		     	turnPage(pageNum){
		     		this.getMasterpieceData({
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
		     	    this.getMasterpieceData({
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
			    opusSearchComp,
			    opusTitleComp,
			    opusListComp
			  }
	}
</script>