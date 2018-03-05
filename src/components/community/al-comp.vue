<template>
	<div class="tables">
		<al-search-comp></al-search-comp>
        <al-title-comp></al-title-comp>
        <al-list-comp></al-list-comp>
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
    import alSearchComp from '@/components/community/al-search-comp'
	import alTitleComp from '@/components/community/al-title-comp'
	import alListComp from '@/components/community/al-list-comp'
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
		     	...mapGetters('replysData', [
                       'totalPages'
		     		])
		     },



		     methods: {
		     	...mapActions('replysData', [
                        'getReplyData'
		     		]),

		     	turnPage(pageNum) {
		     		this.getReplyData({
		     			page:pageNum,
		     			limit:this.limitPages,
		     			summary_catalog: 'article'
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getReplyData({
		     			limit: this.limitPages,
		     			summary_catalog: 'article'
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