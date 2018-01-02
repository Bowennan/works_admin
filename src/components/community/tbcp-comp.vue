<template>
	<div class="tables">
		<tbcp-search-comp></tbcp-search-comp>
        <tbcp-title-comp></tbcp-title-comp>
        <tbcp-list-comp :postingListData="postingData" class="tables"></tbcp-list-comp>

        <Page class="pages" :total="totalPages" show-sizer :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import tbcpSearchComp from '@/components/community/tbcp-search-comp'
	import tbcpTitleComp from '@/components/community/tbcp-title-comp'
	import tbcpListComp from '@/components/community/tbcp-list-comp'

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
		     	// searchDown(paras) {
        //            this.getPostingData(paras);
		     	// }
		     },

             components: {
			    tbcpSearchComp,
			    tbcpTitleComp,
			    tbcpListComp
			  }
	}
</script>