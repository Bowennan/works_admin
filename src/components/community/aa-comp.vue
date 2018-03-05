<template>
	<div class="tables">
		<aa-search-comp></aa-search-comp>
        <aa-title-comp></aa-title-comp>
        <aa-list-comp></aa-list-comp>
        <Page class="pages"
              :total="totalPages"
              show-sizer
              :page-size="limitPages"
              :page-size-opts="pageArray"
              :current.sync="current"
              @on-change = "turnPage"
              @on-page-size-change = "turnPages"
        ></Page>
	</div>
</template>

<script>
    import aaSearchComp from '@/components/community/aa-search-comp'
	import aaTitleComp from '@/components/community/aa-title-comp'
	import aaListComp from '@/components/community/aa-list-comp'
    import {mapActions, mapGetters} from "vuex"
    
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
		     	...mapGetters('replysData', [
                       'totalPages'
		     		])
		     },



		     methods: {
		     	...mapActions('replysData', [
                        'abnormalCommunityReply'
		     		]),

		     	turnPage(pageNum) {
		     		this.abnormalCommunityReply({
		     			page:pageNum,
		     			limit:this.limitPages,
		     			summary_catalog: 'article'
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.abnormalCommunityReply({
		     			limit: this.limitPages,
		     			summary_catalog: 'article'
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