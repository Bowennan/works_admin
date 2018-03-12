<template>
	<div class="search-box">
		<Input class="id-search" v-model="searchVal">
	        <Select v-model="opus_id" slot="prepend" style="width: 80px">
	            <Option value="id">作品ID</Option>
	        </Select>
	        <Button slot="append" icon="search" @click="search"></Button>
	    </Input>

	    <span v-show="status" class="c-naranja" style='position: absolute; bottom: 5px; left: 106px;'>输入正确的作品ID号</span>

		<!--  <div class="range-search">
		 	<div class="conditions-box">
		    	<Select class="conditions-width" v-model="sval">
			        <Option v-for="item in specail" :value="item.value" :key="item.value">{{ item.label }}</Option>
			    </Select>
		    </div>
	
		    <div class="conditions-box">
		    	<Select class="conditions-width" v-model="tval">
			        <Option v-for="item in types" :value="item.value" :key="item.value">{{ item.label }}</Option>
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
		 </div> -->
	 </div>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
	export default {
		data() {
			return {
				dateArr:[],
				searchVal:"",
				opus_id:"id",
				status:false,
				specail: [
                           {
                           	label:"特殊筛选",
                           	value:0
                           },
                           {
                           	label:"签约用户",
                           	value:"用户信息"
                           }
				],
				types: [
                      {
                      	label:"作品类型",
                      	value:0
                      },
                      {
                      	label:"纯图类型",
                      	value:"image"
                      },
                      {
                      	label:"视频类型",
                      	value:'video'
                      }
                     ],
                model:[
                      {
                      	label:"作品所属模块",
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
			...mapGetters('masterpieceData',[
                      "id",
                      'content_type',
			          'begin_published_at',
			          'end_published_at'

				])
		},

		methods: {
		    ...mapActions('masterpieceData', [
                   'getMasterpieceData'
		    	]),
		    ...mapMutations('masterpieceData', [
                     'setId',
                     "setContent",
		             "setBegin",
		             "setEnd",
		             "setPage"
		    	]),

		    setTimeRange(date) {
	          this.dateArr[0] = date[0]
	          this.dateArr[1] = date[1]
	          console.log(this.dateArr)
	         },

			search() {
				if(this.opus_id == "id" && /^[0-9]*$/.test(this.searchVal) && this.searchVal !== '') {
					this.status = false
					this.setId(this.searchVal)
					this.getMasterpieceData({
						id: this.id
					})
				}else {
					this.status = true
					setTimeout(() => {
						this.status = false
					}, 1500)
				}

				this.searchVal = ''
			},


			chiose() {
            this.setPage(1)
            if(this.tval=="image" || this.tval=="video") {
              this.setContent(this.tval)
            }else {
              this.setContent('')
            }
          

             this.setBegin(this.dateArr[0])
             this.setEnd(this.dateArr[1])

             this.getMasterpieceData({
                 content_type: this.content_type,
                 begin_published_at: this.begin_published_at,
                 end_published_at: this.end_published_at
               })
         },
		}
	}
</script>