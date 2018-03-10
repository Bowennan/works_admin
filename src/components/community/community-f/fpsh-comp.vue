<template>
	<div class="tables">
		<fpsh-search-comp></fpsh-search-comp>
        <fpsh-title-comp></fpsh-title-comp>
        <fpsh-list-comp></fpsh-list-comp>

        <Page class="pages"
              :total="total"
              show-sizer
              :page-size="limitPages"
              :page-size-opts="pageArray"
              :current="page"
              @on-change = "turnPage"
              @on-page-size-change = "turnPages"
        ></Page>
	</div>
</template>

<script>
    import fpshSearchComp from '@/components/community/community-f/fpsh-search-comp'
	import fpshTitleComp from '@/components/community/community-f/fpsh-title-comp'
	import fpshListComp from '@/components/community/community-f/fpsh-list-comp'

	import {mapActions, mapGetters, mapMutations} from "vuex"
	export default {

		     data() {
		     	return {
		     		pageArray:[5,10,20],
		     		limitPages:10
		     	}
		     },

		     computed: {
		     	...mapGetters('chooseIdleData', [
                       'total',
                       'page',
		     		])
		     },



		     methods: {
		     	...mapActions('chooseIdleData', [
                        'getChooseIdleData'
		     		]),

		     	...mapMutations('chooseIdleData', [
                        'setPage'
		     		]),

		     	turnPage(pageNum) {
		     		this.setPage(pageNum)
		     		this.getChooseIdleData({
		     			page:pageNum,
		     			limit:this.limitPages
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getChooseIdleData({
		     			limit: this.limitPages
		     		})
		     	}
		     },
             components: {
			    fpshSearchComp,
			    fpshTitleComp,
			    fpshListComp
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