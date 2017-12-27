<template>
	<div class="title-box">
		<span class="titulo">待处理新用户</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop">刷新</Button>
		</div>
		<div class="result-container">
			<span class="c-gris">待处理新用户：
              <span class="c-naranja">
              	{{newUser}}
              </span>
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return{
				newUser:999
			}
		}
	}
</script>
