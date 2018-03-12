<template>
	<div class="title-box">
		<span class="titulo">首页帖子列表</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop" @click="refresh">刷新</Button>
			<Button class="re-btn" type="primary" shape="circle" icon="ios-trash-outline">批量隐藏</Button>
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
               'summary_catalog',
               'page'
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
              page: this.page,
              summary_catalog: this.summary_catalog
          });
       	}
       }
	}
</script>