<template>
	<div class="um">
		<officer-search-comp></officer-search-comp>
        <officer-title-comp></officer-title-comp>
        <officer-list-comp></officer-list-comp>
        <Page class="pages" :current="page" :total="total" show-sizer :page-size="limitPages" :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import officerSearchComp from '@/components/webpage/officer-search-comp'
	import officerTitleComp from '@/components/webpage/officer-title-comp'
	import officerListComp from '@/components/webpage/officer-list-comp'

	import {mapGetters, mapActions} from "vuex"

	export default {
		     data() {
		     	return {
		     		pageArray:[5,10,20],
               	    limitPages:10
		     	}
		     },
		     computed: {
		     	...mapGetters('officersData', [
                       'total',
                       'page',
                       'type'
		     		])
		     },
		     methods: {
		     	...mapActions('officersData',[
                       'getofficerListData'
		     		]),

		     	turnPage(num) {
		     		this.getofficerListData({
		     			page: num,
		     			limit: this.limitPages,
		     			type: this.type
		     		})
		     	},

		     	turnPages(nums) {
		     		this.limitPages = nums
		     		this.getofficerListData({
		     			limit: this.limitPages,
		     			type: this.type
		     		})
		     	}
		     },
             components: {
			    officerSearchComp,
			    officerTitleComp,
			    officerListComp
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