<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="header-col01">一级品类</li>
			<li class="header-col02">二级品类</li>
			<li class="header-col03">品类ID</li>
			<li class="header-col04">产品数量</li>
			<li class="header-col05">操作</li>
		</ul>

		<ul style="width:100%">
			<li v-for="(item, index) in paras" style="width:100%" :key="index">
					
							<ul class="levels levels-one">
								<li class="header-col01">{{item.name}}</li>
								<li class="header-col02"></li>
								<li class="header-col03">{{item.id}}</li>
								<li class="header-col04"></li>
								<li class="header-col05" style="display:flex">
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
								<li class="header-col02">{{items.name}}</li>
								<li class="header-col03">{{items.id}}</li>
								<li class="header-col04">关联产品：{{items.conn}}</li>
								<li class="header-col05" style="display:flex">
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
                   	name:"虚拟现实",
                   	id:5,
                   	bt:[
                   	   {
                   	   	name:"VR眼镜",
                   	   	id:6,
                   	   	conn:15
                   	   },
                   	   {
                        name:"Vr相机",
                        id:12,
                        conn:2
                       },
                   	   {
                        name:"VR手表",
                        id:7,
                        conn:10
                       },
                   	],
                   	status:true
                   },
                   {
                   	name:"汽车用品",
                   	id:8,
                   	bt:[
                   	   {
                   	   	name:"行车记录仪",
                   	   	id:9,
                   	   	conn:12
                   	   },
                   	   {
                   	   	name:"车载净化器",
                   	   	id:8,
                   	   	conn: 65
                   	   },
                   	   {
                   	   	name:"智能终端",
                   	   	id:54,
                   	   	conn:58
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

