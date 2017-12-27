<template>
	<div class="list-container" style="margin-top:-20px;">
		<h4 class="list-title">达人列表</h4>
		<ul class="list-header">
			<li class="check-id more-line first-col">
				<p>
					<span>添加对象</span>
					<span>(ID/昵称)</span>
				</p>
			</li>
			<li class="master-info">达人信息</li>
			<li class="invention">邀约信息</li>
			<li class="indroduce">达人志介绍</li>
			<li class="pic">图片</li>
			<li class="action-status">操作</li>
		</ul>

		<ul>
			<li>
				<ul class="list-contents">
					<li class="check-id more-line">
						<p>
						   <span>1025</span>
						   <span>开灯的山洞</span>
						</p>
					</li>
					<li class="master-info more-line">
						<p>
							<span class="c-gris">姓名：<span class="c-carbon">搭街坊</span></span>
							<span class="c-gris">期数：<span class="c-carbon">8期</span></span>
							<span class="c-gris">职位：<span class="c-carbon">评测达人</span></span>
						</p>
					</li>
					<li class="invention more-line">
						<p>
							<span class="c-gris">邀约状态：<span class="c-carbon">已邀约</span></span>
							<span class="c-gris">邀约开始结束：<span class="c-carbon">2017-05-25~2017-09-30</span></span>
						</p>
					</li>
					<li class="indroduce more-line">
					    <p>
					    	<span class="c-gris">标题：<span class="c-carbon">DKJFKD</span></span>

					    	<Poptip trigger="hover" placement = 'bottom' width="300">
					    		<span class="font-hidden"><span class="c-gris pointer">人物介绍：</span>打开jfk的就是看了解放军水电费交了水电费俯拾地芥劳动法对抗疗法放军水电费交了水电费俯拾地芥劳动法对抗疗</span>
					    		<div slot="content" style="width:100%; height:150px; position:relative; white-space: normal;">
					    			
					    				<div style="width:100%; height:100%; position:absolute">
					    					就离开房间的时间浪费觉得少了开发放手大家快来解放圣诞节快乐附件监考老师的飞机的思考逻辑分离技术的看来飞机螺丝钉解放
					    				</div>
					    		
					    		</div>
					    	</Poptip>
					    </p>
					</li>
					<li class="pic more-line">
						<p>
							<span>头像</span>
							<span>推荐图</span>
						</p>
					</li>
					<li class="action-status">
						<p>
							<span class="pointer" @click="showCancel">
								取消身份
							</span>
						</p>
					</li>
				</ul>
			</li>
		</ul>

		<div v-show="cover" :style="{width:coverWidth+'px', height:coverHeight+'px'}" class="cover-style">
			<div class="pop-wrapper">
				<cancel-identity v-if="cancelStatus" @close="showCancel"></cancel-identity>
			</div>
		</div>
	</div>
</template>

<script>
   import cancelIdentity from '@/components/pop/cancel-identity-pop'
	export default {
       data() {
       	  return {
       	  	state: 0,
       	  	cancelStatus:false,
       	  	coverWidth:0,
    		coverHeight:0,
    		cover:false
       	  }
       },
       created() {
       	this.getWindowsSize();
       },
       methods: {
       	getWindowsSize() {
	       		this.coverWidth = window.document.body.offsetWidth;
	       		this.coverHeight = window.document.body.offsetHeight;
	       	},
       	showCancel() {
       		this.cover = !this.cover;
       		this.cancelStatus = !this.cancelStatus;
       	}
       },
       components: {
       	cancelIdentity
       }
   }
</script>

<style scoped>
	.first-col {
		line-height: 18px;
	}
	.pic {
		flex:0 0 134px;
	}
	.check-id {
		flex:0 0 162px;
	}
	.master-info {
		flex:0 0 164px;
	}
	.invention {
		flex:0 0 270px;
	}
	.indroduce {
		min-width:258px;
		flex:1;
	}
	.action-status {
		flex:0 0 86px;
	}
	.more-line p > span {
		display: block;
	}
</style>

