<template>
	<div class="um">
		<al-search-comp @searchResult="searchResult"></al-search-comp>
        <al-title-comp></al-title-comp>
        <al-list-comp :replyData="replyData" class="tables"></al-list-comp>
        <Page class="pages" :total="100" show-sizer 
            :page-size-opts="pageArray"
            @on-change="turnPage"
            @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import alSearchComp from '@/components/community/al-search-comp'
	import alTitleComp from '@/components/community/al-title-comp'
	import alListComp from '@/components/community/al-list-comp'
    import {communityReply} from '@/axios/api'
    
    const _OK = 200;
	export default {
            data() {
            	return {
            		replyData:[],
            		totalData:0,
            		pageArray:[10,20,30],
            		limit:10
            	}
            },
            created() {
              this.getReplyData()
            },
		     methods: {
		     	getReplyData(paras) {
		     		communityReply(paras).then(res=>{
		     			if(_OK===res.status){
		     				this.replyData = res.data.replyList.data;
		     				this.totalData = res.data.replyList.total;
		     			}
		     		}).catch(err=>{
		     			console.log(err + "请求失败")
		     		})
		     	},
		     	turnPage(page) {
		     		this.getReplyData({
		     			page: page,
		     			limit: this.limit
		     		})
		     	},
		     	turnPages(pages) {
		     		this.limit = pages;
		     		this.getReplyData({
                       limit: this.limit
		     		})
		     	},
		     	searchResult(paras) {
		     		this.getReplyData(paras)
		     	}
		     },
             components: {
			    alSearchComp,
			    alTitleComp,
			    alListComp
			  }
	}
</script>

<style scoped>
	  .tables {
	  	height: 100%;
	    width:96%;
	    min-width:1052px;
	    margin:0 10px;
	  }
	  .pages {
	  	margin:10px 0 100px 30px;
	  }
</style>