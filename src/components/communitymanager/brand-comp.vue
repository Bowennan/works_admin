<template>
	<div class="tables">
		<brand-search-comp></brand-search-comp>
        <brand-title-comp></brand-title-comp>
        <brand-list-comp></brand-list-comp>

        <Page class="pages" :current="page" :total="total" show-sizer :page-size="limitPages" :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import brandSearchComp from '@/components/communitymanager/brand-search-comp'
	import brandTitleComp from '@/components/communitymanager/brand-title-comp'
	import brandListComp from '@/components/communitymanager/brand-list-comp'

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
		     			relation_type: 'brand',
		     			page: num,
		     			limit: this.limitPages
		     		})
		     	},

		     	//页码选择（每页显示）
		     	turnPages(nums) {
		     		this.limitPages = nums
		     		this.communityManager({
		     			relation_type: 'brand',
		     			limit: this.limitPages
		     		})
		     	}
		     },
             components: {
			    brandSearchComp,
			    brandTitleComp,
			    brandListComp
			  }
	}
</script>