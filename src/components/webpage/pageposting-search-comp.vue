<template>
	<div class="search-box">

          <Input class="id-search" v-model="searchVal">
              <Select v-model="searchType" slot="prepend" style="width: 80px">
                  <Option value="id">评论ID</Option>
              </Select>
              <Button slot="append" icon="search" @click="search"></Button>
          </Input>

          <span v-show="status" class="c-naranja" style='position: absolute; bottom: 5px; left: 106px;'>输入正确ID号</span>

		<div class="range-search">
      
			<div class="conditions-box">
				    <Select class="conditions-width" v-model="commentType">
				        <Option v-for="item in selectorList" :value="item.value" :key="item.value">{{ item.label}}</Option>
				    </Select>
			</div>
		</div>
	</div>
</template>

<script>
  import {mapMutations,  mapActions, mapGetters} from "vuex"

	export default {
       data() {
       	return {
          status: false,
          searchVal: '',
          searchType: 'id',
       		commentType:'article',
       		selectorList:[
   				{
   					label:"帖子评论",
   					value:'article'
   				},
   				{
   					label:"作品评论",
   					value:'masterpiece'
   				},
   				{
   					label:"装备秀评论",
   					value:'exhibition'
   				},
   				{
   					label:"好价评论",
   					value:'coupons'
   				},
   				{
   					label:"二手评论",
   					value:'idle'
   				},
   				{
   					label:"爆料评论",
   					value:'disclose'
   				}
       		]
       	}
       },

       computed: {
        ...mapGetters('commentsData', [
             'summary_catalog',
             'id'
          ])
       },

       methods: {
          ...mapActions('commentsData', [
                'getCommentData'
            ]),
          ...mapMutations('commentsData', [
                'setSummarycatalog',
                'setId'
            ]),
          search() {
              if(this.searchType == "id" && /^[0-9]*$/.test(this.searchVal) && this.searchVal !== '' ){
              this.status = false
              this.setId(this.searchVal)
              this.getCommentData({
                 id: this.id,
                 summary_catalog: this.summary_catalog
               })
            }else {
              this.status = true
              setTimeout(()=>{
                this.status = false
              },1500)
            }

             this.searchVal=''
          },

          changeType() {
              console.log(this.commentType)
              this.setSummarycatalog(this.commentType)
              this.getCommentData({
                summary_catalog: this.summary_catalog
              })
          }
       }

	}
</script>