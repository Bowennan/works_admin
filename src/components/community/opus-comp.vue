<template>
	<div class="tables">
		<opus-search-comp></opus-search-comp>
        <opus-title-comp></opus-title-comp>
        <opus-list-comp :opusListData="opusData" class="tables"></opus-list-comp>

        <Page class="pages" :total="totalPages" show-sizer :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import opusSearchComp from '@/components/community/opus-search-comp'
	import opusTitleComp from '@/components/community/opus-title-comp'
	import opusListComp from '@/components/community/opus-list-comp'
	import {communityOpus} from '@/axios/api'
    
    const _Ok = 200;
	export default {

		     data() {
               return {
               	 opusData:[],
               	 totalPages:0,
               	 pageArray:[5,10,20],
               	 limitPages:10
               }
		    },

		    created() {
                this.getOpusData();
		     },

		     methods: {
		     	getOpusData(paras) {
		     		communityOpus(paras).then(res => {
                       if(_Ok === res.status){
                       	this.opusData = res.data.masterPieceList.data;
                       	this.totalPages = res.data.masterPieceList.total;
                       	console.log(this.opusData)
                       }
		     		}).catch(err => {
		     			console.log(err, '请求失败')
		     		})
		     	},
		     	turnPage(pageNum){
		     		this.getOpusData({
		     			page: pageNum,
		     			limit: this.limitPages
		     		})
		     	},
		     	turnPages(pagesNum) {
                    this.limitPages = pagesNum
		     	    this.getOpusData({
		     	    	limit: this.limitPages
		     	    })
		     	},
		     	// searchDown(paras) {
        //            this.getOpusData(paras);
		     	// }
		     },

             components: {
			    opusSearchComp,
			    opusTitleComp,
			    opusListComp
			  }
	}
</script>