<template>
	<div class="lists">
		<ul class="header">
			<li class="id-nickname">
                 <Checkbox v-model="single"></Checkbox>
			回答ID/类型</li>
			<li class="media-info">回答内容</li>
			<li class="works">回答来源</li>
			<li class="apply-info">回答信息</li>
			<li class="action-status">操作</li>
		</ul>
        <div v-show="!replyData.length">
        	<loading></loading>
        </div>
		<ul v-for="(item,index) in replyData">
			<li>
				<ul class="con-header">
					<li class="id-nickname more-line">
						<p class="f-col">
						   <Checkbox class="checkbox" v-model="single"></Checkbox>
						   <span>{{item.id}}</span>
						   <span>直评</span>
						</p>
					</li>
					<li class="media-info more-line">
						<p style="color:#2d8cf0; cursor:pointer">查看</p>
					</li>
					<li class="works more-line">
					    <p>
					    	<span>回答者：<span class="values">{{(item.user).nickname}}</span></span>
					    	<span>问题：<span class="values">作品1，作品2</span></span>
					    </p>
					</li>
					<li class="apply-info more-line">
						<p>
							<span>回复：<span class="values">{{(item.comment).reply_num}}</span></span>
							<span>赞同：<span class="values">{{(item.comment).agree_num}}</span></span>
							<span>举报：<span class="values">0</span></span>
							<span>时间：<span class="values">{{(item.updated_at)}}</span></span>
						</p>
					</li>
					<li class="action-status more-line">
						<p>
							<span>热门回答 | <span class="values">是</span></span>
							<span>回答状态 | <span class="values">{{item.deleted_at===null? "正常" : "隐藏"}}</span></span>
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
	   props: {
	   	replyData:{
	   		type:Array
	   	}
	   },
       data() {
       	  return {
       	  	state: 0,
       	  	single: ''
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
		flex:0 0 120px;
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
</style>

