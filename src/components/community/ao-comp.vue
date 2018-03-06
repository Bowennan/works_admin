<template>
	<div class="tables">
		<ao-search-comp></ao-search-comp>
        <ao-title-comp></ao-title-comp>
        <ao-list-comp class="tables"></ao-list-comp>
        <Page class="pages" :current="page" :total="total" show-sizer :page-size="limitPages" :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import aoSearchComp from '@/components/community/ao-search-comp'
	import aoTitleComp from '@/components/community/ao-title-comp'
	import aoListComp from '@/components/community/ao-list-comp'

	import {mapGetters, mapActions, mapMutations} from "vuex"
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
	                    'page'
	        		])
            },
		     methods: {
		     	...mapActions('masterpieceData', [
                       'getAbnormalMasterpiece'
		     		]),
		     	...mapMutations('masterpieceData', [
                       'setPage'
		     		]),
		     	turnPage(pageNum){
		     		this.setPage(pageNum)
		     		this.getAbnormalMasterpiece({
		     			page: this.page,
		     			limit: this.limitPages
		     		})
		     	},
		     	turnPages(pagesNum) {
                    this.limitPages = pagesNum
		     	    this.getAbnormalMasterpiece({
		     	    	limit: this.limitPages
		     	    })
		     	}
		     },
             components: {
			    aoSearchComp,
			    aoTitleComp,
			    aoListComp
			  }
	}
</script>