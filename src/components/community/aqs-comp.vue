<template>
	<div class="tables">
		<aqs-search-comp></aqs-search-comp>
        <aqs-title-comp></aqs-title-comp>
        <aqs-list-comp></aqs-list-comp>

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
    import aqsSearchComp from '@/components/community/aqs-search-comp'
	import aqsTitleComp from '@/components/community/aqs-title-comp'
	import aqsListComp from '@/components/community/aqs-list-comp'

	import {mapActions, mapGetters, mapMutations} from "vuex"
	    
	    const _Ok = 200;
		export default {

			     data() {
			     	return {
			     		pageArray:[5,10,20],
			     		limitPages:10
			     	}
			     },

			     computed: {
			     	...mapGetters('exhibitionsData', [
	                       'total',
	                       'page'
			     		])
			     },



			     methods: {
			     	...mapActions('exhibitionsData', [
	                        'getAbnormalQsData'
			     		]),

			     	...mapMutations('idlesData', [
                        'setPage'
		     		]),

			     	turnPage(pageNum) {
			     		this.setPage(pageNum)
			     		this.getAbnormalQsData({
			     			page:pageNum,
			     			limit:this.limitPages
			     		})
			     	},

			     	turnPages(pagesNum) {
			     		this.limitPages = pagesNum;
			     		this.getAbnormalQsData({
			     			limit: this.limitPages
			     		})
			     	}
			     },
	             components: {
				    aqsSearchComp,
					aqsTitleComp,
					aqsListComp
				  }
		}
</script>