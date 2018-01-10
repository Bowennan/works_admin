<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="header-col01">价格区间</li>
			<li class="header-col02">参数单位</li>
			<li class="header-col03">操作</li>
		</ul>

		<ul style="width:100%">
			<li v-for="(item, index) in paras" style="width:100%" :key="index">
					
							<ul class="levels levels-two">
								<li class="header-col01">{{item.name}}</li>
								<li class="header-col02">{{item.sign}}</li>
								<li class="header-col03" style="display:flex">
									<span style="flex:0 0 25%" @click="priceEdit">编辑</span>
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
        <price-edit></price-edit>
      </div>
    </div>

	</div>
</template>

<script>
    import priceEdit from '@/components/pop/price-edit-pop'
    import {mapGetters, mapMutations} from 'vuex'
    export default {
         data(){
         	return {
         		paras:[
                   {
                   	name:'200以下',
                   	sign:"元"
                   },
                   {
                   	name:'500-800',
                   	sign:"元"
                   },
                   {
                   	name:'1000以上',
                   	sign:"元"
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
          priceEdit() {
            this.setPopStatus()
          }
         },

         components: {
          priceEdit
         }  
    }
</script>

<style scoped>
  .header-col01 {
  	min-width: 480px;
  	flex:1;
  }
  .header-col02 {
  	min-width: 280px;
  	flex:1;
  }
  .header-col03 {
  	min-width: 210px;
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

