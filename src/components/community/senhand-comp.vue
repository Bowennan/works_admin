<template>
	<div class="tables">
		<senhand-search-comp></senhand-search-comp>
        <senhand-title-comp></senhand-title-comp>
        <senhand-list-comp></senhand-list-comp>

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
    import senhandSearchComp from '@/components/community/senhand-search-comp'
	import senhandTitleComp from '@/components/community/senhand-title-comp'
	import senhandListComp from '@/components/community/senhand-list-comp'

	import {mapActions, mapGetters, mapMutations} from "vuex"
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
                       'page',
                       'sort_field'
		     		])
		     },



		     methods: {
		     	...mapActions('idlesData', [
                        'getIdleData'
		     		]),

		     	...mapMutations('idlesData', [
                        'setPage'
		     		]),

		     	turnPage(pageNum) {
		     		this.setPage(pageNum)
		     		this.getIdleData({
		     			page:pageNum,
		     			limit:this.limitPages,
		     			sort_field: this.sort_field
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getIdleData({
		     			limit: this.limitPages,
		     			sort_field: this.sort_field
		     		})
		     	}
		     },
             components: {
			    senhandSearchComp,
				senhandTitleComp,
				senhandListComp
			  }
	}
</script>