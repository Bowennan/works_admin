<template>
	<div class="title-box01">
		<span class="title">待处理标记用户</span>
		<Button type="primary" class="refresh" shape="circle" icon="ios-search">刷新</Button>
		<div class="num">
			<span style="color:#1c2438">待处理被标记用户：
              <span style="color:#ff890f; font-weight:bold">
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

<style scoped>
	.title-box01 {
		width:100%;
		height:118px;
		box-sizing: border-box;
		padding:1px;
		position: relative;
	}
	.title {
		position: absolute;
		top:24px;
		left:28px;
		font-size:16px;
		color:#1c24338;
		font-weight: bold;
	}
	.refresh {
		position: absolute;
		bottom:24px;
		left:28px;
		font-size:12px;
		color:#fff;
		width:92px;
	}
	.num {
		position:absolute;
		right:38px;
		bottom:24px;
	}
</style>