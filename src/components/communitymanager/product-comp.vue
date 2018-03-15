<template>
	<div class="tables">
		<product-search-comp></product-search-comp>
        <product-title-comp></product-title-comp>
        <product-list-comp></product-list-comp>

        <Page class="pages" :current="page" :total="total" show-sizer :page-size="limitPages" :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import productSearchComp from '@/components/communitymanager/product-search-comp'
	import productTitleComp from '@/components/communitymanager/product-title-comp'
	import productListComp from '@/components/communitymanager/product-list-comp'

	import {mapGetters, mapActions} from "vuex"

	export default {
		     data() {
		     	return {
		     		pageArray:[5,10],
		     		limitPages:10
		     	}
		     },

		     computed: {
		     	...mapGetters('communitymanagerData', [
                        'total',
                        'page',
		     		])
		     },

		     methods:{
		     	...mapActions('communitymanagerData', [
                       'communityManager'
		     		]),

		     	//翻页
		     	turnPage(num) {
		     		this.communityManager({
		     			relation_type: 'product',
		     			page: num,
		     			limit: this.limitPages
		     		})
		     	},

		     	//页码选择（每页显示）
		     	turnPages(nums) {
		     		this.limitPages = nums
		     		this.communityManager({
		     			relation_type: 'product',
		     			limit: this.limitPages
		     		})
		     	}
		     },
             components: {
			    productSearchComp,
			    productTitleComp,
			    productListComp
			  }
	}
</script>