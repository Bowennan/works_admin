<template>
	<div class="title-box">
		<span class="titulo">产品视频管理</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop">刷新</Button>
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop">批量删除</Button>
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop" @click="addVideos">新增视频</Button>
		</div>
		<div class="result-container">
			<span class="c-gris total-result">总共产品
	          <span class="c-naranja">9990</span>
			</span>
		<!-- 	<Select class="order-sel"  v-model="model1">
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
       	addVideos() {
       		this.setPopNum(1)
       		this.setPopStatus()
       	}
       }
	}
</script>