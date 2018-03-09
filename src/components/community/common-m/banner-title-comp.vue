<template>
	<div class="title-box">
		<h3 class="title">社区Banner管理</h3>
		<Button class="refresh" type="primary" shape="circle" icon="ios-loop" @click="refresh">刷新</Button>
		<Button class="re-btn" type="primary" shape="circle" icon="ios-trash-outline">批量隐藏</Button>
		<Button class="re-btn01" type="primary" shape="circle" icon="plus">新增</Button>
		<div class="search-and-result">
			<span class="result">全部：
	          <span class="res-num">{{total}}</span>
			</span>
		</div>
	</div>
</template>

<script>
    import {mapGetters, mapActions, mapMutations} from 'vuex'
	export default {
       data() {
       	return {
       		model1:''
       	}
       },

       computed: {
       	...mapGetters('bannerListsData', [
               'total'
       		])
       },
       methods: {
       	...mapActions('bannerListsData', [
               'getBannersListData'
       		]),

       	...mapMutations('bannerListsData', [
               'setPage'
       		]),

       	refresh() {
       	   this.setPage(1)
           this.getBannersListData()
       }
       },
	}
</script>

<style scoped>
	.title-box {
		width:100%;
		min-width:1250px;
		height:118px;
		box-sizing: border-box;
		padding:1px;
		position: relative;
	}
	.title {
		font-size:16px;
		color:#1c24338;
		display: inline-block;
		margin:24px 0 22px 28px;
	}
	.refresh {
		position: absolute;
		width:92px;
		font-size:12px;
		color:#fff;
		bottom:24px;
		left:28px;
	}
	.re-btn {
		position: absolute;
		width:92px;
		font-size:12px;
		color:#fff;
		bottom:24px;
		left:138px;
	}

	.re-btn01 {
		position: absolute;
		width:92px;
		font-size:12px;
		color:#fff;
		bottom:24px;
		left:256px;
	}

	.search-group {
		width:150px;
		margin-top:20px;
		display: block;
		text-align: left;
	}
	.search-and-result {
		position:absolute;
		right:38px;
		bottom:20px;
		text-align: right;
	}
	.result {
		font-size:14px;
		color:#80848f;
	}
	.res-num {
		color:#2b85e4;
	}
</style>