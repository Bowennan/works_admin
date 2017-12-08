<template>
	<div class="lists">
		<ul class="header">
			<li class="action-id">操作ID</li>
			<li class="actor">操作者</li>
			<li class="action-name">操作行为</li>
			<li class="action-con">操作内容</li>
			<li class="action-obj more-line col">
				<p>
					<span>操作对象</span>
					<span>(ID昵称)</span>
				</p>
			</li>
			<li class="action-info">操作信息</li>
		</ul>

		<ul>
			<li>
				<ul class="con-header">
					<li class="action-id">
						<p>1025</p>
					</li>
					<li class="actor">
						<p>萤火虫之舞</p>
					</li>
					<li class="action-name">
						<p>昵称违规</p>
					</li>
					<li class="action-con">
					    <p>
					    	<span>
					    		发布信息：的接口浪费精力都开始就电视剧法律上的放到手机发了是放到手机发了电视剧法律上的
					    始就电视剧法律上的放到手机发了是放到手机发了电视剧法律上的
					    	</span>
					    </p>
					</li>
					<li class="action-obj more-line">
						<p>
							<span>1265</span>
							<span>去年买的</span>
						</p>
					</li>
					<li class="action-info more-line">
						<p>
							<span>时间</span>
							<span>2017-02-03</span>
						</p>
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
	.action-obj {
		flex:0 0 122px;
	}
	.action-id {
		flex:0 0 126px;
	}
	.actor {
		flex:0 0 118px;
	}
	.action-name {
		flex:0 0 116px;
	}
	.action-con {
		min-width:247px;
		flex:1;
	}
	.action-info {
		flex:0 0 288px;
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
	.action-con p span {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
</style>

