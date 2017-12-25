<template>
	<div class="lists">
		<ul class="header">
			<li class="posting-id">ID/标题/日期</li>
			<li class="posting-author">作者信息</li>
			<li class="posting-info">帖子信息</li>
			<li class="posting-con">产品关联</li>
			<li class="posting-action">帖子状态与操作</li>
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
								<span @click="examineTrigger">|不通过</span>
							</span>
							<span class="items">
								<span>文章状态</span>
								<span @click="statusTrigger">|隐藏</span>
							</span>
							<span class="items">
								<span>产品关联</span>
								<span @click="connectpTrigger">|设置</span>
							</span>
						</p>
						<p class="h-block02">
							<span class="items">
								<span>推首</span>
								<span @click="recommendTrigger">|设置</span>
							</span>
							<span class="items">
								<span>评分</span>
								<span @click="levelTrigger">|等级A</span>
							</span>
							<span class="items">
								<span>TAG</span>
								<!-- <span @click="tagTrigger">|设置</span> -->
							</span>
						</p>
						<p class="h-block03">
							<span class="items">
								<span>文章归类</span>
								<span @click="classfyTrigger">|设置</span>
							</span>
							<span class="items">
								<span>权重</span>
								<span @click="weightTrigger">|120</span>
							</span>
						</p>
					</li>
				</ul>
			</li>
		</ul>
  
        <div v-show="cover" :style="{width:coverWidth+'px', height:coverHeight+'px'}" class="cover-style">
			<div class="pop-wrapper">
				<examine-window v-if="eStatus" @close="examineTrigger"></examine-window>
				<status-window v-if="sStatus" @close="statusTrigger"></status-window>
				<classfy-window v-if="cStatus" @close="classfyTrigger"></classfy-window>
				<connectp-window v-if="cpStatus" @close="connectpTrigger"></connectp-window>
				<recommend-window v-if="recStatus" @close="recommendTrigger"></recommend-window>
				<level-window v-if="levStatus" @close="levelTrigger"></level-window>
				<weight-window v-if="weiStatus" @close="weightTrigger"></weight-window>
			</div>
		</div>
	</div>
</template>

<script>
    import examineWindow from '@/components/pop/examine-pop'
    import connectpWindow from '@/components/pop/connectp-pop'
    import statusWindow from '@/components/pop/status-pop'
    import classfyWindow from '@/components/pop/classfy-pop'
    import recommendWindow from '@/components/pop/recommend-pop'
    import levelWindow from '@/components/pop/level-pop'
    import tagWindow from '@/components/pop/tag-pop'
    import weightWindow from '@/components/pop/weight-pop'
	export default {
       data() {
       	  return {
       	  	state: 0,
       	  	eStatus:false,
       	  	sStatus:false,
       	  	cStatus:false,
       	  	cpStatus:false,
       	  	recStatus:false,
       	  	levStatus:false,
       	  	weiStatus:false,
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
          examineTrigger() {
          	this.eStatus = !this.eStatus
          	this.cover = !this.cover
          },
          statusTrigger(){
          	this.sStatus = !this.sStatus
          	this.cover = !this.cover
          },
          classfyTrigger(){
          	this.cStatus = !this.cStatus
          	this.cover = !this.cover
          },
          connectpTrigger(){
          	this.cpStatus = !this.cpStatus
          	this.cover = !this.cover
          },
          recommendTrigger(){
          	this.recStatus = !this.recStatus
          	this.cover = !this.cover
          },
          levelTrigger(){
          	this.levStatus = !this.levStatus
          	this.cover = !this.cover
          },
          weightTrigger(){
          	this.weiStatus = !this.weiStatus
          	this.cover = !this.cover
          }
       },
       components: {
        	examineWindow,
        	connectpWindow,
        	statusWindow,
        	classfyWindow,
        	recommendWindow,
        	tagWindow,
        	levelWindow,
        	weightWindow
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

