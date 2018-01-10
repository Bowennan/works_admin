<template>
	<div class="title-box">
		<span class="titulo">线下渠道管理</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop">刷新</Button>
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop" @click="addSubLine">新增线下</Button>
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
    import {mapMutations, mapGetters} from 'vuex'
	export default {
       data() {
       	return {
       		
       	}
       },
       computed: {
       	...mapGetters([
                'popNum'
       		])
       },
       methods: {
       	...mapMutations([
       		   'setPopNum',
               'setPopStatus'
       		]),
       	addSubLine() {
       		this.setPopNum(1)
       		this.setPopStatus()
       	}
       }
	}
</script>