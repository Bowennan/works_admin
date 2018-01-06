<template>
	<div class="tables">
		<senhand-search-comp></senhand-search-comp>
        <senhand-title-comp></senhand-title-comp>
        <senhand-list-comp :idleListData="idleData" class="tables"></senhand-list-comp>

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
    import senhandSearchComp from '@/components/community/senhand-search-comp'
	import senhandTitleComp from '@/components/community/senhand-title-comp'
	import senhandListComp from '@/components/community/senhand-list-comp'

	import {communityIdle} from '@/axios/api'
    
    const _Ok = 200;
	export default {
		     data() {
		     	return {
		     		idleData:[],
		     		totalPages:0,
		     		pageArray:[5,10,20],
		     		limitPages:10
		     	}
		     },

		     created() {
		     	this.getIdleData();
		     },

		     methods: {
		     	getIdleData(paras) {
                   communityIdle(paras).then(res => {
                   	if(_Ok=== res.status) {
                   		this.idleData = res.data.idleList.data;
                   		this.totalPages = res.data.idleList.total;
                   		console.log(this.idleData)
                   	}
                   }).catch(err => {
                   	console.log(err, '请求失败')
                   })
		     	},
                
                turnPage(pageNum) {
		     		this.getIdleData({
		     			page:pageNum,
		     			limit:this.limitPages
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getIdleData({
		     			limit: this.limitPages
		     		})
		     	}

		     },
		     
             components: {
			    senhandSearchComp,
			    senhandTitleComp,
			    senhandListComp
			  }
	}
</script>