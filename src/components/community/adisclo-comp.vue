<template>
	<div class="tables">
		<adisclo-search-comp></adisclo-search-comp>
        <adisclo-title-comp></adisclo-title-comp>
        <adisclo-list-comp></adisclo-list-comp>

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
    import adiscloSearchComp from '@/components/community/adisclo-search-comp'
	import adiscloTitleComp from '@/components/community/adisclo-title-comp'
	import adiscloListComp from '@/components/community/adisclo-list-comp'

	import {mapActions, mapGetters, mapMutations} from "vuex"
    
    const _Ok = 200;
	export default {

		     data() {
		     	return {
		     		pageArray:[5,10,20],
		     		limitPages:10,
		     		current:1
		     	}
		     },

		     computed: {
		     	...mapGetters('disclosesData', [
                       'total',
                       'page'
		     		])
		     },



		     methods: {
		     	...mapActions('disclosesData', [
                        'abnormalCommunityDisclose'
		     		]),

		     	...mapMutations('idlesData', [
                        'setPage'
		     		]),

		     	turnPage(pageNum) {
		     		this.setPage(pageNum)
		     		this.abnormalCommunityDisclose({
		     			page:pageNum,
		     			limit:this.limitPages
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.abnormalCommunityDisclose({
		     			limit: this.limitPages
		     		})
		     	}
		     },
             components: {
			    adiscloSearchComp,
				adiscloTitleComp,
				adiscloListComp
			  }
	}
</script>