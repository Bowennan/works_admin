<template>
	<div class="title-box">
		<span class="titulo">异常作品列表</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop" @click="refresh">刷新</Button>
		</div>
		<div class="result-container">
			<span class="c-gris total-result">全部作品：
	          <span class="c-naranja">{{total}}</span>
			</span>
		</div>
	</div>
</template>

<script>
    import {mapMutations, mapGetters, mapActions} from 'vuex'
	export default {
       data() {
       	return {
       	}
       },

       computed: {
        ...mapGetters('masterpieceData',[
             'total'
          ])
       },

       methods: {
       	...mapActions('masterpieceData', [
               'refreshPage',
               "getAbnormalMasterpiece"
       		]),

       	refresh() {
       		this.refreshPage(),
       		this.getAbnormalMasterpiece()
       	}
       }
	}
</script>