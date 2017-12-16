<template>
	<div class="lists">
		<ul class="header">
			<li class="posting-id">ID/标题/日期</li>
			<li class="posting-author">作者信息</li>
			<li class="posting-info">作品信息</li>
			<li class="posting-con">产品关联</li>
			<li class="posting-action">作品状态与操作</li>
		</ul>

		<ul>
			<li>
				<ul class="con-header">
					<li class="posting-id more-line">
						<p>
							<span class="lines">13232</span>
							<span class="lines">你知道你活的比狗惨吗？</span>
							<span class="lines">2017-12-9</span>
						</p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="lines">1212</span>
							<span class="lines">哈，你不配</span>
							<span class="lines">😜</span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p>
							<span class="lines">评论: <span>12</span></span> 
							<span class="lines">类别: <span>攻略、图文、社区</span></span> 
						</p>
					</li>
					<li class="posting-con">
					    <p>产品ID： <span>12151</span></p>
					</li>
					<li class="posting-action">
						<p class="h-block01">
							<span class="items">
								<span>审核状态</span>
								<span>|不通过</span>
							</span>
							<span class="items">
								<span>作品状态</span>
								<span>|隐藏</span>
							</span>
							<span class="items">
								<span>产品关联</span>
								<span>|设置</span>
							</span>
						</p>
						<p class="h-block02">
							<span class="items">
								<span>推首</span>
								<span>|设置</span>
							</span>
							<span class="items">
								<span>评分</span>
								<span>|等级A</span>
							</span>
							<span class="items">
								<span>TAG</span>
								<span>|设置</span>
							</span>
						</p>
						<p class="h-block03">
							<span class="items">
								<span>作品归类</span>
								<span>|设置</span>
							</span>
							<span class="items">
								<span>权重</span>
								<span>|120</span>
							</span>
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
	.posting-author {
		flex:0 0 133px;
	}
	.posting-info {
		flex:0 0 178px;
	}
	.posting-con {
		flex:0 0 146px;
	}
	.posting-action {
		flex:0 0 296px;
		display: flex;
	}
	.posting-action p {
       padding-top:16px;
	}
	.posting-action .h-block01 {
		flex:0 0 116px;
	}
	.posting-action .h-block02 {
		flex:0 0 86px;
	}
	.posting-action .h-block03 {
		flex:0 0 92px;
	}
	.items {
		display: block;
		padding:2px 0;
	}
	.posting-id{
		min-width:232px;
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
	.more-line p .lines {
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

