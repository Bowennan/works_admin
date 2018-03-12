<template>
	<div class="tables">
		<video-search-comp></video-search-comp>
        <video-title-comp></video-title-comp>
        <video-list-comp></video-list-comp>
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
    import videoSearchComp from '@/components/webpage/video-search-comp'
	import videoTitleComp from '@/components/webpage/video-title-comp'
	import videoListComp from '@/components/webpage/video-list-comp'
 	import {mapActions, mapGetters} from "vuex"
    
    const _Ok = 200;
	export default {

		     data() {
		     	return {
		     		pageArray:[5,10,20],
		     		limitPages:10
		     	}
		     },

		     computed: {
		     	...mapGetters('commentsData', [
                       'total',
                       'page',
                       'summary_catalog'
		     		])
		     },



		     methods: {
		     	...mapActions('commentsData', [
                        'getCommentData'
		     		]),

		     	turnPage(pageNum) {
		     		this.getCommentData({
		     			page:pageNum,
		     			limit:this.limitPages,
		     			summary_catalog: this.summary_catalog
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getCommentData({
		     			limit: this.limitPages,
		     			summary_catalog: this.summary_catalog
		     		})
		     	}
		     },
             components: {
			    videoSearchComp,
				videoTitleComp,
				videoListComp
			  }
	}
</script>