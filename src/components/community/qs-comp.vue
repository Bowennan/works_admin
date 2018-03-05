<template>
	<div class="tables">
		<qs-search-comp></qs-search-comp>
        <qs-title-comp></qs-title-comp>
        <qs-list-comp></qs-list-comp>

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
    import qsSearchComp from '@/components/community/qs-search-comp'
	import qsTitleComp from '@/components/community/qs-title-comp'
	import qsListComp from '@/components/community/qs-list-comp'

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
		     	...mapGetters('exhibitionsData', [
                       'totalPages'
		     		])
		     },



		     methods: {
		     	...mapActions('exhibitionsData', [
                        'getQsData'
		     		]),

		     	turnPage(pageNum) {
		     		this.getQsData({
		     			page:pageNum,
		     			limit:this.limitPages
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getQsData({
		     			limit: this.limitPages
		     		})
		     	}
		     },
             components: {
			    qsSearchComp,
				qsTitleComp,
				qsListComp
			  }
	}
</script>