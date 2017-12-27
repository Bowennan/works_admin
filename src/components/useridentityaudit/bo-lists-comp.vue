<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="check-id">审核ID</li>
			<li class="id-nickname">ID/昵称</li>
			<li class="identity-info">个人信息</li>
			<li class="product">品牌产品关联</li>
			<li class="letter">公函</li>
			<li class="apply-info">申请信息</li>
			<li class="action-status">操作</li>
		</ul>

		<ul>
			<li>
				<ul class="list-contents">
					<li class="check-id">
						<p>1025</p>
					</li>
					<li class="id-nickname more-line">
						<p>
						   <span>1025</span>
						   <span>开灯的山洞</span>
						</p>
					</li>
					<li class="identity-info more-line">
						<p>
							<span><span class="c-gris">姓名：</span>张三</span>
							<span><span class="c-gris">联系电话：</span>166699878856</span>
							<span><span class="c-gris">岗位：</span>产品经理</span>
							<span><span class="c-gris">行业：</span>智能家居</span>
						</p>
					</li>
					<li class="product more-line">
					    <p>
					    	<span><span class="c-gris">品牌：</span>大疆</span>
					    	
					    	<Poptip trigger="hover" placement = 'bottom' width="300">
					    		<span class="font-hidden"><span class="title-nam pointer">关联产品：</span>角度看jfk了的时间决定是否技术的家快来解放圣诞节快乐家快来解放圣诞节快乐家快来解放圣诞节快乐飞机</span>
					    		<div slot="content" style="width:100%; height:150px; position:relative; white-space: normal;">
					    			
					    				<div style="width:100%; height:100%; position:absolute">
					    					就离开房间的时间浪费觉得少了开发放手大家快来解放圣诞节快乐附件监考老师的飞机的思考逻辑分离技术的看来飞机螺丝钉解放
					    				</div>
					    		
					    		</div>
					    	</Poptip>
					    </p>
					</li>
					<li class="letter">
						<p>图片</p>
					</li>
					<li class="apply-info more-line">
						<p>
							<span><span class="c-gris">申请状态：</span>待审核</span>
							<span><span class="c-gris">申请时间：</span>201665</span>
						</p>
					</li>
					<li class="action-status more-line">
						<p>
							<span><span class="pointer" @click="showCheck">审核</span><span style="margin-left:20px" class="pointer" @click="showConnect">关联产品</span></span>


							<Poptip trigger="hover" placement="bottom-end" width="420">
						        <span class='font-hidden'>说明：<span class="values pointer">
									的jfk简单了领导jfk了简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导
								</span></span>
						        <div style="white-space:normal" slot="content">
						           <span>
						           	的jfk简单了领导jfk了简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导的jfk简单了领导jfk了简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导
						           </span>
						        </div>
						    </Poptip>
						</p>
					</li>
				</ul>
			</li>
		</ul>

		<div v-show="cover" :style="{width:coverWidth+'px', height:coverHeight+'px'}" class="cover-style">
			<div class="pop-wrapper">
				<check-or-not @close="showCheck" v-if="showCheckStatus"></check-or-not>
				<check-connect @close="showConnect" v-if="showConnectStatus"></check-connect>
			</div>
		</div>
	</div>
</template>

<script>
	import checkOrNot from '@/components/pop/passing-pop'
	import checkConnect from '@/components/pop/connect-pop'
	export default {
       data() {
       	  return {
       	  	state: 0,
       	  	bg:false,
       	  	showCheckStatus:false,
       	  	showConnectStatus:false,
       	  	coverWidth:0,
       	  	coverHeight:0,
       	  	cover:false
       	  }
       },
       created() {
       	this.getWindowsSize()
       },
       methods: {
       	getWindowsSize() {
	       		this.coverWidth = window.document.body.offsetWidth;
	       		this.coverHeight = window.document.body.offsetHeight;
	       	},
       	showCheck() {
       		this.cover = !this.cover
       		this.showCheckStatus = !this.showCheckStatus
       	},
       	showConnect() {
       		this.cover = !this.cover
       		this.showConnectStatus = !this.showConnectStatus
       	}
       },
       components: {
       	 checkOrNot,
       	 checkConnect
       }
   }
</script>

<style scoped>
	.apply-info {
		flex:0 0 180px;
	}
	.check-id {
		flex:0 0 106px;
	}
	.id-nickname {
		flex:0 0 120px;
	}
	.identity-info {
		flex:0 0 180px;
	}
	.product {
		flex:0 0 270px;
	}
	.letter {
		flex:0 0 80px;
	}
	.action-status {
		min-width:176px;
		flex:1;
	}
	.more-line p > span {
		display: block;
	}
</style>

