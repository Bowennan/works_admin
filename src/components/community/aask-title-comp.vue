<template>
	<div class="title-box">
		<h3 class="titulo">隐藏提问列表</h3>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop" @click="refresh">刷新</Button>
		</div>
		
		<div class="result-container">
			<span class="c-gris total-result">全部提问：
	          <span class="c-naranja">{{total}}</span>
			</span>
		</div>
	</div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'
	export default {
       data() {
       	return {
       		model1:''
       	}
       },

       computed: {
       	...mapGetters('questionsData', [
                'total'
       		])
       },

       methods: {
       	...mapActions('questionsData', [
              'getAbnormalQuestionsData',
              'refreshPage'
       		]),

       	refresh() {
            this.refreshPage()
            this.getAbnormalQuestionsData()
            console.log(this.datas)
         }
       }
	}
</script>