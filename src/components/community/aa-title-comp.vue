<template>
	<div class="title-box">
		<h3 class="titulo">异常回答列表</h3>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop" @click="refresh">刷新</Button>

		</div>
		
		<div class="result-container">
			<span class="c-gris">全部：
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
       	...mapGetters('replysData', [
               'total',
               'summary_catalog',
               'page'
       		])
       },

       methods: {
        ...mapActions('replysData', [
              'refreshPage',
              'abnormalCommunityReply'
          ]),

       	refresh() {
       	  this.refreshPage()
          this.abnormalCommunityReply({
              page: this.page,
              summary_catalog: this.summary_catalog
          });
       	}
       }
	}
</script>