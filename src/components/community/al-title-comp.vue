<template>
	<div class="title-box">
		<span class="titulo">通用回答列表</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop">刷新</Button>
			<Button class="re-btn" type="primary" shape="circle" icon="ios-trash-outline">批量隐藏</Button>
		</div>
		
		<div class="result-container">
			<span class="total-result c-gris">全部回答：
	          <span class="c-naranja">{{totalPages}}</span>
			</span>
			<Select class="order-sel" v-model="model1">
		        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
		    </Select>
		</div>
	</div>
</template>

<script>
    import {mapGetters} from 'vuex'
	export default {
       data() {
       	return {
       		model1:''
       	}
       },

       computed: {
       	...mapGetters('replysData', [
               'totalPages'
       		])
       }
	}
</script>