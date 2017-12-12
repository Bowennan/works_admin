<template>
	<div style="width:100%; background:#fff;">
		<h3 
		class="pop-box-header">
			用户权限设置
			<Icon type="close-round" class="pop-box-close"></Icon>
	        <span class="pop-box-close" @click="closeWindow"></span>
		</h3>

		    <Tabs value="name1">
		        <TabPane label="账号信息设置" name="name1">
		        	<div style="height:310px; width:100%; position:relative"> 
		        		<div class="top01">
			        		<p>等级： <span class="font-color">6级</span></p>
				        	<p>积分： <span class="font-color">1231322131</span> <span style="color:#2d8cf0">设置</span></p>
				        	<p>信用：<input type="text" class="font-color"> <span>取消</span></p>
			        	</div>
	                    <div class="bottom-box" style="bottom:10px;">
	                    	<p class="btn-group">
	                    		<Select v-model="model1" style="width:200px">
							        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
							    </Select>
							    <Button type="primary" class="sub-btn">发送认证码</Button>
	                    	</p>
	                    	<p class="btn-group">
	                    		<Input v-model="value" placeholder="Enter something..." style="width: 200px"></Input>
	                    		<Button type="primary" class="sub-btn">认证</Button>
	                    	</p>
	                    	<p class="btn-group">
	                    		<Button type="ghost"  class="btn-size" style="border:1px solid #80848f" @click="closeWindow">取消</Button>
	                    		<Button type="primary" class="btn-size" >确认违规</Button>
	                    	</p>
	                    </div>
		        	</div>
		        </TabPane>
		        <TabPane label="品牌官方" name="name2">
		        	<div style="height:720px; width:100%; position:relative">
		        		<span class="item-title">品牌官方基本信息(<span>已认证</span>)</span>
			        	<div class="item-box" style="height:114px">
			        		<p class="items-con">
				        		<span><span class="item-name">申请姓名：</span>
									<Input size="small" v-model="value" placeholder="Enter something..." style="width:124px"></Input>
				        		</span>
				        		<span><span class="item-name">联系电话：</span>
									<Input size="small" v-model="value" placeholder="Enter something..." style="width:124px"></Input>
				        		</span>

				        	</p>
				        	<p class="items-con">
				        		<span><span class="item-name">行业：</span>
									<Input size="small" v-model="value" placeholder="Enter something..." style="width:124px"></Input>
				        		</span>
				        		<span><span class="item-name">岗位：</span>
									<Input size="small" v-model="value" placeholder="Enter something..." style="width:124px"></Input>
				        		</span>
				        	</p>
				        	<p class="items-con">
				        		<span><span class="item-name">产品品牌：</span>
									<Input size="small" v-model="value" placeholder="Enter something..." style="width:124px"></Input>
				        		</span>
				        	</p>
			        	</div>

			        	<span class="item-title">关联产品</span>
			        	<div class="item-box" style="height:114px;">
			        		<p class="items-con">
				        		<span><span class="item-name">产品1：</span>
									<Input size="small" v-model="value" placeholder="Enter something..." style="width:72px"></Input>
				        		</span>
				        		<span><span class="item-name">已关联ID:</span>
									<Input size="small" v-model="value" placeholder="Enter something..." style="width:72px"></Input>
									<span style="margin-left:56px">添加</span>
				        		</span>

				        	</p>
				        	<p class="items-con">
				        		<span><span class="item-name">产品2：</span>
									<span>XSXX</span>
				        		</span>
				        		<span><span class="item-name">已关联ID：</span>
									<span>点击跳转该产品列表</span>
									<span style="margin-left:20px">修改</span>
				        		</span>
				        	</p>
				        	<p class="items-con">
				        		<span><span class="item-name">产品3：</span>
									<Input size="small" v-model="value" placeholder="Enter something..." style="width:72px"></Input>
				        		</span>
				        		<span><span class="item-name">已关联ID：</span>
									<Input size="small" v-model="value" placeholder="Enter something..." style="width:72px"></Input>
									<span style="margin-left:56px;">取消</span>
				        		</span>
				        	</p>
			        	</div>
                        
                        <span class="item-title">发送信息</span>
			        	<div class="textarea-box" style="width:451px">
						  <textarea class="re-text">的垃圾分厘卡</textarea>
	                      <div class="text-select">
						  	<Select v-model="model1" style="width:130px">
						        <Option v-for="item in 5" :value="item" :key="item">{{ item}}</Option>
						    </Select>
						  </div>
						</div>

						<div class="bottom-box" style="bottom:10px;">
	                    	<p class="btn-group">
	                    		<Select v-model="model1" style="width:200px">
							        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
							    </Select>
							    <Button type="primary" class="sub-btn">发送认证码</Button>
	                    	</p>
	                    	<p class="btn-group">
	                    		<Input v-model="value" placeholder="Enter something..." style="width: 200px"></Input>
	                    		<Button type="primary" class="sub-btn">认证</Button>
	                    	</p>
	                    	<p class="btn-group">
	                    		<Button type="ghost"  class="btn-size" style="border:1px solid #80848f" @click="closeWindow">取消</Button>
	                    		<Button type="primary" class="btn-size" >确认违规</Button>
	                    	</p>
	                    </div>
		        	</div>
		        </TabPane>
		        <TabPane label="体验官" name="name3">
		        	<div style="height:720px; width:100%; position:relative">
		        		<span class="item-title">体验官擅长领域最多3项(<span>已认证</span>)</span>
			        	<div class="item-box" style="height:114px">
			        		<Checkbox v-model="single" v-for="item in 14" style="margin-bottom:10px; margin-right:16px;" :key="item">Checkbox</Checkbox>
			        	</div>

			        	<span class="item-title">代表作品</span>
			        	<div class="item-box" style="height:114px;">
			        		<p class="items-con">
				        		<span><span class="item-name">产品1：</span>
									<span>作品1点击新建页面跳转</span>
									<span style="margin-left:68px">删除</span>
				        		</span>

				        	</p>
				        	<p class="items-con">
				        		<span><span class="item-name">产品2：</span>
									<span>作品2点击新建页面跳转</span>
									<span style="margin-left:68px">删除</span>
				        		</span>

				        	</p>
				        	<p class="items-con">
				        		<span><span class="item-name">产品3：</span>
									<Input size="small" v-model="value" placeholder="Enter something..." style="width:138px"></Input>
									<span style="margin-left:56px">添加</span>
				        		</span>

				        	</p>
				        	
			        	</div>
                        
                        <span class="item-title">发送信息</span>
			        	<div class="textarea-box" style="width:451px">
						  <textarea class="re-text">的垃圾分厘卡</textarea>
	                      <div class="text-select">
						  	<Select v-model="model1" style="width:130px">
						        <Option v-for="item in 5" :value="item" :key="item">{{ item}}</Option>
						    </Select>
						  </div>
						</div>

						<div class="bottom-box" style="bottom:10px;">
	                    	<p class="btn-group">
	                    		<Select v-model="model1" style="width:200px">
							        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
							    </Select>
							    <Button type="primary" class="sub-btn">发送认证码</Button>
	                    	</p>
	                    	<p class="btn-group">
	                    		<Input v-model="value" placeholder="Enter something..." style="width: 200px"></Input>
	                    		<Button type="primary" class="sub-btn">认证</Button>
	                    	</p>
	                    	<p class="btn-group">
	                    		<Button type="ghost"  class="btn-size" style="border:1px solid #80848f" @click="closeWindow">取消</Button>
	                    		<Button type="primary" class="btn-size" >确认违规</Button>
	                    	</p>
	                    </div>
		        	</div>
		        </TabPane>
		        <TabPane label="达人" name="name4">
		        	<div style="height:550px; width:100%; position:relative">

			        	<span class="item-title">达人基本信息(<span>已认证</span>)</span>
			        	<div class="item-box" style="height:114px;">
			        		<p class="items-con">
				        		<span><span class="item-name">真实姓名：</span>
									<Input size="small" v-model="value" placeholder="Enter something..." style="width:138px"></Input>
				        		</span>

				        	</p>
				        	<p class="items-con">
				        		<span><span class="item-name">个人职位：</span>
									<Input size="small" v-model="value" placeholder="Enter something..." style="width:138px"></Input>
				        		</span>

				        	</p>
				        	
			        	</div>
                        
                        <span class="item-title">发送信息</span>
			        	<div class="textarea-box" style="width:451px">
						  <textarea class="re-text">的垃圾分厘卡</textarea>
	                      <div class="text-select">
						  	<Select v-model="model1" style="width:130px">
						        <Option v-for="item in 5" :value="item" :key="item">{{ item}}</Option>
						    </Select>
						  </div>
						</div>

						<div class="bottom-box" style="bottom:10px;">
	                    	<p class="btn-group">
	                    		<Select v-model="model1" style="width:200px">
							        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
							    </Select>
							    <Button type="primary" class="sub-btn">发送认证码</Button>
	                    	</p>
	                    	<p class="btn-group">
	                    		<Input v-model="value" placeholder="Enter something..." style="width: 200px"></Input>
	                    		<Button type="primary" class="sub-btn">认证</Button>
	                    	</p>
	                    	<p class="btn-group">
	                    		<Button type="ghost"  class="btn-size" style="border:1px solid #80848f" @click="closeWindow">取消</Button>
	                    		<Button type="primary" class="btn-size" >确认违规</Button>
	                    	</p>
	                    </div>
		        	</div>
		        </TabPane>
		        <TabPane label="社区管理员" name="name5">
		        	<div style="height:550px; width:100%; position:relative">

			        	<span class="item-title">社区管理员管理社区(<span>已认证</span>)</span>
			        	<div class="item-box" style="height:114px;">
			        		<p class="items-con">已管理社区：</p>
			        		<p class="items-con">
				        		<span><span class="item-name">无人机社区</span>
									<span style="margin-left:80px;">删除</span>
				        		</span>

				        	</p>
				        	<p class="items-con">
				        		<span><span class="item-name">小米社区</span>
									<span style="margin-left:80px;">删除</span>
				        		</span>

				        	</p>

				        	<p class="items-con">
				        		<span>
				        			<Select v-model="model1" style="width:200px" size="small">
								        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
								    </Select>
									<span>确认添加</span>
				        		</span>

				        	</p>
				        	
			        	</div>
                        
                        <span class="item-title">发送信息</span>
			        	<div class="textarea-box" style="width:451px">
						  <textarea class="re-text">的垃圾分厘卡</textarea>
	                      <div class="text-select">
						  	<Select v-model="model1" style="width:130px">
						        <Option v-for="item in 5" :value="item" :key="item">{{ item}}</Option>
						    </Select>
						  </div>
						</div>

						<div class="bottom-box" style="bottom:10px;">
	                    	<p class="btn-group">
	                    		<Select v-model="model1" style="width:200px">
							        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
							    </Select>
							    <Button type="primary" class="sub-btn">发送认证码</Button>
	                    	</p>
	                    	<p class="btn-group">
	                    		<Input v-model="value" placeholder="Enter something..." style="width: 200px"></Input>
	                    		<Button type="primary" class="sub-btn">认证</Button>
	                    	</p>
	                    	<p class="btn-group">
	                    		<Button type="ghost"  class="btn-size" style="border:1px solid #80848f" @click="closeWindow">取消</Button>
	                    		<Button type="primary" class="btn-size" >确认违规</Button>
	                    	</p>
	                    </div>
		        	</div>
		        </TabPane>
		        <TabPane label="棒客官方" name="name6">
		        	<div style="height:550px; width:100%; position:relative">

			        	<span class="item-title">棒客官方人员身份(<span>已认证</span>)</span>
			        	<div class="item-box" style="height:114px;">
			        		<p class="items-con">
				        		<span><span class="item-name">真实姓名：</span>
									<Input size="small" v-model="value" placeholder="Enter something..." style="width:138px"></Input>
				        		</span>

				        	</p>
				        	<p class="items-con">
				        		<span><span class="item-name">个人职位：</span>
									<Input size="small" v-model="value" placeholder="Enter something..." style="width:138px"></Input>
				        		</span>

				        	</p>
				        	
			        	</div>
                        
                        <span class="item-title">发送信息</span>
			        	<div class="textarea-box" style="width:451px">
						  <textarea class="re-text">的垃圾分厘卡</textarea>
	                      <div class="text-select">
						  	<Select v-model="model1" style="width:130px">
						        <Option v-for="item in 5" :value="item" :key="item">{{ item}}</Option>
						    </Select>
						  </div>
						</div>

						<div class="bottom-box" style="bottom:10px;">
	                    	<p class="btn-group">
	                    		<Select v-model="model1" style="width:200px">
							        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
							    </Select>
							    <Button type="primary" class="sub-btn">发送认证码</Button>
	                    	</p>
	                    	<p class="btn-group">
	                    		<Input v-model="value" placeholder="Enter something..." style="width: 200px"></Input>
	                    		<Button type="primary" class="sub-btn">认证</Button>
	                    	</p>
	                    	<p class="btn-group">
	                    		<Button type="ghost"  class="btn-size" style="border:1px solid #80848f" @click="closeWindow">取消</Button>
	                    		<Button type="primary" class="btn-size" >确认违规</Button>
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
       methods: {
       	closeWindow() {
           this.$emit("closeAuthorityWindow")

       	},
       	change310() {
       		this.parentHeight = 'h310'
       	},
       	change806() {
       		this.parentHeight = 'h806'
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

	.top01 p {
		padding:12px;
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
	}
	.sub-btn {
		width:90px;
		height: 30px;
	}
    .ivu-tabs-bar {
    	margin-bottom:5px !important;
    }
	.items-con {
		display: flex;
		margin-bottom:12px;
	}
	.items-con > span {
		flex:1;
	}
	.item-name {
		display: inline-block;
		width:60px;
	}
</style>