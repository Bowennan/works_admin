<template>
	<div class="title-box">
		<span class="titulo">内容举报监控</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop">刷新</Button>
		</div>
		<div class="result-container">
			<span class="c-gris total-result">待处理
	          <span class="c-rojo">4545</span>
			</span>
			<span class="c-gris total-result">总共产品
	          <span class="c-naranja">9990</span>
			</span>
		</div>
	</div>
</template>

<script>
    import {mapMutations} from 'vuex'
	export default {
       data() {
       	return {
       		model1:''
       	}
       },

       methods: {
       	...mapMutations({
       		setPopStatus: 'setPopStatus',
       		setPopNum: 'setPopNum'
       	}),

       	openPop() {
       		this.setPopNum(1)
       		this.setPopStatus()
       	}
       }
	}
</script>