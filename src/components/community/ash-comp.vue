<template>
	<div class="tables">
		<ash-search-comp></ash-search-comp>
        <ash-title-comp></ash-title-comp>
        <ash-list-comp></ash-list-comp>

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
    import ashSearchComp from '@/components/community/ash-search-comp'
	import ashTitleComp from '@/components/community/ash-title-comp'
	import ashListComp from '@/components/community/ash-list-comp'

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
		     	...mapGetters('idlesData', [
                       'totalPages'
		     		])
		     },



		     methods: {
		     	...mapActions('idlesData', [
                        'getIdleAbnormalData'
		     		]),

		     	turnPage(pageNum) {
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