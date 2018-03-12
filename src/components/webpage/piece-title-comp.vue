<template>
	<div class="title-box">
		<span class="titulo">首页作品列表</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop" @click="refresh">刷新</Button>
      <Button class="re-btn" type="primary" shape="circle" icon="ios-loop" @click="refresh">刷新</Button>
		</div>
	</div>
</template>

<script>
    import {mapMutations, mapGetters, mapActions} from 'vuex'
	export default {
       data() {
       	return {
       		order:"id",
       		opusOrder:[
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
        ...mapGetters('masterpieceData',[
             'total',
             'sort_field',
              'content_type',
              'begin_published_at',
              'end_published_at'
          ])
       },


       methods: {
        ...mapMutations('masterpieceData',[
               "setSortfield"
            ]),

        ...mapActions('masterpieceData',[
             "getMasterpieceData",
             "refreshPage"
          ]),

        sendOrderType(types) {
            console.log(types)
            this.setSortfield(types)
            this.getMasterpieceData({
               page: 1,
               content_type: this.content_type,
               begin_published_at: this.begin_published_at,
               end_published_at: this.end_published_at,
               sort_field: this.sort_field
            })
        },

        refresh() {
            this.refreshPage()
            this.getMasterpieceData()
            console.log(this.datas)
         }
       }
	}
</script>