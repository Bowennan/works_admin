<template>
	<div class="tables">
		<ap-search-comp></ap-search-comp>
        <ap-title-comp></ap-title-comp>
        <ap-list-comp class="tables"></ap-list-comp>
        <Page class="pages" :current="page" :total="total" show-sizer :page-size="limitPages" :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import apSearchComp from '@/components/community/ap-search-comp'
	import apTitleComp from '@/components/community/ap-title-comp'
	import apListComp from '@/components/community/ap-list-comp'
    
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
	                    'page'
	        		])
            },
		     methods: {
		     	...mapActions('postingsData', [
                       'getPostingAbnormalData'
		     		]),
		     	turnPage(pageNum){
		     		this.getPostingAbnormalData({
		     			page: pageNum,
		     			limit: this.limitPages
		     		})
		     	},
		     	turnPages(pagesNum) {
                    this.limitPages = pagesNum
		     	    this.getPostingAbnormalData({
		     	    	limit: this.limitPages
		     	    })
		     	}
		     },
             components: {
			    apSearchComp,
			    apTitleComp,
			    apListComp
			  }
	}
</script>