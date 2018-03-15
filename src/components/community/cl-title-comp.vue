<template>
	<div class="title-box">
		<span class="titulo">通用评论列表</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop" @click="refresh">刷新</Button>
			<Button class="re-btn" type="primary" shape="circle" icon="ios-trash-outline">批量隐藏</Button>
		</div>
		<div class="result-container">
			<span class="total-result c-gris">评论数量：
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
              'getCommentData'
          ]),

       	refresh() {
       		this.refreshPage()
          this.getCommentData({
              summary_catalog: this.summary_catalog
          });
       	}
       }
	}
</script>