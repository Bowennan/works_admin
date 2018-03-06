<template>
	<div class="tables">
		<aa-search-comp></aa-search-comp>
        <aa-title-comp></aa-title-comp>
        <aa-list-comp></aa-list-comp>
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
    import aaSearchComp from '@/components/community/aa-search-comp'
	import aaTitleComp from '@/components/community/aa-title-comp'
	import aaListComp from '@/components/community/aa-list-comp'
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
		     	...mapGetters('replysData', [
                       'total',
                       'page',
                       'summary_catalog'
		     		])
		     },



		     methods: {
		     	...mapActions('replysData', [
                        'abnormalCommunityReply'
		     		]),

		     	...mapMutations('replysData', [
                       'setPage'
		     		]),

		     	turnPage(pageNum) {
		     		this.setPage(pageNum)
		     		this.abnormalCommunityReply({
		     			page:pageNum,
		     			limit:this.limitPages,
		     			summary_catalog: this.summary_catalog
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.abnormalCommunityReply({
		     			limit: this.limitPages,
		     			summary_catalog: this.summary_catalog
		     		})
		     	}
		     },
             components: {
			    aaSearchComp,
				aaTitleComp,
				aaListComp
			  }
	}
</script>