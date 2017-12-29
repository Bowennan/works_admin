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
									<span style="flex:0 0 25%">添加二级</span>
									<span style="flex:0 0 15%">编辑</span>
									<span style="flex:0 0 15%">删除</span>
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
									<span style="flex:0 0 25%">编辑</span>
									<span style="flex:0 0 15%">删除</span>
								</li>
							</ul>
				
			</li>
		</ul>

	</div>
</template>

<script>
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

         methods: {
         	hidden(index) {
         		// console.log(index)
         		this.paras[index].status = !this.paras[index].status
         	}
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

