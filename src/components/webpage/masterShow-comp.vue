<template>
	<div class="um">
		<master-search-comp></master-search-comp>
        <master-title-comp></master-title-comp>
        <master-list-comp></master-list-comp>
        <Page class="pages" :current="page" :total="total" show-sizer :page-size="limitPages" :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import masterSearchComp from '@/components/webpage/master-search-comp'
	import masterTitleComp from '@/components/webpage/master-title-comp'
	import masterListComp from '@/components/webpage/master-list-comp'

	import {mapGetters, mapActions} from "vuex"

	export default {
		     data() {
		     	return {
		     		pageArray:[5,10,20],
               	    limitPages:10
		     	}
		     },
		     computed: {
		     	...mapGetters('mastersData', [
                       'total',
                       'page',
                       'type'
		     		])
		     },
		     methods: {
		     	...mapActions('mastersData',[
                       'getmasterListData'
		     		]),

		     	turnPage(num) {
		     		this.getmasterListData({
		     			page: num,
		     			limit: this.limitPages,
		     			type: this.type
		     		})
		     	},

		     	turnPages(nums) {
		     		this.limitPages = nums
		     		this.getmasterListData({
		     			limit: this.limitPages,
		     			type: this.type
		     		})
		     	}
		     },
             components: {
			    masterSearchComp,
			    masterTitleComp,
			    masterListComp
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