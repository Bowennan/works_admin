<template>
	<div class="title-box">
		<span class="titulo">权限用户管理</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop">刷新</Button>
			<Button class="re-btn" type="primary" shape="circle" style="width:120px" icon="plus-round" @click="openPop">新增用户组</Button>
		</div>
		<div class="result-container">
			<span class="c-gris total-result">总共
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