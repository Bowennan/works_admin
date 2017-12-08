<template>
	<div class="title-box01">
		<span class="title">实名认证审核</span>
		<refresh-btn class="refresh"></refresh-btn>
		<div class="num">
			<span style="color:#1c2438">待处理:
              <span style="color:#bbbec4">
              	已处理
              </span>
              <span style="color:#ff890f; font-weight:bold">
              	100
              </span>

              <span style="color:#bbbec4">
              	未处理
              </span>
              <span style="color:#ff890f; font-weight:bold">
              	100
              </span>
			</span>
		</div>
	</div>
</template>

<script>
    import refreshBtn from '@/components/base-comp/refresh-btn'
	export default {
      components: {
      	refreshBtn
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
		font-size:14px;
		color:#fff;
	}
	.num {
		position:absolute;
		right:38px;
		bottom:24px;
	}
</style>