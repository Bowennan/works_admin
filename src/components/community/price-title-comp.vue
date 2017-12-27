<template>
	<div class="title-box">
		<h3 class="titulo">通用好价列表</h3>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop">刷新</Button>
			<Button class="re-btn" type="primary" shape="circle" icon="ios-trash-outline">批量隐藏</Button>
		</div>
		
		<div class="result-container">
			<span class="c-gris total-result">全部提问：
	          <span class="c-naranja">1000</span>
			</span>
			<Select class="order-sel"  v-model="model1">
		        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
		    </Select>
		</div>
	</div>
</template>

<script>

	export default {
       data() {
       	return {
       		model1:''
       	}
       }
	}
</script>