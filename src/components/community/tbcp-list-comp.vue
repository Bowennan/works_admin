<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">ID/标题/日期</li>
			<li class="posting-author">作者信息</li>
			<li class="posting-info">帖子信息</li>
			<li class="posting-con">产品关联</li>
			<li class="posting-action">帖子状态与操作</li>
		</ul>

		<ul>
			<li>
				<ul class="list-contents">
					<li class="posting-id more-line">
						<p>
							<span class="lines">13232</span>
							<span class="lines">你知道你活的比狗惨吗？</span>
							<span class="lines c-gris">2017-12-9</span>
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
							<span class="lines c-gris">评论: <span class="c-carbon">12</span></span> 
							<span class="lines c-gris">类别: <span class="c-carbon">攻略 | 图文</span></span>

							<Poptip  trigger="hover" placement="bottom" width="300">
						        <span class="lines c-gris">其他: <span class="c-carbon">社区、浏览量等</span></span> 
						        <div class="con-pop" slot="content">
						           <div style="width:100%; height:130px; white-space:normal" class="poptip-box">
						           	  <p>
						           	  	<span>社区归属：</span>
						           	  	<span class="c-carbon">苹果社区、无人机社区</span>
						           	  </p>
						           	  <p style="display:flex">
						           	  	<span style="flex:1">
						           	  		总浏览量：<span class="c-carbon">21212</span>
						           	  	</span>
						           	  	<span style="flex:1">
						           	  		日浏览量：<span class="c-carbon">1231</span>
						           	  	</span>
						           	  </p>
						           	  <p style="display:flex">
						           	  	<span style="flex:1">
						           	  		赞：<span class="c-carbon">1212</span>
						           	  	</span>
						           	  	<span style="flex:1">
						           	  		踩：<span class="c-carbon">122</span>
						           	  	</span>
						           	  </p>
						           	  <p style="display:flex">
						           	  	<span style="flex:1">
						           	  		优惠：<span class="c-carbon">1212</span>
						           	  	</span>
						           	  	<span style="flex:1">
						           	  		收藏：<span class="c-carbon">122</span>
						           	  	</span>
						           	  </p>
						           	  <p>
						           	  	<span>
						           	  		举报：<span class="c-carbon">1212</span>
						           	  	</span>
						           	  </p>
						           </div>
						        </div>
    						</Poptip>
						</p>
					</li>
					<li class="posting-con">
					    <p class="c-gris">产品ID: <span class="c-carbon">12151</span></p>
					</li>
					<li class="posting-action">
						<p class="h-block01">
							<span class="items">
								<span class="c-gris">审核状态 | </span>
								<span @click="examineTrigger">不通过</span>
							</span>
							<span class="items">
								<span class="c-gris">文章状态 | </span>
								<span @click="statusTrigger">隐藏</span>
							</span>
							<span class="items">
								<span class="c-gris">产品关联 | </span>
								<span @click="connectpTrigger">设置</span>
							</span>
						</p>
						<p class="h-block02">
							<span class="items">
								<span class="c-gris">推首 | </span>
								<span @click="recommendTrigger">设置</span>
							</span>
							<span class="items">
								<span class="c-gris">评分 | </span>
								<span @click="levelTrigger">等级A</span>
							</span>
							<span class="items">
								<span class="c-gris">TAG | </span>
								<span>设置</span>
							</span>
						</p>
						<p class="h-block03">
							<span class="items">
								<span class="c-gris">文章归类 | </span>
								<span @click="classfyTrigger">设置</span>
							</span>
							<span class="items">
								<span class="c-gris">权重 | </span>
								<span @click="weightTrigger">120</span>
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
		flex:0 0 320px;
		display: flex;
	}
	.posting-action p {
       padding-top:16px;
	}
	.posting-action .h-block01 {
		flex:0 0 120px;
	}
	.posting-action .h-block02 {
		flex:0 0 96px;
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
	.more-line p .lines {
		display: block;
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
</style>

