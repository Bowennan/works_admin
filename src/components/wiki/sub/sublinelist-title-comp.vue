<template>
	<div class="title-box">
		<span class="titulo">百科产品管理列表 &gt 产品线下渠道管理</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop">刷新</Button>
			<Button class="re-btn" type="primary" shape="circle" icon="plus" @click="openPop">新增线下</Button>
		</div>
		<div class="result-container">
			<span class="c-gris total-result">总共
	          <span class="c-naranja">9990</span>
			</span><!-- 
			<Select class="order-sel"  v-model="model1">
		        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
		    </Select> -->
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
       	...mapMutations([
               'setPopNum',
               'setPopStatus'
       		]),

       	openPop() {
       	this.setPopNum(1)
       	this.setPopStatus()
       }
       }
	}
</script>