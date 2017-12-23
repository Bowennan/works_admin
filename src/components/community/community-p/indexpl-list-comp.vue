<template>
	<div class="lists">
		<ul class="header">
			<li class="posting-id">
             <Checkbox v-model="single">ID/标题/日期</Checkbox>
			</li>
			<li class="posting-author">作者信息</li>
			<li class="posting-info">帖子信息</li>
			<li class="posting-con">产品关联</li>
			<li class="posting-action">帖子状态与操作</li>
		</ul>

		<ul>
			<li>
				<ul class="con-header">
					<li class="posting-id more-line">
						<p style="position:relative; box-sizing:border-box; padding-left:20px"> 
							<Checkbox style="position:absolute; left:0; top:34px" v-model="single"></Checkbox>
							<span class="lines values">13232</span>
							<span class="lines values">你知道你活的比狗惨吗？你知道你活的比狗惨吗？你知道你活的比狗惨吗？你知道你活的比狗惨吗？</span>
							<span class="lines">2017-12-9</span>
						</p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="lines values">1212</span>
							<span class="lines values">哈，你不配</span>
							<span>😝</span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p>
							<span class="lines">评论: <span class="values">12</span></span> 
							<span class="lines">类别: <span class="values">攻略 | 图文</span></span> 
							
							<Poptip  trigger="hover" placement="bottom" width="300">
						        <span class="values">社区、浏览、喜欢、其他等</span>
						        <div class="con-pop" slot="content">
						           <div style="width:100%; height:130px; white-space:normal" class="poptip-box">
						           	  <p>
						           	  	<span>社区归属：</span>
						           	  	<span class="values">苹果社区、无人机社区</span>
						           	  </p>
						           	  <p style="display:flex">
						           	  	<span style="flex:1">
						           	  		总浏览量：<span class="values">21212</span>
						           	  	</span>
						           	  	<span style="flex:1">
						           	  		日浏览量：<span class="values">1231</span>
						           	  	</span>
						           	  </p>
						           	  <p style="display:flex">
						           	  	<span style="flex:1">
						           	  		举报：<span class="values">1212</span>
						           	  	</span>
						           	  	<span style="flex:1">
						           	  		收藏：<span class="values">122</span>
						           	  	</span>
						           	  </p>
						           	  <p>
						           	  	<span>
						           	  		TAG:<span class="values">XXX,XXX,XXX,XXX</span>
						           	  	</span>
						           	  </p>
						           </div>
						        </div>
    						</Poptip>
						</p>
					</li>
					<li class="posting-con">
					    <p>产品ID： <span class="values">12151</span></p>
					</li>
					<li class="posting-action">
						<p>
							<span class="items">
								<span>状态|</span>
								<span class="values">未生效</span>
							</span>
							<span class="items">
								<span>权重|</span>
								<span class="values">123</span>
							</span>
						</p>>
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
       	  	single:''
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
		color:#bbbec4;
		font-weight: 400;
	}
	.col {
		line-height: 18px;
	}
	.posting-author {
		flex:0 0 138px;
	}
	.posting-info {
		flex:0 0 180px;
	}
	.posting-con {
		flex:0 0 250px;
	}
	.posting-action {
		flex:0 0 180px;
	}
	.items {
		display: block;
		padding:2px 0;
	}
	.posting-id{
		min-width:280px;
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
	.con-header li p span {
		padding:2px 0;
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
	.con-pop .poptip-box p {
		display: block;
		height: 25px;
		line-height: 25px;
		padding:5px;
		font-size: 12px;
		font-weight: 400;
		color:#bbbec4;
	}
	.values {
		color:#80848f;

	}
</style>

