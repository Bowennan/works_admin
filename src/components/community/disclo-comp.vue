<template>
	<div class="tables">
		<disclo-search-comp></disclo-search-comp>
        <disclo-title-comp></disclo-title-comp>
        <disclo-list-comp></disclo-list-comp>

        <Page class="pages"
              :total="totalPages"
              show-sizer
              :page-size="limitPages"
              :page-size-opts="pageArray"
              :current.sync="current"
              @on-change = "turnPage"
              @on-page-size-change = "turnPages"
        ></Page>
	</div>
</template>

<script>
    import discloSearchComp from '@/components/community/disclo-search-comp'
	import discloTitleComp from '@/components/community/disclo-title-comp'
	import discloListComp from '@/components/community/disclo-list-comp'

	import {mapActions, mapGetters} from "vuex"
    
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
                       'totalPages'
		     		])
		     },



		     methods: {
		     	...mapActions('disclosesData', [
                        'getDiscloseData'
		     		]),

		     	turnPage(pageNum) {
		     		this.getDiscloseData({
		     			page:pageNum,
		     			limit:this.limitPages
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getDiscloseData({
		     			limit: this.limitPages
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