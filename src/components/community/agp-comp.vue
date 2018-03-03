<template>
	<div class="tables">
		<agp-search-comp></agp-search-comp>
        <agp-title-comp></agp-title-comp>
        <agp-list-comp></agp-list-comp>

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
    import agpSearchComp from '@/components/community/agp-search-comp'
	import agpTitleComp from '@/components/community/agp-title-comp'
	import agpListComp from '@/components/community/agp-list-comp'

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
		     	...mapGetters('couponsData', [
                       'totalPages'
		     		])
		     },



		     methods: {
		     	...mapActions('couponsData', [
                        'getAbnormalCouponsData'
		     		]),

		     	turnPage(pageNum) {
		     		this.getAbnormalCouponsData({
		     			page:pageNum,
		     			limit:this.limitPages
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getAbnormalCouponsData({
		     			limit: this.limitPages
		     		})
		     	}
		     },
             components: {
			    agpSearchComp,
				agpTitleComp,
				agpListComp
			  }
	}
</script>