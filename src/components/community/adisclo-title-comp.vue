<template>
	<div class="title-box">
		<h3 class="titulo">隐藏爆料列表</h3>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop" @click="refresh">刷新</Button>
		</div>
		
		<div class="result-container">
			<span class="c-gris total-result">全部爆料：
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
       	...mapGetters('disclosesData', [
               'total'
       		])
       },

       methods: {

        ...mapActions('disclosesData',[
             "abnormalCommunityDisclose",
             "refreshPage"
          ]),

        refresh() {
            this.refreshPage()
            this.abnormalCommunityDisclose()
            console.log(this.datas)
         }
       }
	}
</script>