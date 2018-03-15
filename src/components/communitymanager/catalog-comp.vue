<template>
	<div class="tables">
		<catalog-search-comp></catalog-search-comp>
        <catalog-title-comp></catalog-title-comp>
        <catalog-list-comp></catalog-list-comp>

        <Page class="pages" :current="page" :total="total" show-sizer :page-size="limitPages" :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import catalogSearchComp from '@/components/communitymanager/catalog-search-comp'
	import catalogTitleComp from '@/components/communitymanager/catalog-title-comp'
	import catalogListComp from '@/components/communitymanager/catalog-list-comp'

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
		     			relation_type: 'catalog',
		     			page: num,
		     			limit: this.limitPages
		     		})
		     	},

		     	//页码选择（每页显示）
		     	turnPages(nums) {
		     		this.limitPages = nums
		     		this.communityManager({
		     			relation_type: 'catalog',
		     			limit: this.limitPages
		     		})
		     	}
		     },
             components: {
			    catalogSearchComp,
			    catalogTitleComp,
			    catalogListComp
			  }
	}
</script>