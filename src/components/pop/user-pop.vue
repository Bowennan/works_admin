<template>
	<div class="pop-container">
			<div class="pop-header">
				<span class="pop-title">用户资料</span>
				<Icon type="close-round" class="pop-close" @click.native="closeUser"></Icon>
			</div>
			<div class="pop-sub-container pop-scroll-bar" style="height:400px; overflow-y:scroll; border:none">
			    <Tabs :value="outter">
			        <TabPane label="社交账号" name="name1" style="overflow:hidden">
			        	<div class="pop-sub-container">
			        		<span class="pop-sub-title">
			        			社交账号信息
			        		</span>
			        		<p class="pop-items">
			        			<span class="pop-item-title-l c-gris">手机已绑定：</span>
			        			<span>1215451454421</span>
			        		</p>
			        		<p class="pop-items">
			        			<span class="pop-item-title-l c-gris">邮箱：</span>
			        			<span>暂未绑定</span>
			        		</p>
			        		<p class="pop-items">
			        			<span class="pop-item-title-l">其他账号：</span>
			        		</p>
			        		<p class="pop-items">
			        			<span class="pop-item-title-l c-gris">微信：</span>
			        			<span>235653235</span>
			        		</p>
			        		<p class="pop-items">
			        			<span class="pop-item-title-l c-gris">QQ号：</span>
			        			<span>5584569</span>
			        		</p>
			        	</div>
			        
			        </TabPane>
			        <TabPane label="自媒体" name="name2" style="overflow:hidden">
			        	<div class="pop-sub-container">
			        		<span class="pop-sub-title">
			        			自媒体账号信息
			        		</span>
			        		<p class="pop-items">
			        			<span class="pop-item-title-l c-gris">微信公众号：</span>
			        			<span>1215451454421</span>
			        		</p>
			        		<p class="pop-items">
			        			<span class="pop-item-title-l c-gris">微博主页：</span>
			        			<span>暂未绑定</span>
			        		</p>
			        		<p class="pop-items">
			        			<span class="pop-item-title-l c-gris">今日头条：</span>
			        			<span>235653235</span>
			        		</p>
			        		<p class="pop-items">
			        			<span class="pop-item-title-l c-gris">其他平台：</span>
			        			<span>5584569</span>
			        		</p>
			        	</div>
			        
			        </TabPane>
			        <TabPane label="实名认证" name="name3" style="overflow:hidden">
			        	<div class="pop-sub-container">
			        		<span class="pop-sub-title">
			        		实名认证信息</span>
			        		<p class="pop-items">
			        			<span class="pop-item-title-l c-gris">真实姓名：</span>
			        			<span>1215451454421</span>
			        		</p>
			        		<p class="pop-items">
			        			<span class="pop-item-title-l c-gris">身份证号：</span>
			        			<span>暂未绑定</span>
			        		</p>
			        		<p class="pop-items">
			        			<span class="pop-item-title-l c-gris">联系电话：</span>
			        			<span>235653235</span>
			        		</p>
			        	</div>

			        	<div class="pop-sub-container">
			        	  <span class="pop-sub-title">身份证照</span>
			        	  <p class="pop-items pop-two-cols">
			        	  	<span style="text-align:left" class="pop-flex-one">
			        	  	   <img class="pop-thumb-img" src="../../assets/001.jpg" alt="我是图片">
			        	  	   <span style="margin-left:20px; margin-top:5px;">点击看大图</span>
			        	  	</span>
			        	  	<span style="text-align:left" class="pop-flex-one">
			        	  	   <img class="pop-thumb-img" src="../../assets/001.jpg" alt="我是图片">
			        	  	   <span style="margin-left:20px; margin-top:5px;">点击看大图</span>
			        	  	</span>
			        	  	<span style="text-align:left" class="pop-flex-one">
			        	  	   <img class="pop-thumb-img" src="../../assets/001.jpg" alt="我是图片">
			        	  	   <span style="margin-left:20px; margin-top:5px;">点击看大图</span>
			        	  	</span>
			        	  </p>
			        	</div>
			        </TabPane>
			        <TabPane label="收获地址" name="name4" style="overflow:hidden">
			        	<div class="pop-sub-container">
			        		<span class="pop-sub-title">
			        			收货地址
			        		</span>
			        		<p class="pop-items">
			        			<span class="c-gris pop-item-title">姓名：</span>
			        			<span>安达市</span>
			        		</p>
			        		<p class="pop-items">
			        			<span class="c-gris pop-item-title">手机号码：</span>
			        			<span>安达市</span>
			        		</p>
			        		<p class="pop-items">
			        			<span class="c-gris pop-item-title">所在地区：</span>
			        			<span>安达市</span>
			        		</p>
			        		<p class="pop-items">
			        			<span class="c-gris pop-item-title">详细地址：</span>
			        			<span>深圳市南山区深圳大学西区</span>
			        		</p>
			        	</div>
			        	<div class="pop-sub-container">
			        		<span class="pop-sub-title">
			        			收货地址
			        		</span>
			        		<p class="pop-items">
			        			<span class="c-gris pop-item-title">姓名：</span>
			        			<span>安达市</span>
			        		</p>
			        		<p class="pop-items">
			        			<span class="c-gris pop-item-title">手机号码：</span>
			        			<span>安达市</span>
			        		</p>
			        		<p class="pop-items">
			        			<span class="c-gris pop-item-title">所在地区：</span>
			        			<span>安达市</span>
			        		</p>
			        		<p class="pop-items">
			        			<span class="c-gris pop-item-title">详细地址：</span>
			        			<span>深圳市南山区深圳大学西区</span>
			        		</p>
			        	</div>
			        </TabPane>
			    </Tabs>
		    </div>
		    <div class="pop-bottom-box">
			
			    <Button class="pop-confirm-btn" type="ghost" @click="closeUser">取消</Button>
		   </div>
	</div>
</template>

<script>
	export default {
		props: {
			outter:{
				type:String,
				default: 'name4'
			}
		},
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
       	closeUser() {
           this.$emit("close")

       	}
       }
	}
</script>