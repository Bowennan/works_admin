<template>
	<div class="tables">
		<al-search-comp></al-search-comp>
        <al-title-comp></al-title-comp>
        <al-list-comp></al-list-comp>
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
    import alSearchComp from '@/components/community/al-search-comp'
	import alTitleComp from '@/components/community/al-title-comp'
	import alListComp from '@/components/community/al-list-comp'
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
		     	...mapGetters('replysData', [
                       'total',
                       'page',
                       'summary_catalog'
		     		])
		     },



		     methods: {
		     	...mapActions('replysData', [
                        'getReplyData'
		     		]),

		     	...mapMutations('replysData', [
                       'setPage'
		     		]),

		     	turnPage(pageNum) {
		     		this.setPage(pageNum)
		     		this.getReplyData({
		     			page:pageNum,
		     			limit:this.limitPages,
		     			summary_catalog: this.summary_catalog
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getReplyData({
		     			limit: this.limitPages,
		     			summary_catalog: this.summary_catalog
		     		})
		     	}
		     },
             components: {
			    alSearchComp,
				alTitleComp,
				alListComp
			  }
	}
</script>