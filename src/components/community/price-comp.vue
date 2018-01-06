
<template>
	<div class="tables">
		<price-search-comp></price-search-comp>
        <price-title-comp></price-title-comp>
        <price-list-comp :couponsListData="couponsData" class="tables"></price-list-comp>

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
    import priceSearchComp from '@/components/community/price-search-comp'
	import priceTitleComp from '@/components/community/price-title-comp'
	import priceListComp from '@/components/community/price-list-comp'

	import {communityCoupons} from '@/axios/api'
    
    const _Ok = 200;
	export default {
		     data() {
		     	return {
		     		couponsData:[],
		     		totalPages:0,
		     		pageArray:[5,10,20],
		     		limitPages:10
		     	}
		     },

		     created() {
		     	this.getCouponsData();
		     },

		     methods: {
		     	getCouponsData(paras) {
		     		communityCoupons(paras).then(res => {
		     			if(_Ok === res.status) {
		     				this.couponsData = res.data.couponsList.data;
		     				this.totalPages = res.data.couponsList.total;
		     				console.log(this.couponsData)
		     			}
		     		}).catch(err => {
		     			console.log(err, '请求失败')
		     		})
		     	},
                
                turnPage(pageNum) {
		     		this.getCouponsData({
		     			page:pageNum,
		     			limit:this.limitPages
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getCouponsData({
		     			limit: this.limitPages
		     		})
		     	}

		     },
             components: {
			    priceSearchComp,
			    priceTitleComp,
			    priceListComp
			  }
	}
</script>