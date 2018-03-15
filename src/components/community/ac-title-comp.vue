<template>
	<div class="title-box">
		<h3 class="titulo">异常通用评论列表</h3>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop" @click="refresh">刷新</Button>
		</div>
		
		<div class="result-container">
			<span class="c-gris">异常评论数量：
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
       	...mapGetters('commentsData', [
                 'total',
                 'summary_catalog'
       		])
       },

       methods: {
       	...mapActions('commentsData', [
       		   'refreshPage',
               'abnormalCommunityComment'
       		]),
       	
       	refresh() {
       		 this.refreshPage()
            this.abnormalCommunityComment({
            	summary_catalog: this.summary_catalog
            })
       	}
       }
	}
</script>