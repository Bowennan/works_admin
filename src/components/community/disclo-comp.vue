<template>
	<div class="tables">
		<disclo-search-comp></disclo-search-comp>
        <disclo-title-comp></disclo-title-comp>
        <disclo-list-comp></disclo-list-comp>

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
    import discloSearchComp from '@/components/community/disclo-search-comp'
	import discloTitleComp from '@/components/community/disclo-title-comp'
	import discloListComp from '@/components/community/disclo-list-comp'

	import {mapActions, mapGetters, mapMutations} from "vuex"
    
    const _Ok = 200;
	export default {

		     data() {
		     	return {
		     		pageArray:[5,10,20],
		     		limitPages:10
		     	}
		     },

		     computed: {
		     	...mapGetters('disclosesData', [
                       'total',
                       'page',
                       'sort_field'
		     		])
		     },



		     methods: {
		     	...mapActions('disclosesData', [
                        'getDiscloseData'
		     		]),

		     	...mapMutations('exhibitionsData', [
                       'setPage'
		     		]),

		     	turnPage(pageNum) {
		     		this.setPage(pageNum)
		     		this.getDiscloseData({
		     			page:pageNum,
		     			limit:this.limitPages,
		     			sort_field: this.sort_field
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getDiscloseData({
		     			limit: this.limitPages,
		     			sort_field: this.sort_field
		     		})
		     	}
		     },
             components: {
			    discloSearchComp,
				discloTitleComp,
				discloListComp
			  }
	}
</script>