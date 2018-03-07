<template>
	<div class="title-box">
		<h3 class="titulo">通用问题列表</h3>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop" @click="refresh">刷新</Button>
			<Button class="re-btn" type="primary" shape="circle" icon="ios-trash-outline">批量隐藏</Button>
		</div>
		
		<div class="result-container">
			<span class="c-gris total-result">全部问题：
	          <span class="c-naranja">{{total}}</span>
			</span>
			<Select class="order-sel"  v-model="order">
		        <Option v-for="item in questionOrder" :value="item.value" :key="item.value" @click.native="sendOrderType(item.value)">{{ item.label }}</Option>
		    </Select>
		</div>
	</div>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
	export default {
       data() {
       	return {
       		order:"id",
       		questionOrder:[
                 {
                 	label:"降序排列全部",
                 	value:"id"
                 },
                 {
                 	label:"阅读量由高到低",
                 	value:"read_num"
                 },
                 {
                 	label:"评论数由高到低",
                 	value:"comment_num"
                 },
                 {
                 	label:"收藏数由高到低",
                 	value:"collect_num"
                 },
                 {
                 	label:"热度由高到低",
                 	value:"heat"
                 },
                 {
                 	label:"权重由高到低",
                 	value:"weight"
                 },
       		]
       	}
       },

       computed: {
        ...mapGetters('questionsData',[
              'total',
              'sort_field',
              'begin_published_at',
              'end_published_at'
          ])
       },


       methods: {
        ...mapMutations('questionsData',[
               "setSortfield"
            ]),

        ...mapActions('questionsData',[
             "getQuestionsData",
             "refreshPage"
          ]),

        sendOrderType(types) {
            console.log(types)
            this.setSortfield(types)
            this.getQuestionsData({
               page: 1,
               begin_published_at: this.begin_published_at,
               end_published_at: this.end_published_at,
               sort_field: this.sort_field
            })
        },

        refresh() {
            this.refreshPage()
            this.getQuestionsData()
            console.log(this.datas)
         }
       }
	}
</script>