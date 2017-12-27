<template>
	<div class="title-box">
		<h3 class="titulo">待审核评论列表</h3>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop">刷新</Button>
			<Button class="re-btn" type="primary" shape="circle" icon="ios-trash-outline">批量不通</Button>
		    <Button class="re-btn" type="primary" shape="circle" icon="ios-trash-outline">批量通过</Button>
		</div>
		
		<div class="result-container">
			<span class="c-gris">全部：
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