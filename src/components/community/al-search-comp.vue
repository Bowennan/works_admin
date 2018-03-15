<template>
  <div class="search-box">

          <Input class="id-search" v-model="searchVal" @on-enter="search">
              <Select v-model="searchType" slot="prepend" style="width: 80px">
                  <Option value="id">回答ID</Option>
              </Select>
              <Button slot="append" icon="search" @click="search"></Button>
          </Input>

          <span v-show="status" class="c-naranja" style='position: absolute; bottom: 5px; left: 106px;'>输入正确回答ID号</span>

    <div class="range-search">
      
      <div class="conditions-box">
            <Select class="conditions-width" v-model="commentType">
                <Option v-for="item in selectorList" :value="item.value" :key="item.value">{{ item.label}}</Option>
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
  import {mapMutations,  mapActions, mapGetters} from "vuex"

  export default {
       data() {
        return {
          status: false,
          dateArr:[],
          searchVal: '',
          searchType: 'id',
          commentType:'article',
          selectorList:[
          {
            label:"帖子回复",
            value:'article'
          },
          {
            label:"作品回复",
            value:'masterpiece'
          },
          {
            label:"装备秀回复",
            value:'exhibition'
          },
          {
            label:"好价回复",
            value:'coupons'
          },
          {
            label:"二手回复",
            value:'idle'
          },
          {
            label:"爆料回复",
            value:'disclose'
          }
          ]
        }
       },

       computed: {
        ...mapGetters('replysData', [
             'summary_catalog',
             'id',
             'begin_created_at',
             'end_created_at'
          ])
       },

       methods: {
          ...mapActions('replysData', [
                'getReplyData'
            ]),
          ...mapMutations('replysData', [
                'setSummarycatalog',
                'setId',
                'setBegin',
                'setEnd',
                'setPage'
            ]),

          setTimeRange(date) {
            this.dateArr[0] = date[0]
            this.dateArr[1] = date[1]
            console.log(this.dateArr)
           },

          search() {
              if(this.searchType == "id" && /^[0-9]*$/.test(this.searchVal) && this.searchVal !== '' ){
              this.status = false
              this.setId(this.searchVal)
              this.getReplyData({
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

          chiose() {
              this.setPage(1)
              this.setBegin(this.dateArr[0])
              this.setEnd(this.dateArr[1])
              this.setSummarycatalog(this.commentType)
              this.getReplyData({
                summary_catalog: this.summary_catalog,
                begin_created_at: this.begin_created_at,
                end_created_at: this.end_created_at
              })
          }
       }

  }
</script>