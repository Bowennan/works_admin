<template>
	<div class="title-box">
		<span class="titulo">通用评论列表</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop" @click="subRefresh">刷新</Button>
			<Button class="re-btn" type="primary" shape="circle" icon="ios-trash-outline">批量隐藏</Button>
		</div>
		<div class="result-container">
			<span class="total-result c-gris">全部评论：
	          <span class="c-naranja">{{total}}</span>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			total: {
				type:Number
			}
		},
       data() {
       	return {
       		model1:''
       	}
       },
       methods: {
       	subRefresh() {
       		this.$emit("refresh")
       	}
       }
	}
</script>