<template>
	<div class="title-box">
		<span class="titulo">隐藏帖子列表</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop">刷新</Button>
		</div>
		<div class="result-container">
			<span class="c-gris total-result">共
	          <span class="c-naranja">1000</span>帖子
			</span>
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