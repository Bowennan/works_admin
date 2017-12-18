<template>
	<div class="title-box">
		<h3 class="title">待审核爆料列表</h3>
		<Button type="primary" class="refresh" shape="circle" icon="ios-loop">刷新</Button>
		<Button type="primary" class="disappeared" shape="circle" icon="ios-trash-outline">批量不通</Button>
		<Button type="primary" class="passed" shape="circle" icon="ios-trash-outline">批量通过</Button>
		<div class="search-and-result">
			<span class="result">待审核爆料：
	          <span class="res-num">1000</span>
			</span>
			<Select class="search-group" v-model="model1">
		        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
		    </Select>
		</div>
	</div>
</template>

<script>
	export default {
       data() {
       	return {
       		model1:''
       	}
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
		font-size:12px;
		color:#fff;
		bottom:24px;
		left:28px;
	}
	.disappeared {
		position: absolute;
		width:92px;
		font-size:12px;
		color:#fff;
		bottom:24px;
		left:138px;
	}
	.passed {
		position: absolute;
		width:92px;
		font-size:12px;
		color:#fff;
		bottom:24px;
		left:248px;
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