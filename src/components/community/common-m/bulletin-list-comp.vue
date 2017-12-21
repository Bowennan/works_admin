<template>
	<div class="lists">
		<ul class="header">
			<li class="id-nickname">
                 <Checkbox v-model="single"></Checkbox>
			评论ID/类型</li>
			<li class="media-info">评论内容</li>
			<li class="works">评论来源</li>
			<li class="apply-info">评论信息</li>
			<li class="action-status">操作</li>
		</ul>

		<ul>
			<li>
				<ul class="con-header">
					<li class="id-nickname more-line">
						<p class="f-col">
						   <Checkbox class="checkbox" v-model="single"></Checkbox>
						   <span>12121</span>
						   <span>直评</span>
						</p>
					</li>
					<li class="media-info more-line">
						<p style="color:#2d8cf0; cursor:pointer">查看</p>
					</li>
					<li class="works more-line">
					    <p>
					    	<span>评论者：<span class="values">影视，娱乐，体育</span></span>
					    	<span>所属内容：<span class="values">作品1，作品2</span></span>
					    	<span>标题：<span class="values">作品1，作品2</span></span>
					    </p>
					</li>
					<li class="apply-info more-line">
						<p>
							<span>社区：<span class="values">待审核</span></span>
							<span>赞同：<span class="values">5</span></span>
							<span>举报：<span class="values">56</span></span>
							<span>时间：<span class="values">2017-12-12</span></span>
						</p>
					</li>
					<li class="action-status more-line">
						<p>
							<span>审核状态 | <span class="values">不通过</span></span>
							<span>热门评论 | <span class="values">是</span></span>
							<span>评论状态 | <span class="values">正常</span></span>
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
       	  	single:'',
       	  	opacityNum:1
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
		font-weight: 400;
	}
	.apply-info {
		flex:0 0 197px;
	}
	.id-nickname {
		flex:0 0 158px;
	}
	.media-info {
		flex:0 0 156px;
	}
	.works {
		min-width: 398px;
		flex:1;
	}
	.action-status {
		flex:0 0 150px;
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
	.con-header li p .values {
		color:#80848f;
	}
	.more-line p > span {
		display: block;
		color:#bbbec4;
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
	.f-col {
		position: relative;
		padding-left:20px;
	}
	.checkbox {
		    position: absolute;
		    left: 0;
		    top: 36px;
	}
	.show-detaile {
		width:100%;
		min-height: 330px;
		border:1px solid #ccc;
		margin-bottom:10px;
		position: relative;
		box-sizing: border-box;
		padding:10px;
	}
	.de-action {
       position: absolute;
       bottom:0px;
       left:0px;
       width:100%;
       height: 30px;
       line-height: 30px;
       font-size: 12px;
       background: #f8f8f9;
       box-sizing: border-box;
       padding:0 20px;
       color:#bbbec4;
	}
	.drection {
		display: inline-block;
		padding:5px;
		cursor:pointer;
		font-weight: bold;
		margin:0 10px;
		color:#495060;
	}
	.operator {
		position: absolute;
		right:20px;
		top:0;
	}
	.value-font {
		color:#80848f;
	}
	.de-font {
		width:100%;
		margin-bottom:12px;
	}
	.de-img {
		width:100%;
		margin-bottom: 40px;
	}
	.de-img img {
		border:5px solid #ccc;
	}
	.tips {
		margin-right: 20px;
		margin-top:6px;
	}
</style>

