<template>
	<div class="lists">
		<h4 class="title">棒客官方列表</h4>
		<ul class="header">
			<li class="check-id more-line col">
				<p>
					<span>添加对象</span>
					<span>(ID/昵称)</span>
				</p>
			</li>
			<li class="name-post more-line col">
				<p>
					<span>真实姓名</span>
					<span>职位</span>
				</p>
			</li>
			<li class="actor">操作者</li>
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
					<li class="name-post  more-line">
						<p>
						   <span>大狸子</span>
						   <span>项目经理</span>
						</p>
					</li>
					<li class="actor">
					    <p>XXx</p>
					</li>
					<li class="action">
						<p>取消官方身份</p>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
       data() {
       	  return {
       	  	state: 0,
       	  }
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
	.col {
		line-height: 18px;
	}
	.check-id {
		flex:0 0 168px;
	}
	.name-post {
		flex:0 0 168px;
	}
	.actor {
		min-width: 163px;
		flex:1;
	}
	.action {
		flex:0 0 513px;
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

