<template>
	<div class="tables">
		<qs-search-comp></qs-search-comp>
        <qs-title-comp></qs-title-comp>
        <qs-list-comp :qshowListData="qshowData" class="tables"></qs-list-comp>

        <Page class="pages"
              :total="totalPages"
              show-sizer
              :page-size-opts="pageArray"
              @on-change = "turnPage"
              @on-page-size-change = "turnPages"
        ></Page>
	</div>
</template>

<script>
    import qsSearchComp from '@/components/community/qs-search-comp'
	import qsTitleComp from '@/components/community/qs-title-comp'
	import qsListComp from '@/components/community/qs-list-comp'

	import {communityQshow} from '@/axios/api'
    
    const _Ok = 200;
	export default {

		     data() {
               return {
		     		qshowData:[],
		     		totalPages:0,
		     		pageArray:[5,10,20],
		     		limitPages:10
		     	}
		     },

		     created() {
		     	this.getQshowData();
		     },

		     methods: {
		     	getQshowData(paras) {
		     		communityQshow(paras).then(res => {
		     			if(_Ok === res.status) {
		     				this.qshowData = res.data.exhibitionList.data;
		               		this.totalPages = res.data.exhibitionList.total;
		               		console.log(this.qshowData)
		     			}
		     		}).catch(err => {
		     			console.log(err, '请求失败')
		     		})
		     	},

		     	turnPage(pageNum) {
		     		this.getQshowData({
		     			page:pageNum,
		     			limit:this.limitPages
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getQshowData({
		     			limit: this.limitPages
		     		})
		     	}


		     },

             components: {
			    qsSearchComp,
			    qsTitleComp,
			    qsListComp
			  }
	}
</script>