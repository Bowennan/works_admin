<template>
	<div class="title-box">
		<h3 class="title">通用评论管理</h3>
		<refresh-btn class="refresh"></refresh-btn>
		<Button class="display-btn" type="primary" shape="circle" icon="ios-trash-outline">批量隐藏</Button>
		<div class="search-and-result">
			<span class="result">全部：
	          <span class="res-num">1000</span>
			</span>
			<Select class="search-group" v-model="model1">
		        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
		    </Select>
		</div>
	</div>
</template>

<script>
    import refreshBtn from '@/components/base-comp/refresh-btn'
	export default {
       data() {
       	return {
       		model1:''
       	}
       },
       components: {
       	refreshBtn
       }
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
		font-size:14px;
		color:#fff;
		bottom:24px;
		left:28px;
	}
	.display-btn {
		position: absolute;
		width:92px;
		font-size:12px;
		color:#fff;
		bottom:24px;
		left:150px;
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
		top:50%;
		transform: translateY(-50%);
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