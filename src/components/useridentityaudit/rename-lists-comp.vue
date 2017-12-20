<template>
	<div class="lists">
		<ul class="header">
			<li class="check-id">审核ID</li>
			<li class="id-nickname">ID/昵称</li>
			<li class="identity-info">身份信息</li>
			<li class="identity-pic">身份证照片</li>
			<li class="apply-info">申请信息</li>
			<li class="action-status">操作</li>
		</ul>

		<ul v-for="item in 10">
			<li>
				<ul class="con-header">
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
							<span>真是姓名：张三</span>
							<span>身份证号：130205456899657820</span>
							<span>联系电话：166699878856</span>
						</p>
					</li>
					<li class="identity-pic">
					    <p @click="showPic">身份照片</p>
					</li>
					<li class="apply-info more-line">
						<p>
							<span>申请状态：待审核</span>
							<span>申请时间：201665</span>
						</p>
					</li>
					<li class="action-status more-line">
						<p>
							<span>审核</span>
							<span class="con">说明：的jfk简实名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了</span>
						</p>
					</li>
				</ul>
			</li>
		</ul>

		<div :class="bg? 'container' : ''">
			
		</div>
		<look-pic @close="showPic" v-show="showPicStatus"></look-pic>
	</div>
</template>

<script>
    import lookPic from '@/components/pop/lookPic'
	export default {
       data() {
       	  return {
       	  	state: 0,
       	  	bg:false,
       	  	showPicStatus:false
       	  }
       },
       methods: {
       	showPic() {
       		this.bg = !this.bg
       		this.showPicStatus = !this.showPicStatus
       	}
       },
       components: {
       	lookPic
       }
   }
</script>

<style scoped>
	.lists {
		position: relative;
		width:96%;
		height: 100%;
		margin-left:28px;
		margin-top:20px;
	}
	.container {
		position: absolute;
		top:-216px;
		bottom:0;
		left:-28px;
		right:-32px;
		background: #e9eaec9c;
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
	.apply-info {
		flex:0 0 180px;
	}
	.check-id {
		flex:0 0 124px;
	}
	.id-nickname {
		flex:0 0 118px;
	}
	.identity-info {
		flex:0 0 246px;
	}
	.identity-pic {
		flex:0 0 132px;
	}
	.action-status {
		min-width:218px;
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
		.action-status p span.con {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
</style>

