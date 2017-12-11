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
		        	<div style="height:310px; width:100%;"> 
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
		        <TabPane label="品牌官方" name="name2">标签二的内容</TabPane>
		        <TabPane label="体验官" name="name3">标签三的内容</TabPane>
		        <TabPane label="达人" name="name1">标签一的内容</TabPane>
		        <TabPane label="社区管理员" name="name2">标签二的内容</TabPane>
		        <TabPane label="棒客官方" name="name3">标签三的内容</TabPane>
		    </Tabs>
	</div>
</template>

<script>
	export default {
		data() {
          return {
          	model11:'啊哈哈',
          	value: 'djfkd'
          }
		},
       methods: {
       	closeWindow() {
           this.$emit("closeAuthorityWindow")

       	}
       }
	}
</script>

<style scoped>
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
</style>