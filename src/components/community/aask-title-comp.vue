<template>
	<div class="title-box">
		<h3 class="titulo">异常提问列表</h3>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop">刷新</Button>
		</div>
		
		<div class="result-container">
			<span class="c-gris total-result">全部提问：
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