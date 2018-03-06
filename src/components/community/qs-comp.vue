<template>
	<div class="tables">
		<qs-search-comp></qs-search-comp>
        <qs-title-comp></qs-title-comp>
        <qs-list-comp></qs-list-comp>

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
    import qsSearchComp from '@/components/community/qs-search-comp'
	import qsTitleComp from '@/components/community/qs-title-comp'
	import qsListComp from '@/components/community/qs-list-comp'

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
		     	...mapGetters('exhibitionsData', [
                       'total',
                       'page',
                       'sort_field'
		     		])
		     },



		     methods: {
		     	...mapActions('exhibitionsData', [
                        'getQsData'
		     		]),
		     	...mapMutations('exhibitionsData', [
                       'setPage'
		     		]),

		     	turnPage(pageNum) {
		     		this.setPage(pageNum)
		     		this.getQsData({
		     			page:pageNum,
		     			limit:this.limitPages,
		     			sort_field: this.sort_field
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getQsData({
		     			limit: this.limitPages,
		     			sort_field: this.sort_field
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