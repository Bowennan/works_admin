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
									<span style="flex:0 0 25%">排序</span>
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

