<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="header-col01">二级参数名</li>
			<li class="header-col02">参数单位</li>
			<li class="header-col03">排序(越大越前)</li>
			<li class="header-col04">操作</li>
		</ul>

		<ul style="width:100%">
			<li v-for="(item, index) in paras" style="width:100%" :key="index">
					
							<ul class="levels levels-two">
								<li class="header-col01">{{item.name}}</li>
								<li class="header-col02">{{item.sign}}</li>
								<li class="header-col03">{{item.order}}</li>
								<li class="header-col04" style="display:flex">
									<span style="flex:0 0 25%" @click="ordering">排序</span>
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
        <add-second-level v-if="1 === popNum"></add-second-level>
        <order-edit v-if="2 === popNum"></order-edit>
        <removed v-if="3 === popNum"></removed>
      </div>
    </div>

	</div>
</template>

<script>
    import addSecondLevel from '@/components/pop/add-second-level-pop'
    import orderEdit from '@/components/pop/order-edit-pop'
    import removed from '@/components/pop/removed-pop'
    import {mapGetters, mapMutations} from 'vuex'
    export default {
         data(){
         	return {
         		paras:[
                   {
                   	name:'视野范围',
                   	sign:"M²",
                    order:2
                   },
                   {
                   	name:'电流范围',
                   	sign:"A",
                    order:3
                   },
                   {
                   	name:'重量范围',
                   	sign:"KG",
                   	order:2
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
          getWindowsSize() {
            this.coverWidth = window.document.body.offsetWidth;
            this.coverHeight = window.document.body.offsetHeight;
          },
          ...mapMutations([
              'setRouterId',
              'setPopNum',
              'setPopStatus'
          ]),
         	hidden(index) {
         		// console.log(index)
         		this.paras[index].status = !this.paras[index].status
         	},
          ordering() {
            this.setPopNum(2)
            this.setPopStatus()
          },
          removed() {
            this.setPopNum(3)
            this.setPopStatus()
          }
         },

         components: {
            addSecondLevel,
            orderEdit,
            removed
         }   
    }
</script>

<style scoped>
  .header-col01 {
  	min-width: 255px;
  	flex:1;
  }
  .header-col02 {
  	min-width: 270px;
  	flex:1;
  }
  .header-col03 {
  	min-width: 242px;
  	flex:1;
  }
  .header-col04 {
  	min-width: 206px;
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

