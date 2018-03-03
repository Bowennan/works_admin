<template>
	<div class="tables">
		<senhand-search-comp></senhand-search-comp>
        <senhand-title-comp></senhand-title-comp>
        <senhand-list-comp></senhand-list-comp>

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
    import senhandSearchComp from '@/components/community/senhand-search-comp'
	import senhandTitleComp from '@/components/community/senhand-title-comp'
	import senhandListComp from '@/components/community/senhand-list-comp'

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
                        'getIdleData'
		     		]),

		     	turnPage(pageNum) {
		     		this.getIdleData({
		     			page:pageNum,
		     			limit:this.limitPages
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getIdleData({
		     			limit: this.limitPages
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