<template>
	<div class="search-box">
	
			    <Input class="id-search" v-model="searchVal">
			        <Select v-model="searchType" slot="prepend" style="width: 80px">
			            <Option value="title">帖子</Option>
			            <Option value="id">ID</Option>
			        </Select>
			        <Button slot="append" icon="search" @click="search"></Button>
			    </Input>

          <span v-show="status" class="c-naranja" style='position: absolute; bottom: 5px; left: 106px;'>输入正确ID号或标题关键字</span>
		

		<div class="range-search">
			<div class="conditions-box">
				<Select class="conditions-width" v-model="sval">
			        <Option v-for="item in specail" :value="item.value" :key="item.value">{{ item.label }}</Option>
			   </Select>
			</div>

			<div class="conditions-box">
				    <Select class="conditions-width" v-model="tval">
				        <Option v-for="item in types" :value="item.value" :key="item.value" :disabled="item.value<0">{{ item.label }}</Option>
				    </Select>
			</div>

			<div class="conditions-box">
				    <Select class="conditions-width" v-model="mval">
				        <Option v-for="item in model" :value="item.value" :key="item.value">{{ item.label }}</Option>
				    </Select>
			</div>

			<div class="conditions-box">
				 <DatePicker type="daterange" placement="bottom-end" placeholder="用户注册时间区间选择" style="width: 200px" @on-change="setTimeRange"></DatePicker>
			</div>

			<div class="conditions-box">
				<Button type="primary" class="confirm-group" @click="chiose">确认筛选</Button>
			</div>
		</div>
	</div>
</template>

<script>
  import {mapMutations, mapGetters, mapActions} from "vuex"
	export default {
       data() {
       	return {
          status:false,
          dateArr:[],
       		searchVal: '',
          searchType: 'id',
       		specail:[
                      {
                      	label:"特殊筛选",
                      	value:0
                      },
                      {
                      	label:"签约用户",
                      	value:'用户信息'
                      }
       		],
       		types:[
                      {
                      	label:"帖子种类",
                      	value:0
                      },
                      {
                      	label:"--帖子分类--",
                      	value:-1
                      },
                      {
                      	label:"测评帖子",
                      	value:'evaluate'
                      },
                      {
                      	label:"攻略帖子",
                      	value:'strategy'
                      },
                      {
                      	label:"资讯帖子",
                      	value:'message'
                      },
                      {
                      	label:"体验帖子",
                      	value:'experience'
                      },
                      {
                      	label:"--帖子类型--",
                      	value:-2
                      },
                      {
                      	label:"纯图帖子",
                      	value:'image'
                      },
                      {
                      	label:"视频帖子",
                      	value:'video'
                      },
                      {
                      	label:"图文帖子",
                      	value:'mix'
                      }
       		],
       		model:[
                      {
                      	label:"帖子所属模块",
                      	value:0
                      },
                      {
                      	label:"已有社区",
                      	value:'1'
                      },
                      {
                      	label:"实验室",
                      	value:'2'
                      },
                      {
                      	label:"其他",
                      	value:'3'
                      }
       		],
       		sval:0,
       		tval:0,
       		mval:0
       	}
       },
       computed: {
        ...mapGetters('postingsData', [
          'id',
          'title',
          'content_type',
          'article_type',
          'begin_published_at',
          'end_published_at'
          ])
       },
       methods: {
         ...mapMutations('postingsData', [
             "setId",
             "setTitle",
             "setContent",
             "setArticle",
             "setBegin",
             "setEnd",
             "setPage"
          ]),
         ...mapActions('postingsData',[
           'getPostingData'
          ]),
       	 search() {
       	 	  if(this.searchType == "id" && /^[0-9]*$/.test(this.searchVal) && this.searchVal !== '' ){
              this.status = false
              this.setId(this.searchVal)
              this.getPostingData({
                 id: this.id
               })
            }else if(this.searchType == "title" && this.searchVal !== ''){
              this.status = false
              this.setTitle(this.searchVal)
              this.getPostingData({
                 title: this.title
               })
            }else {
              this.status = true
              setTimeout(()=>{
                this.status = false
              },1500)
            }

             this.searchVal=''

             
       	  },

         chiose() {
            this.setPage(1)
            if(this.tval=="evaluate" || this.tval=="experience" || this.tval=="strategy" || this.tval=="message") {
              this.setArticle(this.tval)
              this.setContent('')
            }else if (this.tval==0) {
              this.setArticle('')
              this.setContent('')
            }else {
              this.setContent(this.tval)
              this.setArticle('')
            }
          

             this.setBegin(this.dateArr[0])
             this.setEnd(this.dateArr[1])

             this.getPostingData({
                 content_type: this.content_type,
                 article_type: this.article_type,
                 begin_published_at: this.begin_published_at,
                 end_published_at: this.end_published_at
               })
         },
         
         setTimeRange(date) {
          this.dateArr[0] = date[0]
          this.dateArr[1] = date[1]
          console.log(this.dateArr)
         }
       }

	}
</script>