<template>
	<div class="tables">
		<fpgp-search-comp></fpgp-search-comp>
        <fpgp-title-comp></fpgp-title-comp>
        <fpgp-list-comp></fpgp-list-comp>
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
    import fpgpSearchComp from '@/components/community/community-f/fpgp-search-comp'
	import fpgpTitleComp from '@/components/community/community-f/fpgp-title-comp'
	import fpgpListComp from '@/components/community/community-f/fpgp-list-comp'

	import {mapActions, mapGetters, mapMutations} from "vuex"

	export default {

		     data() {
		     	return {
		     		pageArray:[5,10,20],
		     		limitPages:10
		     	}
		     },

		     computed: {
		     	...mapGetters('chooseCouponsData', [
                       'total',
                       'page'
		     		])
		     },



		     methods: {
		     	...mapActions('chooseCouponsData', [
                        'getChooseCouponsData'
		     		]),

		     	...mapMutations('chooseCouponsData', [
                        'setPage'
		     		]),

		     	turnPage(pageNum) {
		     		this.setPage(pageNum)
		     		this.getChooseCouponsData({
		     			page: this.page,
		     			limit:this.limitPages
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getChooseCouponsData({
		     			limit: this.limitPages
		     		})
		     	}
		     },
             components: {
			    fpgpSearchComp,
			    fpgpTitleComp,
			    fpgpListComp
			  }
	}
</script>