<template>
	<div class="title-box">
		<h3 class="title">通用帖子列表</h3>
		<refresh-btn class="refresh"></refresh-btn>
		<div class="search-and-result">
			<span class="result">总共文章：
	          <span class="res-num">353216</span>
			</span>
			<Select class="search-group" v-model="order">
		        <Option v-for="item in postingsOrder" :value="item.value" :key="item.value">{{ item.label }}</Option>
		    </Select>
		</div>
	</div>
</template>

<script>
    import refreshBtn from '@/components/base-comp/refresh-btn'
	export default {
       data() {
       	return {
       		order:0,
       		postingsOrder:[
                 {
                 	label:"降序排列全部",
                 	value:0
                 },
                 {
                 	label:"文章日浏览量由高到低",
                 	value:2
                 },
                 {
                 	label:"文章浏览量由高到低",
                 	value:3
                 },
                 {
                 	label:"举报数由高到低",
                 	value:4
                 },
                 {
                 	label:"评论数由高到低",
                 	value:5
                 },
                 {
                 	label:"收获喜欢由高到低",
                 	value:6
                 },
                 {
                 	label:"热度由高到低",
                 	value:7
                 },
                 {
                 	label:"权重由高到低",
                 	value:8
                 },
       		]
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
	.search-group {
		width:200px;
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