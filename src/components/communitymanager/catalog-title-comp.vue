<template>
	<div class="title-box">
		<span class="titulo">品类社区管理</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop" @click="refresh">刷新</Button>
			<Button class="re-btn" type="primary" shape="circle" icon="plus-round" @click="openPop">新增社区</Button>
		</div>
		<div class="result-container">
			<span class="c-gris total-result">总共社区
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
       	...mapGetters('communitymanagerData', [
                 'total'
       		])
       },

       methods: {
        ...mapActions('communitymanagerData', [
               'communityManager'
        	]),
       	refresh(){
       		this.communityManager({
       			relation_type: 'catalog',
       			page: 1
       		})
       	}
       }
	}
</script>