<template>
	<div class="um">
		<bulletin-search-comp></bulletin-search-comp>
        <bulletin-title-comp></bulletin-title-comp>
        <bulletin-list-comp></bulletin-list-comp>
        <Page class="pages" :current="page" :total="total" show-sizer :page-size="limitPages" :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import bulletinSearchComp from '@/components/community/common-m/bulletin-search-comp'
	import bulletinTitleComp from '@/components/community/common-m/bulletin-title-comp'
	import bulletinListComp from '@/components/community/common-m/bulletin-list-comp'

	import {mapGetters, mapActions} from "vuex"

	export default {
		     data() {
		     	return {
		     		pageArray:[5,10,20],
               	    limitPages:10
		     	}
		     },
		     computed: {
		     	...mapGetters('bulletinsData', [
                       'total',
                       'page',
                       'type'
		     		])
		     },
		     methods: {
		     	...mapActions('bulletinsData',[
                       'getBulletinListData'
		     		]),

		     	turnPage(num) {
		     		this.getBulletinListData({
		     			page: num,
		     			limit: this.limitPages,
		     			type: this.type
		     		})
		     	},

		     	turnPages(nums) {
		     		this.limitPages = nums
		     		this.getBulletinListData({
		     			limit: this.limitPages,
		     			type: this.type
		     		})
		     	}
		     },
             components: {
			    bulletinSearchComp,
			    bulletinTitleComp,
			    bulletinListComp
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