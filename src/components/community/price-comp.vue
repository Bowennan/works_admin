
<template>
	<div class="tables">
		<price-search-comp></price-search-comp>
        <price-title-comp></price-title-comp>
        <price-list-comp></price-list-comp>

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
    import priceSearchComp from '@/components/community/price-search-comp'
	import priceTitleComp from '@/components/community/price-title-comp'
	import priceListComp from '@/components/community/price-list-comp'

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
                       'page',
                       'begin_published_at',
						'end_published_at',
						'sort_field'
		     		])
		     },



		     methods: {
		     	...mapActions('couponsData', [
                        'getCouponsData'
		     		]),

		     	...mapMutations('couponsData', [
                        'setPage'
		     		]),

		     	turnPage(pageNum) {
		     		this.setPage(pageNum)
		     		this.getCouponsData({
		     			page: this.page,
		     			limit:this.limitPages,
		     			sort_field: this.sort_field,
		     			end_published_at: this.end_published_at,
		     			begin_published_at: this.begin_published_at
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getCouponsData({
		     			limit: this.limitPages,
		     			sort_field: this.sort_field,
		     			end_published_at: this.end_published_at,
		     			begin_published_at: this.begin_published_at
		     		})
		     	}
		     },
             components: {
			    priceSearchComp,
				priceTitleComp,
				priceListComp
			  }
	}
</script>