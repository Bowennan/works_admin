<template>
	<div class="tables">
		<opus-search-comp></opus-search-comp>
        <opus-title-comp></opus-title-comp>
        <opus-list-comp></opus-list-comp>

        <Page class="pages" :current="page" :total="total" show-sizer :page-size-opts="pageArray" :page-size="limitPages"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import opusSearchComp from '@/components/community/opus-search-comp'
	import opusTitleComp from '@/components/community/opus-title-comp'
	import opusListComp from '@/components/community/opus-list-comp'
	import {mapGetters, mapActions, mapMutations} from 'vuex'
    
     const _Ok = 200;
	export default {
		    data() {
               return {
               	 pageArray:[5,10,20],
               	 limitPages:10

               }
		    },
            computed: {
	        	...mapGetters('masterpieceData', [
	                    'total',
	                    'page',
	                    'content_type',
						'begin_published_at',
						'end_published_at',
	        		])
            },
		     methods: {
		     	...mapActions('masterpieceData', [
                       'getMasterpieceData'
		     		]),

		     	...mapMutations('masterpieceData', [ 
		     		   'setPage'
		     		]),
		     	turnPage(pageNum){
		     		this.setPage(pageNum)
		     		this.getMasterpieceData({
		     			page: this.page,
		     			limit: this.limitPages,
                        sort_field: this.orderType,
                        title: this.title,
                        content_type: this.content_type,
                        begin_published_at: this.begin_published_at,
                        end_published_at: this.end_published_at
		     		})
		     	},
		     	turnPages(pagesNum) {
                    this.limitPages = pagesNum
		     	    this.getMasterpieceData({
		     	    	limit: this.limitPages,
		     	    	sort_field: this.orderType,
		     	    	title: this.title,
		     	    	content_type: this.content_type,
		     	    	begin_published_at: this.begin_published_at,
		     	    	end_published_at: this.end_published_at
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