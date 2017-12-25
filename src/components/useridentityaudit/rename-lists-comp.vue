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
						<p>
							<span class="values">1025</span>
						</p>
					</li>
					<li class="id-nickname more-line">
						<p>
						   <span class="values">1025</span>
						   <span class="values">开灯的山洞</span>
						</p>
					</li>
					<li class="identity-info more-line">
						<p>
							<span>真是姓名：<span class="values">张三</span></span>
							<span>身份证号：<span class="values">130205456899657820</span></span>
							<span>联系电话：<span class="values">1526654955544</span></span>
						</p>
					</li>
					<li class="identity-pic">
					    <p @click="showPic">
					    	<span class="values pointer">身份照片</span>
					    </p>
					</li>
					<li class="apply-info more-line">
						<p>
							<span>申请状态：<span class="values">待审核</span></span>
							<span>申请时间：<span class="values">201665</span></span>
						</p>
					</li>
					<li class="action-status more-line">
						<p>
							<span class="pointer" @click="showCheck">审核</span>

							    <Poptip trigger="hover" placement="bottom-end" width="300">
								    <span class="con">说明：<span class='values'>
										的jfk简实名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了
									</span></span>
								    <div  class="tip-style" slot="content">
								        <span>
								        	的jfk简实名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核f名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了
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
				<look-pic v-if="showPicStatus" @close="showPic"></look-pic>
			    <check-or-not v-if="showCheckStatus" @close="showCheck" ></check-or-not>
			</div>
		</div>
		
	</div>
</template>

<script>
    import lookPic from '@/components/pop/lookPic'
    import checkOrNot from '@/components/pop/passing-pop'
	export default {
       data() {
       	  return {
       	  	state: 0,
       	  	bg:false,
       	  	showPicStatus:false,
       	  	showCheckStatus:false,
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
       	showPic() {
       		this.cover = !this.cover
       		this.showPicStatus = !this.showPicStatus
       	},
       	showCheck() {
       		this.cover = !this.cover
       		this.showCheckStatus = !this.showCheckStatus
       	}
       },
       components: {
       	lookPic,
       	checkOrNot
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
		color:#bbbec4;
		font-weight: 400;
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
	.more-line p > span {
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
	.values {
		color:#80848f;
	}
	.tip-style {
		white-space: normal;
	}
	.pointer {
		cursor:pointer;
	}
</style>

