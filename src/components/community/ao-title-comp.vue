<template>
	<div class="title-box">
		<span class="titulo">异常作品列表</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop">刷新</Button>
		</div>
		<div class="result-container">
			<span class="c-gris total-result">全部作品：
	          <span class="c-naranja">1000</span>
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