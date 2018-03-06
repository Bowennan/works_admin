<template>
	<div class="tables">
		<ash-search-comp></ash-search-comp>
        <ash-title-comp></ash-title-comp>
        <ash-list-comp></ash-list-comp>

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
    import ashSearchComp from '@/components/community/ash-search-comp'
	import ashTitleComp from '@/components/community/ash-title-comp'
	import ashListComp from '@/components/community/ash-list-comp'

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
		     	...mapGetters('idlesData', [
                       'total',
                       'page'
		     		])
		     },



		     methods: {
		     	...mapActions('idlesData', [
                        'getIdleAbnormalData'
		     		]),

		     	...mapMutations('idlesData', [
                        'setPage'
		     		]),

		     	turnPage(pageNum) {
		     		this.setPage(pageNum)
		     		this.getIdleAbnormalData({
		     			page:pageNum,
		     			limit:this.limitPages
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getAbnormalIdleData({
		     			limit: this.limitPages
		     		})
		     	}
		     },
             components: {
			    ashSearchComp,
				ashTitleComp,
				ashListComp
			  }
	}
</script>