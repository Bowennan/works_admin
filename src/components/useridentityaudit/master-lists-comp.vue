<template>
	<div class="lists">
		<ul class="header">
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
				<ul class="con-header">
					<li class="check-id more-line">
						<p>
						   <span>1025</span>
						   <span>开灯的山洞</span>
						</p>
					</li>
					<li class="master-info more-line">
						<p>
							<span>姓名：搭街坊</span>
							<span>期数：8期</span>
							<span>职位：评测达人</span>
						</p>
					</li>
					<li class="invention more-line">
						<p>
							<span>邀约状态：已邀约</span>
							<span>邀约开始结束：2017-05-25~2017-09-30</span>
						</p>
					</li>
					<li class="indroduce more-line">
					    <p>
					    	<span>标题：DKJFKD</span>
					    	<span class="con">人物介绍：打开jfk的就是看了解放军水电费交了水电费俯拾地芥劳动法对抗疗法
					    	放军水电费交了水电费俯拾地芥劳动法对抗疗</span>
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
							<span @click="showCancel">
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
	.lists {
		width:96%;
		margin-left:28px;
		margin-top:20px;
	}
	.header {
		box-sizing: border-box;
		width:100%;
		height: 42px;
		line-height: 42px;
		border-top:1px solid #ccc;
		border-bottom:1px solid #ccc;
		display:flex;
		color:#1c2438;
		font-weight: bold;
	}
	.con-header {
		box-sizing: border-box;
		width:100%;
		height: 96px;
		display: flex;
		border-bottom:1px solid #ccc;
		color:#80848f;
		font-weight: bold;
	}
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
		flex:0 0 214px;
	}
	.indroduce {
		min-width:258px;
		flex:1;
	}
	.action-status {
		flex:0 0 86px;
	}
	.header li, .con-header li {
        box-sizing: border-box;
        padding:0 18px;
	}
	.con-header li p {
		height: 95px;
		display: table-cell;
		vertical-align: middle;
	}
	.more-line p span {
		display: block;
	}
	.con-box {
		display: block;
        width:100%;
        max-height:54px; 
        overflow: hidden;
        position: relative;
	}
	.points {
		display:block;
		width:36px;
		height: 18px;
        position:absolute;
        bottom:0;
        right:0;
        background: -webkit-linear-gradient(left, transparent, #fff 55%);
		background: -o-linear-gradient(right, transparent, #fff 55%);
		background: -moz-linear-gradient(right, transparent, #fff 55%);
		background: linear-gradient(to right, transparent, #fff 55%);
		font-size:14px;
		font-weight: bold;
		text-align: right;
		padding-left:20px;
	}
	.indroduce p span.con {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
</style>

