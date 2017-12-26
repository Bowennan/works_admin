<template>
	<div class="pop-container">
			<div class="pop-header">
				<span class="pop-title">用户权限设置</span>
				<Icon type="close-round" class="pop-close" @click.native="closeAuthority"></Icon>
			</div>
			<div class="pop-sub-container pop-scroll-bar" style="height:400px; overflow-y:scroll;">
			    <Tabs value="name1">
			        <TabPane label="账号信息设置" name="name1" style="overflow:hidden">
			        	
			        		<p class="pop-items">
			        			<span class="c-gris">等级：</span> <span>level 4</span>
			        		</p>
			        		<p class="pop-items">
			        			<span class="c-gris">积分：</span> 
			        			<span>12125765652</span> 
			        			<span class="c-azul" style="margin-left:20px;">设置</span>
			        		</p>
			        		<p class="pop-items">
			        			<span class="c-gris">信用：</span>
			        			<Input size="small" v-model="value" placeholder="Enter something..." style="width: 150px"></Input>
			        			 <span class="c-gris" style="margin-left:20px;">取消</span>
			        		</p>
			        
			        </TabPane>
			        <TabPane label="品牌官方" name="name2" style="overflow:hidden">
			        	<div class="pop-sub-container">
			        		<span class="pop-sub-title">
			        		品牌官方基本信息（已认证）</span>
			        		<p class="pop-items pop-two-cols">
			        			<span class='pop-flex-one'>
			        			  <span class="pop-item-title">申请姓名：</span>
                                  <Input size="small" v-model="value" placeholder="姓名" style="width: 124px"></Input>
			        			</span>
			        			<span class='pop-flex-one'>
			        			  <span class="pop-item-title">联系电话：</span>
                                  <Input size="small" v-model="value" placeholder="电话" style="width: 124px"></Input>
			        			</span>
			        		</p>
			        		<p class="pop-items pop-two-cols">
			        			<span class='pop-flex-one'>
			        			  <span class="pop-item-title">行业：</span>
                                  <Input size="small" v-model="value" placeholder="行业" style="width: 124px"></Input>
			        			</span>
			        			<span class='pop-flex-one'>
			        			  <span class="pop-item-title">岗位：</span>
                                  <Input size="small" v-model="value" placeholder="岗位" style="width: 124px"></Input>
			        			</span>
			        		</p>
			        		<p class="pop-items">
			        			<span>
			        			  <span class="pop-item-title">产品品牌：</span>
                                  <Input size="small" v-model="value" placeholder="产品品牌" style="width: 124px"></Input>
			        			</span>
			        		</p>
			        	</div>

			        	<div class="pop-sub-container">
							<span class="pop-sub-title">关联产品</span>

							<p class="pop-items">
							   <span class="pop-item-title">产品1：</span>
							   <Input size="small" v-model="value" placeholder="Enter something..." style="width: 120px"></Input>
							   <span class="pop-item-title-s" style="margin-left:12px;">ID：</span>
				               <Input size="small" v-model="value" placeholder="Enter something..." style="width: 120px"></Input>
				               <span class="c-rojo pop-item-title-s" style="text-align:right; cursor:pointer">删除</span>
							</p>

							<p class="pop-items">
							   <span class="pop-item-title">产品：</span>
							   <Input size="small" v-model="value" placeholder="Enter something..." style="width: 120px"></Input>
							   <span class="pop-item-title-s" style="margin-left:12px;">ID：</span>
				               <Input size="small" v-model="value" placeholder="Enter something..." style="width: 120px"></Input>
				               <span class="c-azul pop-item-title-s" style="text-align:right; cursor:pointer">添加</span>
							</p>
						</div>

						<div class="pop-sub-container" style="border:none">
						      <span class="pop-sub-title">消息发送</span>
						      <div class="border" style="height:132px; width:420px;">
						        <textarea class="text-contents border-bottom"></textarea>
						        <Select placement="top" class="text-sel"  size="small" v-model="infos" style="width:150px">
						              <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
						          </Select>
						      </div>
						 </div>
			        </TabPane>
			        <TabPane label="体验官" name="name3" style="overflow:hidden">
			        	<div class="pop-sub-container">
			        		<span class="pop-sub-title c-gris">
			        			体验官擅长领域最多3项（已认证）
			        		</span>
			        		<p class="pop-items pop-two-cols">
			        			<span class="pop-flex-one"> <Checkbox v-model="single">Checkbox</Checkbox></span>
			        			<span class="pop-flex-one"> <Checkbox v-model="single">Checkbox</Checkbox></span>
			        			<span class="pop-flex-one"> <Checkbox v-model="single">Checkbox</Checkbox></span>
			        			<span class="pop-flex-one"> <Checkbox v-model="single">Checkbox</Checkbox></span>
			        			<span class="pop-flex-one"> <Checkbox v-model="single">Checkbox</Checkbox></span>
			        		</p>
			        		<p class="pop-items pop-two-cols">
			        			<span class="pop-flex-one"> <Checkbox v-model="single">Checkbox</Checkbox></span>
			        			<span class="pop-flex-one"> <Checkbox v-model="single">Checkbox</Checkbox></span>
			        			<span class="pop-flex-one"> <Checkbox v-model="single">Checkbox</Checkbox></span>
			        			<span class="pop-flex-one"> <Checkbox v-model="single">Checkbox</Checkbox></span>
			        			<span class="pop-flex-one"> <Checkbox v-model="single">Checkbox</Checkbox></span>
			        		</p>
			        		<p class="pop-items">
			        			<span> <Checkbox v-model="single">Checkbox</Checkbox></span>
			        		</p>
			        	</div>
			        	<div class="pop-sub-container">
					      <span class="pop-sub-title c-gris">代表作品</span>
					      <p class='pop-items'>
					      	<span class="c-gris pop-item-title-s">产品1</span>
					        <span class="pop-item-title">有资源达人</span> <span class="c-azul">删除</span>
					      </p>
					      <p class="pop-items">
					        <Input size="small" class="pop-input-box" v-model="tag_name" placeholder="Enter something..." style="width: 200px"></Input> <span class="c-azul">确认添加</span>
					      </p>
					    </div>
					    <div class="pop-sub-container" style="border:none">
						      <span class="pop-sub-title">消息发送</span>
						      <div class="border" style="height:132px; width:420px;">
						        <textarea class="text-contents border-bottom"></textarea>
						        <Select placement="top" class="text-sel"  size="small" v-model="infos" style="width:150px">
						              <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
						          </Select>
						      </div>
						 </div>
			        </TabPane>
			        <TabPane label="达人" name="name4" style="overflow:hidden">
			        	<div class="pop-sub-container">
			        		<span class="pop-sub-title c-gris">达人基本信息（已认证）</span>
			        		<p class="pop-items">
			        			<span class="c-gris pop-item-title">真实姓名：</span>
			        			 <Input size="small" v-model="value" placeholder="Enter something..." style="width: 200px"></Input>

			        		</p>
			        		<p class="pop-items">
			        			<span class="c-gris pop-item-title">个人职业：</span>
			        			 <Input size="small" v-model="value" placeholder="Enter something..." style="width: 200px"></Input>
			        			
			        		</p>
			        	</div>
			        	<div class="pop-sub-container" style="border:none">
						      <span class="pop-sub-title">消息发送</span>
						      <div class="border" style="height:132px; width:420px;">
						        <textarea class="text-contents border-bottom"></textarea>
						        <Select placement="top" class="text-sel"  size="small" v-model="infos" style="width:150px">
						              <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
						          </Select>
						      </div>
						 </div>
			        </TabPane>
			        <TabPane label="社区管理员" name="name5" style="overflow:hidden">
			        	<div class="pop-sub-container">
					      <span class="pop-sub-title c-gris">社区管理员管理社区（已认证）</span>
					      <p class='pop-items'>
					      	<span class="c-gris" style="display:block">已管理社区：</span>
					        <span class="pop-item-title">有资源达人</span> <span class="c-azul" style="margin-left:20px;">删除</span>
					      </p>
					      <p class="pop-items">
					        <Select size="small" v-model="infos" style="width:150px">
					              <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
					          </Select>
					        <span class="c-azul" style="margin-left:20px;">确认添加</span>
					      </p>
					    </div>
					    <div class="pop-sub-container" style="border:none">
						      <span class="pop-sub-title">消息发送</span>
						      <div class="border" style="height:132px; width:420px;">
						        <textarea class="text-contents border-bottom"></textarea>
						        <Select placement="top" class="text-sel"  size="small" v-model="infos" style="width:150px">
						              <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
						          </Select>
						      </div>
						 </div>
			        </TabPane>
			        <TabPane label="棒科官方" name="name6" style="overflow:hidden">
			        	<div class="pop-sub-container">
			        		<span class="pop-sub-title c-gris">棒客官方人员身份（已认证）</span>
			        		<p class="pop-items">
			        			<span class="c-gris pop-item-title">真实姓名：</span>
			        			 <Input size="small" v-model="value" placeholder="Enter something..." style="width: 200px"></Input>

			        		</p>
			        		<p class="pop-items">
			        			<span class="c-gris pop-item-title">个人职业：</span>
			        			 <Input size="small" v-model="value" placeholder="Enter something..." style="width: 200px"></Input>
			        			
			        		</p>
			        	</div>
			        	<div class="pop-sub-container" style="border:none">
						      <span class="pop-sub-title">消息发送</span>
						      <div class="border" style="height:132px; width:420px;">
						        <textarea class="text-contents border-bottom"></textarea>
						        <Select placement="top" class="text-sel"  size="small" v-model="infos" style="width:150px">
						              <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
						          </Select>
						      </div>
						 </div>
			        </TabPane>
			    </Tabs>
		    </div>
		    <div class="pop-bottom-box-big">
			
				<div class="sub-btn-input">
					<Select class="input-and-sel" size="small" v-model="infos" style="width:200px">
				        <Option v-for="item in 4" :value="item" :key="item">{{ item }}</Option>
				    </Select>
				    <Button class="more-than-two" size="small" type="primary">确认授权人</Button>
				</div>
                
                <div class="sub-btn-input">
                	<Input class="input-and-sel" size="small" v-model="infos" placeholder="Enter something..." style="width: 200px"></Input>
			        <Button class="more-than-two" size="small" type="primary">认证</Button>
                </div>

			     <div class="sub-btn-input">
			     	<Button class="more-than-two" type="ghost" @click="closeAuthority">取消</Button>
			        <Button class="more-than-two" type="primary" @click="closeAuthority">确认发送</Button>
			     </div>
		</div>
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
       	closeAuthority() {
           this.$emit("close")

       	}
       }
	}
</script>