<template>
	<div class="title-box">
		<span class="titulo">通用回答列表</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop" @click="refresh">刷新</Button>
			<Button class="re-btn" type="primary" shape="circle" icon="ios-trash-outline">批量隐藏</Button>
		</div>
		
		<div class="result-container">
			<span class="total-result c-gris">回答数量：
	          <span class="c-naranja">{{total}}</span>
			</span>
			<!-- <Select class="order-sel" v-model="model1">
		        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
		    </Select> -->
		</div>
	</div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
	export default {
       data() {
       	return {
       	}
       },

       computed: {
       	...mapGetters('replysData', [
               'total',
               'summary_catalog'
       		])
       },

       methods: {
        ...mapActions('replysData', [
              'refreshPage',
              'getReplyData'
          ]),

       	refresh() {
       	  this.refreshPage()
          this.getReplyData({
              summary_catalog: this.summary_catalog
          });
       	}
       }
	}
</script>