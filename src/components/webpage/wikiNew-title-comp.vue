<template>
	<div class="title-box">
		<span class="titulo">首页百科新品展示</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop">刷新</Button>
                  <Button class="re-btn" type="primary" shape="circle" icon="ios-trash-outline">批量隐藏</Button>
                  <Button class="re-btn" type="primary" shape="circle" icon="plus">新增</Button>
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