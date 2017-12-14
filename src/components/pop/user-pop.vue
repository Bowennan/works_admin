<template>
	<div style="width:100%; background:#fff;">
		<h3 
		class="pop-box-header">
			用户资料
			<Icon type="close-round" class="pop-box-close"></Icon>
	        <span class="pop-box-close" @click="closeUserWindow"></span>
		</h3>

		    <Tabs :value="outter">
		        <TabPane label="社交账号" name="name1">
		        	<div style="height:300px; width:100%; position:relative"> 
		        		<span class="item-title">社交账号信息</span>
		        		<div class="top01">
			        		<p>手机已绑定： <span class="font-color">12146321654314</span></p>
				        	<p>邮箱： <span class="font-color">暂未绑定</span></p>
				        	<p>其他账号：
                               <p>
                               	微信    <span>暂未绑定</span>
                               </p>
                               <p>
                               	微博    <span>暂未绑定</span>
                               </p>
                               <p>
                               	QQ    <span>暂未绑定</span>
                               </p>
				        	</p>
			        	</div>
	                    <div class="bottom-box-small">
	                    	<p class="btn-group">
	                    		<Button type="ghost"  class="btn-size" style="border:1px solid #80848f" @click="closeUserWindow">取消</Button>
	                    	</p>
	                    </div>
		        	</div>
		        </TabPane>
		        <TabPane label="自媒体" name="name2">
		        	<div style="height:300px; width:100%; position:relative">
		        		<span class="item-title">自媒体账号信息</span>
			        	<div  class="top01" style="height:114px">
			        		<p>
				        		微信公众号：
									<span class="font-color">13212123211</span>
				        	
				        	</p>
				        	<p>
				        		微博主页：
									<span class="font-color">xxxx</span>
				        	</p>
				        	<p>
				        	今日头条：
									<span class="font-color">XXX</span>
				        	</p>
			        	</div>
                        


						<div class="bottom-box-small">

	                    	<p class="btn-group">
	                    		<Button type="ghost"  class="btn-size" style="border:1px solid #80848f" @click="closeUserWindow">取消</Button>
	                    	</p>
	                    </div>
		        	</div>
		        </TabPane>
		        <TabPane label="实名认证" name="name3">
		        	<div style="height:420px; width:100%; position:relative">
		        		<span class="item-title">实名认证信息</span>
			        	<div class="top01">
			        		<p>真实姓名：
									<span class="font-color">121321</span>
				        		

				        	</p>
				        	<p>
				        		身份证号码：
									<span class="font-color">1214124542415</span>
				        		

				        	</p>
				        	<p>
				        		联系电话：
									<span class="font-color" >121344873</span>
				        		

				        	</p>
				        	
			        	</div>
                        
                        <span class="item-title">身份证照</span>
                        <div class="img-container">
                        	<div class="img-box" v-for="item in 3">
                        		<img src="../../assets/001.jpg" alt="">
                        		<span>点击查看大图</span>
                        		<div class="opacity-box">
                        			<Icon class="eyes" type="ios-eye"></Icon>
                        		</div>
                        	</div>
                        </div>
						<div class="bottom-box-small">
	                    	<p class="btn-group">
	                    		<Button type="ghost"  class="btn-size" style="border:1px solid #80848f" @click="closeUserWindow">取消</Button>
	                    	</p>
	                    </div>
		        	</div>
		        </TabPane>
		        <TabPane label="收货地址" name="name4">
		        	<div style="height:480px; width:100%; position:relative">

			        	<span class="item-title">收货地址1</span>
			        	<div class="top01" style="height:150px;">
			        		<p>
				        		姓名：
									<span class="font-color">安达市</span>
				        		

				        	</p>
				        	<p>
				        		手机号码：
									<span class="font-color">22124556565</span>
				        		
				        	</p>
				        	<p>
				        		所在地区：
									<span class="font-color">广东省 深圳市 南山区 玉海街道</span>
				        	
				        	</p>
				        	<p>
				        		详细地址：
									<span class="font-color">独立房间昆仑山大家JKL的就是考虑加分</span>
				        	
				        	</p>
				        	
			        	</div>

			        	<span class="item-title">收货地址2</span>
			        	<div class="top01" style="height:150px;">
			        		<p>
				        		姓名：
									<span class="font-color">安达市</span>
				        		

				        	</p>
				        	<p>
				        		手机号码：
									<span class="font-color">22124556565</span>
				        		
				        	</p>
				        	<p>
				        		所在地区：
									<span class="font-color">广东省 深圳市 南山区 玉海街道</span>
				        	
				        	</p>
				        	<p>
				        		详细地址：
									<span class="font-color">独立房间昆仑山大家JKL的就是考虑加分</span>
				        	
				        	</p>
				        	
			        	</div>

						<div class="bottom-box-small">
	                    	<p class="btn-group">
	                    		<Button type="ghost"  class="btn-size" style="border:1px solid #80848f" @click="closeUserWindow">取消</Button>
	                    	</p>
	                    </div>
		        	</div>
		        </TabPane>
		    </Tabs>
	</div>
</template>

<script>
	export default {
		data() {
          return {
          	model11:'啊哈哈',
          	value: 'djfkd',
          	parentHeight:'',
          	model1:'',
          	single:''
          }
		},
		props: {
			outter: {
				type:String,
				default: "name1"
			}
		},
       methods: {
       	closeUserWindow() {
           this.$emit("closeUserWindow")

       	}
       }
	}
</script>

<style scoped>
    .h310 {
    	height: 310px;
    }
    .h806 {
    	height: 806px;
    }
	.top01 {
		width:100%;
		height:133px;
		display: flex;
		flex-direction: column;
	}

	.top01 > p {
		padding:8px;
		flex:1;
		color:#bbbec4;
	}

	.font-color {
		color:#495060;
	}
	.btn-group {
		margin-top:16px;
		margin-left:12px;
	}
	.btn-size {
		width:90px;
		height: 36px;
		margin-right: 20px;
		background: #fff;
	}
	.sub-btn {
		width:90px;
		height: 30px;

	}

	.img-container > div {
		position: relative;
		display: inline-block;
		width:96px;
		height: 68px;
		text-align: center;
		margin-right: 20px;
	}
	.opacity-box {
		width:96px;
		height: 68px;
		position: absolute;
		top:0;
		left:0;
		background: transparent;
		opacity: 0;
		cursor: pointer;
	}
    .img-container > div img{
       display:block;
       width:96px;
       height: 68px;
       border:1px solid #ccc;
    }
    .img-container > div span {
    	display: block;
    	font-size:12px;
    	font-weight: 400;
    	padding:5px 0;
    }
    .eyes {
    	position: absolute;
    	left:50%;
    	top:50%;
    	transform: translate(-50%,-50%);
    	font-size:20px;
    }
    .opacity-box:hover {
    	background: #ccc;
    	opacity: 0.8;
    }
</style>