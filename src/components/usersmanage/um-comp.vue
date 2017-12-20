<template>
	<div class="um">
		<um-search-comp @findLevel="screenPage"></um-search-comp>
        <um-title-comp :total="totalPages" @refreshData="refreshData"></um-title-comp>
        <table-comp :userlistData="userlistData" class="tables"></table-comp>
        <Page class="pages" :total="totalPages" show-sizer :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>

    import umSearchComp from '@/components/usersmanage/um-search-comp'
	import umTitleComp from '@/components/usersmanage/um-title-comp'
	import tableComp from '@/components/usersmanage/table-comp'
	import {userManage} from '@/axios/api'

    const _Ok = 200;
	export default {
		     data() {
		     	return {
		     		userlistData:[],
		     		totalPages:0,
		     		pageArray:[10,20,30],
		     		limitNum:10

		     	}
		     },
		     created() {
               this.getData()
		     },
		     methods: {
                 getData(para) {
                 	userManage(para).then(res =>{
	               	if(_Ok===res.status) {
	               		console.log(res);
	               		let data = res.data.userList;
	               		this.userlistData = data.data;
	               		this.totalPages = data.total;
	               	}
	               }).catch(err =>{
	               	console.log(err,'请求失败')
	               })
	           },
                screenPage(condition) {
                   console.log(condition);
                   this.getData({
                   	level: condition
                   })
                },
		     	turnPage(pageNum){
                   this.getData({
                   	page: pageNum,
                   	limit: this.limitNum
                   })
		     	},
		     	turnPages(pagesNum) {
		     		this.limitNum = pagesNum
		     	    this.getData({
		     	    	limit: this.limitNum
		     	    })
		     	},
		     	refreshData() {
		     		this.userlistData = []
		     		this.getData();
		     	}
		     },
             components: {
			    umSearchComp,
			    umTitleComp,
			    tableComp
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