<template>
	<div class="title-box">
		<span class="titulo">通用帖子列表</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop">刷新</Button>
		</div>
		<div class="result-container">
			<span class="total-result c-gris">总共文章：
	          <span class="c-naranja">353216</span>
			</span>
			<Select class="order-sel" v-model="order">
		        <Option v-for="item in postingsOrder" :value="item.value" :key="item.value">{{ item.label }}</Option>
		    </Select>
		</div>
	</div>
</template>

<script>
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
       }
	}
</script>