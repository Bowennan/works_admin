<template>
	<div class="tables">
		<banner-search-comp></banner-search-comp>
        <banner-title-comp></banner-title-comp>
        <banner-list-comp></banner-list-comp>

        <Page class="pages" :current="page" :total="total" show-sizer :page-size="limitPages" :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import bannerSearchComp from '@/components/community/common-m/banner-search-comp'
	import bannerTitleComp from '@/components/community/common-m/banner-title-comp'
	import bannerListComp from '@/components/community/common-m/banner-list-comp'
    import {mapActions, mapMutations, mapGetters} from 'vuex'
	export default {
		     data() {
                return {
                	pageArray:[5,10,20],
               	    limitPages:10
                }
		     },

		     computed: {
		     	...mapGetters('bannerListsData', [
                        'page',
                        'total',
                        'community_id'
		     		])
		     },
		     methods: {
		     	...mapActions('bannerListsData', [
                        'getBannersListData'
		     		]),

		     	turnPage(num) {
		     		this.getBannersListData({
		     			page: num,
		     			limit: this.limitPages,
		     			community_id: this.community_id
		     		})
		     	},

		     	turnPages(nums) {
		     		this.limitPages = nums
		     		this.getBannersListData({
		     			limit: this.limitPages,
		     			community_id: this.community_id
		     		})
		     	}
		     },
             components: {
			    bannerSearchComp,
			    bannerTitleComp,
			    bannerListComp
			  }
	}
</script>