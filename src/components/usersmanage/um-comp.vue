<template>
	<div class="um">
		<um-search-comp @findLevel="screenPage"></um-search-comp>
        <um-title-comp @refreshData="getData"></um-title-comp>
        <table-comp :userlistData="userlistData" class="tables"></table-comp>
        <Page class="pages" :total="totalPages" show-sizer
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
		     		currentPage:0

		     	}
		     },
		     created() {
               userManage().then(res =>{
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
		     methods: {
                 getData() {
                 	userManage().then(res =>{
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
                   userManage({
                   	level: condition
                   }).then(res =>{
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
		     	turnPage(pageNum){
                   userManage({
                   	 page:pageNum
                   }).then(res =>{
	               	if(_Ok===res.status) {
	               		// console.log(res);
	               		let data = res.data.userList;
	               		this.userlistData = data.data;
	               		this.totalPages = data.total;
	               	}
	               }).catch(err =>{
	               	console.log(err,'请求失败')
	               })
		     	},
		     	turnPages(pagesNum) {
		     		userManage({
                   	 limit:pagesNum
                   }).then(res =>{
	               	if(_Ok===res.status) {
	               		// console.log(res);
	               		let data = res.data.userList;
	               		this.userlistData = data.data;
	               		this.totalPages = data.total;
	               	}
	               }).catch(err =>{
	               	console.log(err,'请求失败')
	               })
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