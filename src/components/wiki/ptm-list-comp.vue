<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="header-col01">一级参数名</li>
			<li class="header-col02">二级参数名</li>
			<li class="header-col03">参数单位</li>
			<li class="header-col04">操作</li>
		</ul>

		<ul style="width:100%">
			<li v-for="(item, index) in paras" style="width:100%" :key="index">
					
							<ul class="levels levels-one">
								<li class="header-col01">{{item.name}}</li>
								<li class="header-col02"></li>
								<li class="header-col03"></li>
								<li class="header-col04" style="display:flex">
									<span style="flex:0 0 25%" @click="openPop">添加二级</span>
									<span style="flex:0 0 15%" @click="unaeditor">编辑</span>
									<span style="flex:0 0 15%" @click="removed">删除</span>
									<span style="flex:0 0 30%; line-height:56px; padding-left:30px">
										
										<Icon style="padding:4px; cursor:pointer; transition:250ms linear" :class="{uppered: !item.status}"  size='18' type="arrow-up-b" @click.native="hidden(index)"></Icon>
									</span>
								</li>
							</ul>

							<ul class="levels levels-two" v-for="(items, indexs) in item.bt"  v-show="item.status"  :key="indexs">
								<li class="header-col01"></li>
								<li class="header-col02">{{items.btnanme}}</li>
								<li class="header-col03">{{items.vla}}</li>
								<li class="header-col04" style="display:flex">
									<span style="flex:0 0 25%" @click="doseditor">编辑</span>
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
        <first-level v-if="1 === popNum"></first-level>
        <second-level v-if="2 === popNum"></second-level>
        <removed v-if="3 === popNum"></removed>
        <edit-first v-if="4 === popNum"></edit-first>
        <edit-second v-if="5 === popNum"></edit-second>
      </div>
    </div>

	</div>
</template>

<script>
    import firstLevel from '@/components/pop/first-level-pop'
    import secondLevel from '@/components/pop/second-level-pop'
    import removed from '@/components/pop/removed-pop'
    import editFirst from '@/components/pop/edit-first-pop'
    import editSecond from '@/components/pop/edit-second-pop'
    import {mapGetters, mapMutations} from 'vuex'
    export default {
         data(){
         	return {
         		paras:[
                   {
                   	name:'基本参数',
                   	bt:[
                   	   {
                   	   	btnanme:'品牌',
                   	   	vla:'小米'
                   	   },
                   	   {
                   	   	btnanme:'型号',
                   	   	vla:'hah'
                   	   },
                   	   {
                   	   	btnanme:'价格',
                   	   	vla:'￥56'
                   	   },
                   	],
                   	status:true
                   },
                   {
                   	name:'高级参数',
                   	bt:[
                   	   {
                   	   	btnanme:'长',
                   	   	vla:'200'
                   	   },
                   	   {
                   	   	btnanme:'宽',
                   	   	vla:'100'
                   	   },
                   	   {
                   	   	btnanme:'高',
                   	   	vla:'23'
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
          openPop() {
            this.setPopNum(2)
            this.setPopStatus()
          },
          removed() {
            this.setPopNum(3)
            this.setPopStatus()
          },
          unaeditor() {
            this.setPopNum(4)
            this.setPopStatus()
          },
          doseditor() {
            this.setPopNum(5)
            this.setPopStatus()
          }
         },

         components: {
           firstLevel,
           secondLevel,
           removed,
           editFirst,
           editSecond
         }   
    }
</script>

<style scoped>
  .header-col01 {
  	min-width: 208px;
  	flex:1;
  }
  .header-col02 {
  	min-width: 282px;
  	flex:1;
  }
  .header-col03 {
  	min-width: 286px;
  	flex:1;
  }
  .header-col04 {
  	min-width: 240px;
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

