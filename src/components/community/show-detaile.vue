<template>
	<div class="show-detaile">
			<div class="de-font">
				<p>
					将进酒
					君不见长江之水天上来
					奔流到海不复回
					君不见高堂明镜悲白发
					朝如青丝暮成雪
					天生我才必有用
					千金散尽还复来
					烹羊在羊且为乐
					会须一饮三百杯
				</p>
			</div>
			<div class="de-img">
				
				
					<Tooltip class="tips" content="点击看大图" placement="bottom" @on-popper-show="imgOpacity" @on-popper-hide="reverseImgOpacity">
			           <img width="200px" :style="{opacity: opacityNum}" src="../../assets/001.jpg" alt="">
			    	</Tooltip>
			    	
			
			</div>
			<div class="de-action">
				<Icon type="chevron-left" class="drection"></Icon>
				<Icon type="chevron-right" class="drection"></Icon>
                 <div class="operator">
                 					<span>审核|
					                   <Radio class="value-font" v-model="single">通过</Radio>
					                    <Radio class="value-font" v-model="single">不通过</Radio>
									</span>

									<span style="margin:0 10px 0 30px">热门评论|
					                  <span class="value-font">是</span>
									</span>

									<span>评论状态|
					                  <span class="value-font">正常</span>
									</span>
                 </div>
			</div>
		</div>
</template>

<script>
	export default {
              data() {
			       	  return {
			       	  	state: 0,
			       	  	single:'',
			       	  	opacityNum:1
			       	  }
			       },
	       methods: {
	       	imgOpacity() {
	       		this.opacityNum = 0.3
	       	},
	        reverseImgOpacity() {
	        	this.opacityNum = 1
	        }
	       }
	}
</script>

<style scoped>
	
	.show-detaile {
			width:100%;
			min-height: 330px;
			border:1px solid #ccc;
			margin-bottom:10px;
			position: relative;
			box-sizing: border-box;
			padding:10px;
		}
		.de-action {
	       position: absolute;
	       bottom:0px;
	       left:0px;
	       width:100%;
	       height: 30px;
	       line-height: 30px;
	       font-size: 12px;
	       background: #f8f8f9;
	       box-sizing: border-box;
	       padding:0 20px;
	       color:#bbbec4;
		}
		.drection {
			display: inline-block;
			padding:5px;
			cursor:pointer;
			font-weight: bold;
			margin:0 10px;
			color:#495060;
		}
		.operator {
			position: absolute;
			right:20px;
			top:0;
		}
		.value-font {
			color:#80848f;
		}
		.de-font {
			width:100%;
			margin-bottom:12px;
		}
		.de-img {
			width:100%;
			margin-bottom: 40px;
		}
		.de-img img {
			border:5px solid #ccc;
		}
		.tips {
			margin-right: 20px;
			margin-top:6px;
		}
</style>