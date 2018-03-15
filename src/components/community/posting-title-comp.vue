<template>
	<div class="title-box">
		<span class="titulo">通用帖子列表</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop" @click="refresh">刷新</Button>
		</div>
		<div class="result-container">
			<span class="total-result c-gris">帖子数量：
	          <span class="c-naranja">{{total}}</span>
			</span>
			<Select class="order-sel" v-model="order">
		        <Option v-for="item in postingsOrder" :value="item.value" :key="item.value" @click.native="sendOrderType(item.value)">{{ item.label }}</Option>
		    </Select>
		</div>
	</div>
</template>

<script>
  import {mapMutations, mapGetters, mapActions} from 'vuex'
	export default {
       data() {
       	return {
       		order:"id",
       		postingsOrder:[
                 {
                 	label:"降序排列全部",
                 	value:"id"
                 },
                 {
                 	label:"总阅读量由高到低",
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
        ...mapGetters('postingsData',[
              'total',
              'sort_field',
              'content_type',
              'article_type',
              'begin_published_at',
              'end_published_at'
          ])
       },

       methods: {
        ...mapMutations('postingsData',[
               "setSortfield"
            ]),

        ...mapActions('postingsData',[
             "getPostingData",
             "refreshPage"
          ]),

        sendOrderType(types) {
            console.log(types)
            this.setSortfield(types)
            this.getPostingData({
               page: 1,
               content_type: this.content_type,
               article_type: this.article_type,
               begin_published_at: this.begin_published_at,
               end_published_at: this.end_published_at,
               sort_field: this.sort_field
            })
        },

        refresh() {
            this.refreshPage()
            this.getPostingData()
            console.log(this.datas)
         }
       }
	}
</script>