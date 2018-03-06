<template>
	<div class="tables">
		<agp-search-comp></agp-search-comp>
        <agp-title-comp></agp-title-comp>
        <agp-list-comp></agp-list-comp>

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
    import agpSearchComp from '@/components/community/agp-search-comp'
	import agpTitleComp from '@/components/community/agp-title-comp'
	import agpListComp from '@/components/community/agp-list-comp'

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
		     	...mapGetters('couponsData', [
                       'total',
                       'page'
		     		])
		     },



		     methods: {
		     	...mapActions('couponsData', [
                        'getabnormalCommunityCoupons'
		     		]),

		     	...mapMutations('couponsData', [
                       'setPage'
		     		]),

		     	turnPage(pageNum) {
		     		this.setPage(pageNum)
		     		this.getabnormalCommunityCoupons({
		     			page: this.page,
		     			limit:this.limitPages
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getabnormalCommunityCoupons({
		     			limit: this.limitPages
		     		})
		     	}
		     },
             components: {
			    agpSearchComp,
				agpTitleComp,
				agpListComp
			  }
	}
</script>