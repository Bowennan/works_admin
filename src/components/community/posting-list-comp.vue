<template>
	<div class="lists">
		<ul class="header">
			<li class="posting-id">ID/标题/日期</li>
			<li class="posting-author">作者信息</li>
			<li class="posting-info">帖子信息</li>
			<li class="posting-con">产品关联</li>
			<li class="posting-action">帖子状态与操作</li>
		</ul>
        <div v-show="!postingListData.length">
        	<loading></loading>
        </div>
		<ul v-for="(item, index) in postingListData" :key="index">
			<li>
				<ul class="con-header">
					<li class="posting-id more-line">
						<p>
							<span class="lines values">{{item.id}}</span>
							<span class="lines values">{{item.title}}</span>
							<span class="lines">{{item.published_at}}</span>
						</p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="lines values">{{(item.user).user_id}}</span>
							<span class="lines values">{{(item.user).nickname}}</span>
							<span class="lines values">😜</span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p>
							<span class="lines">评论: <span class="values">{{item.comment_num}}</span></span> 
							<span class="lines">类别: <span class="values">{{item.article_type_name_cn}} | {{item.content_type==="image"? "纯图" : item.content_type==="video"? "视频" : "图文"}}</span></span> 

							    <Poptip style="white-space: normal;" trigger='hover' placement="bottom" width="300">
							        <span>社区、浏览、收藏等</span>
							        <div class="pop-cons" slot="content" style="width:100%; height:130px;">
							            <p class="posting-pop">
								        		<span>加入的社区：</span> <span class="values" style="padding:0 6px"  v-for="(inneritem, innerindex) in item.communities" :key="innerindex">{{inneritem.name}}</span>
								        		     <span v-if="!(item.communities).length">无</span>
									        	</p>
                                        <p class="posting-pop">
                                        	浏览：<span class="values">{{item.read_num}}</span>
                                        </p>
                                        <p class="posting-pop">
                                        	收藏：<span class="values">{{item.collect_num}}</span>
                                        </p>
							        </div>
							    </Poptip>
						</p>
					</li>
					<li class="posting-con">
					    <p>产品ID： <span style="padding:0 3px"  v-for="(inneritem, innerindex) in item.products" :key="innerindex">{{inneritem.id}}</span>
					<span v-if="!(item.products).length">无</span></p>
					</li>
					<li class="posting-action">
						<p class="h-block01">
							<span class="items">
								<span>文章归类 | </span>
								<span class="values">设置</span>
							</span>
							
							<span class="items">
								<span>文章状态 | </span>
								<span class="values">{{item.status===0? "隐藏" : item.status===1? "正常" : "草稿"}}</span>
							</span>
							<span class="items">
								<span>产品关联 | </span>
								<span class="values">设置</span>
							</span>
						</p>
						<p class="h-block02">
							<span class="items">
								<span>推首 | </span>
								<span class="values">设置</span>
							</span>
							<span class="items">
								<span>评分 | </span>
								<span class="values">{{item.level===0? "等级A" : item.level===1? "等级B" : item.level===2? "等级C" : item.level===3? "等级D" : "设置" }}</span>
							</span>
							<span class="items">
								<span>TAG | </span>
								<span class="values">设置</span>
							</span>
						</p>
						<p class="h-block03">
							<span class="items">
								<span>权重 | </span>
								<span class="values">{{item.heat}}</span>
							</span>
						</p>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
    import Loading from '@/components/base-comp/loading'
	export default {
		props:{
			postingListData:{
				type:Array
			}
		},
       data() {
       	  return {
       	  	state: 0,
       	  }
       },
       components: {
       	Loading
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
		flex:0 0 133px;
	}
	.posting-info {
		flex:0 0 178px;
	}
	.posting-con {
		flex:0 0 146px;
	}
	.posting-action {
		flex:0 0 310px;
		display: flex;
	}
	.posting-action p {
       padding-top:16px;
	}
	.posting-action .h-block01 {
		flex:0 0 120px;
	}
	.posting-action .h-block02 {
		flex:0 0 86px;
	}
	.posting-action .h-block03 {
		flex:0 0 100px;
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
	.con-header li > p {
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
	.values {
		color:#80848f;
	}
	.pop-cons {
		width:100%;
		height: 130px;
        color:#80848f;
	}
	.pop-cons .posting-pop{
		width:100%;
		display: block;
		color:#bbbec4;
		min-height: 30px;
		line-height: 30px;
		white-space: normal;
	}
</style>

