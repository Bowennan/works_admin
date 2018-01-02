<template>
	<div class="tables">
		<cl-search-comp></cl-search-comp>
        <cl-title-comp :total="totalPages" @refresh="refreshed"></cl-title-comp>
        <cl-list-comp :commentData="commentData" class="tables"></cl-list-comp>
        <Page class="pages" :total="totalPages" show-sizer :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import clSearchComp from '@/components/community/cl-search-comp'
	import clTitleComp from '@/components/community/cl-title-comp'
	import clListComp from '@/components/community/cl-list-comp'
    import {communityComments} from '@/axios/api'

    const _OK = 200;
	export default {
		     data() {
		     	return{
		     		commentData:[],
		     		limitPages:10,
		     		totalPages:0,
		     		pageArray:[10,20,30]
		     	}
		     },
		     created() {
                this.getCommentsData();
		     },
		     methods: {
		     	getCommentsData(paras) {
                    communityComments(paras).then(res=>{
                    	if(_OK===res.status) {
                    		console.log(res.data)
                    		this.commentData = res.data.List.data;
                    		this.totalPages = res.data.List.total;
                    	}
                    }).catch(err=>{
                    	console.log(err + '请求错误')
                    })
		     	},
		     	turnPage(pageNum){
		     		this.getCommentsData({
		     			page: pageNum,
		     			limit: this.limitPages
		     		})
		     	},
		     	turnPages(pagesNum) {
                    this.limitPages = pagesNum
		     	    this.getCommentsData({
		     	    	limit: this.limitPages
		     	    })
		     	},
		     	refreshed() {
		     		this.commentData = []
		     		this.getCommentsData();
		     	}
		     },
             components: {
			    clSearchComp,
			    clTitleComp,
			    clListComp
			  }
	}
</script>