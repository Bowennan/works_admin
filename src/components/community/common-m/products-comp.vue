<template>
	<div class="um">
		<products-search-comp></products-search-comp>
        <products-title-comp></products-title-comp>
        <products-list-comp></products-list-comp>
        <Page class="pages" :current="page" :total="total" show-sizer :page-size="limitPages" :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import productsSearchComp from '@/components/community/common-m/products-search-comp'
	import productsTitleComp from '@/components/community/common-m/products-title-comp'
	import productsListComp from '@/components/community/common-m/products-list-comp'
    import {mapGetters, mapActions} from 'vuex'
	export default {
		     data() {
		     	return {
		     		pageArray:[5,10,20],
               	    limitPages:10
		     	}
		     },
		     methods: {
		     	...mapActions('hotproductsData', [
                       'getHotProduct'
		     		]),

		     	turnPage(num) {
		     		this.getHotProduct({
		     			page: num,
		     			limit: this.limitPages,
		     			community_id: this.community_id
		     		})
		     	},
		     	turnPages(nums) {
		     		this.limitPages = nums
		     		this.getHotProduct({
                         limit: this.limitPages,
                         community_id: this.community_id
		     		})
		     	}
		     },
		     computed: {
		     	...mapGetters('hotproductsData', [
                       'total',
                       'page',
                       'community_id'
		     		])
		     },
             components: {
			    productsSearchComp,
			    productsTitleComp,
			    productsListComp
			  }
	}
</script>

<style scoped>
	  .tables {
	  	height: 100%;
	    width:96%;
	    min-width:1052px;
	    margin:0 10px;
	  }
</style>