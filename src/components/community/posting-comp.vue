<template>
	<div class="tables">
		<posting-search-comp  @searchResult="searchDown"></posting-search-comp>
        <posting-title-comp></posting-title-comp>
        <posting-list-comp :postingListData="postingData" class="tables"></posting-list-comp>

        <Page class="pages" :total="totalPages" show-sizer :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import postingSearchComp from '@/components/community/posting-search-comp'
	import postingTitleComp from '@/components/community/posting-title-comp'
	import postingListComp from '@/components/community/posting-list-comp'
    import {communityPosting} from '@/axios/api'

    const _Ok = 200;
	export default {
		    data() {
               return {
               	 postingData:[],
               	 totalPages:0,
               	 pageArray:[5,10,20],
               	 limitPages:10
               }
		    },

		     created() {
                this.getPostingData();
		     },
		     methods: {
		     	getPostingData(paras) {
		     		communityPosting(paras).then(res => {
                       if(_Ok === res.status){
                       	this.postingData = res.data.articleList.data;
                       	this.totalPages = res.data.articleList.total;
                       	console.log(this.postingData)
                       }
		     		}).catch(err => {
		     			console.log(err, '请求失败')
		     		})
		     	},
		     	turnPage(pageNum){
		     		this.getPostingData({
		     			page: pageNum,
		     			limit: this.limitPages
		     		})
		     	},
		     	turnPages(pagesNum) {
                    this.limitPages = pagesNum
		     	    this.getPostingData({
		     	    	limit: this.limitPages
		     	    })
		     	},
		     	searchDown(paras) {
                   this.getPostingData(paras);
		     	}
		     },
             components: {
			    postingSearchComp,
			    postingTitleComp,
			    postingListComp
			  }
	}
</script>