<template>
	<div class="lists">
		<h4 class="title">管理员列表</h4>
		<ul class="header">
			<li class="check-id more-line first-col">
				<p>
					<span>添加对象</span>
					<span>(ID/昵称)</span>
				</p>
			</li>
			<li class="actor">操作者</li>
			<li class="community-manage">社区管理</li>
			<li class="action">操作</li>
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
					<li class="actor">
					    <p>XXx</p>
					</li>
					<li class="community-manage">
						<p>社区1、社区2、社区3...</p>
					</li>
					<li class="action">
						<p>
							<span @click="showEditor">身份编辑</span>
						</p>
					</li>
				</ul>
			</li>
		</ul>

		<div v-show="cover" :style="{width:coverWidth+'px', height:coverHeight+'px'}" class="cover-style">
			<div class="pop-wrapper">
				<identity-editor v-if="showStatus" @close="showEditor"></identity-editor>
			</div>
		</div>	
	</div>
</template>

<script>
   import identityEditor from '@/components/pop/identity-editor-pop'
	export default {
       data() {
       	  return {
       	  	state: 0,
       	  	showStatus:false,
       	  	cover:false,
       	  	coverHeight:0,
       	  	coverWidth:0
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
       	showEditor() {
       		this.cover = !this.cover;
       		this.showStatus = !this.showStatus
       	}
       },
       components: {
       	identityEditor
       }
   }
</script>

<style scoped>
	.lists {
		width:96%;
		margin-left:28px;
		margin-top:20px;
	}
	.title {
		margin:12px 0;
		font-size:14px;
		color:#1c2438;
		font-weight: bold;
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
	.check-id {
		flex:0 0 173px;
	}
	.actor {
		flex:0 0 152px;
	}
	.action {
		flex:0 0 451px;
	}
	.community-manage {
		min-width:238px;
		flex:1;
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
</style>

