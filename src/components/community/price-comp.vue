
<template>
	<div class="tables">
		<price-search-comp></price-search-comp>
        <price-title-comp></price-title-comp>
        <price-list-comp></price-list-comp>

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
    import priceSearchComp from '@/components/community/price-search-comp'
	import priceTitleComp from '@/components/community/price-title-comp'
	import priceListComp from '@/components/community/price-list-comp'

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
		     	...mapGetters('couponsData', [
                       'totalPages'
		     		])
		     },



		     methods: {
		     	...mapActions('couponsData', [
                        'getCouponsData'
		     		]),

		     	turnPage(pageNum) {
		     		this.getCouponsData({
		     			page:pageNum,
		     			limit:this.limitPages
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getCouponsData({
		     			limit: this.limitPages
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