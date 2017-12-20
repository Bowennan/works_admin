<template>
	<div class="title-box01">
		<span class="title">自媒体信息审核</span>
		<Button class="refresh" type="primary" shape="circle" icon="ios-loop">刷新</Button>
		<div class="num">
			<span style="color:#1c2438">自媒体信息审核:
              <span style="color:#bbbec4">
              	已处理
              </span>
              <span style="color:#ff890f; font-weight:bold">
              	100
              </span>

              <span style="color:#bbbec4">
              	未处理
              </span>
              <span style="color:#f00; font-weight:bold">
              	100
              </span>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
     
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