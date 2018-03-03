<template>
	<div class="tables">
		<ao-search-comp></ao-search-comp>
        <ao-title-comp></ao-title-comp>
        <ao-list-comp class="tables"></ao-list-comp>
        <Page class="pages" :current.sync="current" :total="totalPages" show-sizer :page-size="limitPages" :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import aoSearchComp from '@/components/community/ao-search-comp'
	import aoTitleComp from '@/components/community/ao-title-comp'
	import aoListComp from '@/components/community/ao-list-comp'

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
	        	...mapGetters('masterpieceData', [
	                    'totalPages'
	        		])
            },
		     methods: {
		     	...mapActions('masterpieceData', [
                       'getAbnormalMasterpiece'
		     		]),
		     	turnPage(pageNum){
		     		this.getAbnormalMasterpiece({
		     			page: pageNum,
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