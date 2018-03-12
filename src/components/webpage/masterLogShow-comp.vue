<template>
	<div class="um">
		<masterlog-search-comp></masterlog-search-comp>
        <masterlog-title-comp></masterlog-title-comp>
        <masterlog-list-comp></masterlog-list-comp>
        <Page class="pages" :current="page" :total="total" show-sizer :page-size="limitPages" :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import masterlogSearchComp from '@/components/webpage/masterlog-search-comp'
	import masterlogTitleComp from '@/components/webpage/masterlog-title-comp'
	import masterlogListComp from '@/components/webpage/masterlog-list-comp'

	import {mapGetters, mapActions} from "vuex"

	export default {
		     data() {
		     	return {
		     		pageArray:[5,10,20],
               	    limitPages:10
		     	}
		     },
		     computed: {
		     	...mapGetters('masterlogsData', [
                       'total',
                       'page',
                       'type'
		     		])
		     },
		     methods: {
		     	...mapActions('masterlogsData',[
                       'getmasterlogListData'
		     		]),

		     	turnPage(num) {
		     		this.getmasterlogListData({
		     			page: num,
		     			limit: this.limitPages,
		     			type: this.type
		     		})
		     	},

		     	turnPages(nums) {
		     		this.limitPages = nums
		     		this.getmasterlogListData({
		     			limit: this.limitPages,
		     			type: this.type
		     		})
		     	}
		     },
             components: {
			    masterlogSearchComp,
			    masterlogTitleComp,
			    masterlogListComp
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