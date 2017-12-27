<template>
	<div class="title-box">
		<span class="titulo">待处理标记用户</span>
		<div class="btns-container">
			<Button type="primary" class="re-btn" shape="circle" icon="ios-loop">刷新</Button>
		</div>
		<div class="result-container">
			<span class="c-gris">待处理被标记用户：
              <span class="c-naranja">
              	{{total}}
              </span>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
       data() {
       	 return {
       	 	total:999
       	 }
       }
	}
</script>