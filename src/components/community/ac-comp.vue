<template>
	<div class="tables">
		<ac-search-comp></ac-search-comp>
        <ac-title-comp></ac-title-comp>
        <ac-list-comp></ac-list-comp>

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
    import acSearchComp from '@/components/community/ac-search-comp'
	import acTitleComp from '@/components/community/ac-title-comp'
	import acListComp from '@/components/community/ac-list-comp'

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
		     	...mapGetters('commentsData', [
                       'total',
                       'page',
                       'summary_catalog'
		     		])
		     },



		     methods: {
		     	...mapActions('commentsData', [
                        'abnormalCommunityComment'
		     		]),

		     	...mapMutations('commentsData', [
                        'setPage'
		     		]),

		     	turnPage(pageNum) {
		     		this.setPage(pageNum)
		     		this.abnormalCommunityComment({
		     			page:this.page,
		     			limit:this.limitPages,
		     			summary_catalog: this.summary_catalog
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.abnormalCommunityComment({
		     			limit: this.limitPages,
		     			summary_catalog: this.summary_catalog
		     		})
		     	}
		     },
             components: {
			    acSearchComp,
				acTitleComp,
				acListComp
			  }
	}
</script>