<template>
	<div class="um">
		<fpp-search-comp></fpp-search-comp>
        <fpp-title-comp></fpp-title-comp>
        <fpp-list-comp></fpp-list-comp>

        <Page class="pages" :current="page" :total="total" show-sizer :page-size="limitPages" :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import fppSearchComp from '@/components/community/community-f/fpp-search-comp'
	import fppTitleComp from '@/components/community/community-f/fpp-title-comp'
	import fppListComp from '@/components/community/community-f/fpp-list-comp'
    import {mapGetters, mapActions} from "vuex"
	export default {

		     data() {
		     	return {
		     		pageArray:[5,10,20],
               	    limitPages:10
		     	}
		     },
		     computed: {
		     	...mapGetters('choosePostingData',
		     		[
                       'total',
                       'page'
		     		])
		     },
		     methods: {
		     	...mapActions('choosePostingData', [
                       'getChoosePostingData'
		     		]),

		     	turnPage(num) {
		     		this.getChoosePostingData({
		     			page: num,
		     			limit: this.limitPages
		     		})
		     	},

		     	turnPages(nums) {
		     		this.limitPages = nums
		     		this.getChoosePostingData({
		     			limit: this.limitPages
		     		})
		     	}
		     },
             components: {
			    fppSearchComp,
			    fppTitleComp,
			    fppListComp
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