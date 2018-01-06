<template>
	<div class="tables">
		<disclo-search-comp></disclo-search-comp>
        <disclo-title-comp></disclo-title-comp>
        <disclo-list-comp :discolesListData="discolesData" class="tables"></disclo-list-comp>

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
    import discloSearchComp from '@/components/community/disclo-search-comp'
	import discloTitleComp from '@/components/community/disclo-title-comp'
	import discloListComp from '@/components/community/disclo-list-comp'

	import {communityDisclose} from '@/axios/api'
    
    const _Ok = 200;
	export default {
		     data() {
		     	return {
                  discolesData:[],
                  totalPages:0,
                  pageArray:[5,10,20],
                  limitPages:10
		     	}
		     },

		     created() {
		     	this.getDiscloseData();
		     },

		     methods: {
		     	getDiscloseData(paras) {
		     		communityDisclose(paras).then(res => {
		     			if(_Ok === res.status) {
		     				this.discolesData = res.data.discloseList.data;
		     				this.totalPages = res.data.discloseList.total;
		     				console.log(this.discolesData)
		     			}
		     		}).catch(err => {
		     			console.log(err, '请求失败')
		     		})
		     	},
                

                turnPage(pageNum) {
		     		this.getDiscloseData({
		     			page:pageNum,
		     			limit:this.limitPages
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getDiscloseData({
		     			limit: this.limitPages
		     		})
		     	}

		     },

             components: {
			    discloSearchComp,
			    discloTitleComp,
			    discloListComp
			  }
	}
</script>