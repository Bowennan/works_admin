<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="header-col01">二级参数名</li>
			<li class="header-col02">数值</li>
			<li class="header-col03">参数单位</li>
			<li class="header-col04">参数类型</li>
			<li class="header-col05">操作</li>
		</ul>

		<ul style="width:100%">
			<li v-for="(item, index) in paras" style="width:100%" :key="index">
					
							<ul class="levels levels-one">
								<li class="header-col01">{{item.name}}</li>
								<li class="header-col02"></li>
								<li class="header-col03">{{item.sign}}</li>
								<li class="header-col04">参数类型</li>
								<li class="header-col05" style="display:flex">
									<span style="flex:0 0 25%" @click="addVal">添加数值</span>
									<span style="flex:0 0 15%" @click="removed">删除</span>
									<span style="flex:0 0 30%; line-height:56px; padding-left:30px">
										
										<Icon style="padding:4px; cursor:pointer; transition:250ms linear" :class="{uppered: !item.status}"  size='18' type="arrow-up-b" @click.native="hidden(index)"></Icon>
									</span>
								</li>
							</ul>

							<ul class="levels levels-two" v-for="(items, indexs) in item.bt"  v-show="item.status"  :key="indexs">
								<li class="header-col01"></li>
								<li class="header-col02">{{items.fanwei}}</li>
								<li class="header-col03">{{items.sign}}</li>
								<li class="header-col04">{{items.type}}</li>
								<li class="header-col05" style="display:flex">
									<span style="flex:0 0 25%" @click="editVal">编辑</span>
									<span style="flex:0 0 15%" @click="removed">删除</span>
								</li>
							</ul>
				
			</li>
		</ul>

    <!-- 弹窗 -->
    <div class="cover-style"
         v-show='popStatus' 
         :style="{width:coverWidth + 'px', height:coverHeight + 'px'}"
    >
      <div class="pop-wrapper">
        <high-second-level v-if="1 === popNum"></high-second-level>
        <value-range v-if="2 === popNum"></value-range>
        <removed v-if="3 === popNum"></removed>
        <edit-range v-if="4 === popNum"></edit-range>
      </div>
    </div>

	</div>
</template>

<script>
    import highSecondLevel from '@/components/pop/high-second-level-pop'
    import valueRange from '@/components/pop/value-range-pop'
    import removed from '@/components/pop/removed-pop'
    import editRange from '@/components/pop/edit-range-pop'
    import {mapGetters, mapMutations} from 'vuex'
    export default {
         data(){
         	return {
         		paras:[
                   {
                   	name:"可视范围",
                   	sign:"M²",
                   	bt:[
                   	   {
                   	   	fanwei:"300-100",
                   	   	sign:"M²",
                   	   	type:"范围值"
                   	   },
                   	   {
                   	   	fanwei:"400-200",
                   	   	sign:"M²",
                   	   	type:"范围值"
                   	   },
                   	   {
                   	   	fanwei:"600-300",
                   	   	sign:"M²",
                   	   	type:"范围值"
                   	   }
                   	],
                   	status:true
                   },
                   {
                   	name:"电流范围",
                   	sign:"A",
                   	bt:[
                   	   {
                   	   	fanwei:"50-20",
                   	   	sign:"A",
                   	   	type:"电流值"
                   	   },
                   	   {
                   	   	fanwei:"60-10",
                   	   	sign:"A",
                   	   	type:"电流值"
                   	   },
                   	   {
                   	   	fanwei:"100-30",
                   	   	sign:"A",
                   	   	type:"电流值"
                   	   },
                   	],
                   	status:true
                   }
         		]
         	}
         },

         computed: {
          ...mapGetters([
                'popStatus',
                'popNum'
            ])
         },

         created() {
           this.getWindowsSize()
         },

         methods: {
          ...mapMutations([
              'setRouterId',
              'setPopNum',
              'setPopStatus'
          ]),
          getWindowsSize() {
            this.coverWidth = window.document.body.offsetWidth;
            this.coverHeight = window.document.body.offsetHeight;
          },
         	hidden(index) {
         		// console.log(index)
         		this.paras[index].status = !this.paras[index].status
         	},
          addVal() {
            this.setPopNum(2)
            this.setPopStatus()
          },
          removed() {
            this.setPopNum(3)
            this.setPopStatus()
          },
          editVal() {
            this.setPopNum(4)
            this.setPopStatus()
          }
         },

         components: {
          highSecondLevel,
          valueRange,
          removed,
          editRange
         }   
    }
</script>

<style scoped>
  .header-col01 {
  	min-width: 184px;
  	flex:1;
  }
  .header-col02 {
  	min-width: 190px;
  	flex:1;
  }
  .header-col03 {
  	min-width: 154px;
  	flex:1;
  }
  .header-col04 {
  	min-width: 208px;
  	flex:1;
  }
  .header-col05 {
  	min-width: 238px;
  	flex:1;
  }
  .levels li {
     box-sizing: border-box;
     padding:0 18px;
     color:#80848f;
  }
  .levels-one {
  	width:100%;
  	height: 56px;
  	line-height: 56px;
  	background:#fbfbfb;
  	display: flex;
  	border-top:1px solid #e9eaec;
  }


  .levels-two {
     width:100%;
     height: 56px;
     line-height: 56px;
     background: #fff;
     display: flex;
     border-bottom:1px solid #e9eaec;
  }

  .uppered {
  	transform: rotate(-180deg);
  }
</style>

