<template>
	<div class="title-box">
		<h3 class="titulo">隐藏好价列表</h3>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop" @click="refresh">刷新</Button>
			<Button class="re-btn" type="primary" shape="circle" icon="ios-trash-outline">批量隐藏</Button>
		</div>
		
		<div class="result-container">
			<span class="c-gris total-result">好价：
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
        ...mapGetters('couponsData',[
              'total'
          ])
       },


       methods: {

        ...mapActions('couponsData',[
             "getabnormalCommunityCoupons",
             "refreshPage"
          ]),

        refresh() {
            this.refreshPage()
            this.getabnormalCommunityCoupons()
            console.log(this.datas)
         }
       }
	}
</script>