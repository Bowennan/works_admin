<template>
	<div class="title-box">
		<span class="titulo">待审核帖子列表</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop" @click="refresh">刷新</Button>
		</div>
		<!-- <div class="result-container">
			<span class="c-gris total-result">共
	          <span class="c-naranja">1000</span>人被筛选
			</span>
			<Select class="order-sel"  v-model="model1">
		        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
		    </Select>
		</div> -->
	</div>
</template>

<script>
    import {mapActions} from 'vuex'
	export default {
       methods: {
       	...mapActions('postingData', [
             "getPostingReviewData"
          ]),

       	refresh() {
            this.getPostingReviewData()
         }
       }
	}
</script>