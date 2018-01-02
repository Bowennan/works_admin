<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">
               <Checkbox v-model="single">ID/型号/上市日期</Checkbox>
			</li>
			<li class="posting-author">品类/品牌名</li>
			<li class="posting-info">产品关联内容</li>
			<li class="posting-con">百科精选</li>
			<li class="posting-action">操作</li>
		</ul>

		<ul>
			<li>
				<ul class="list-contents">
					<li class="posting-id more-line">
						<p style="position:relative; padding-left:20px;"> 
							<Checkbox style="position:absolute; top:36px; left:0" v-model="single"></Checkbox>
							<span class="lines">13232</span>
							<span class="lines">IPHONE X</span>
							<span class="lines">上市：<span class="c-gris">2017-12-9</span></span>
						</p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="lines c-gris">类别：<span class="c-carbon">智能单车</span></span>
							<span class="lines c-gris">品牌：<span class="c-carbon">小米</span></span>
							<span class="lines c-gris">品名：<span class="c-carbon">asdv</span></span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p class="h-block01">
							<span class="items">
								<span class="c-gris">编辑：
                                   <span class="c-carbon">565</span>
								</span>
							</span>
							<span class="items">
								<span class="c-gris">参数：
                                   <span class="c-carbon">565</span>
								</span>
							</span>
							<span class="items">
								<span class="c-gris">图集：
                                   <span class="c-carbon">565</span>
								</span>
							</span>
						</p>
						<p class="h-block02">
							<span class="items">
								<span class="c-gris">内容：
                                   <span class="c-carbon">565</span>
								</span>
							</span>
							<span class="items">
								<span class="c-gris">人物：
                                   <span class="c-carbon">565</span>
								</span>
							</span>
							<span class="items">
								<span class="c-gris">渠道：
                                   <span class="c-carbon">565</span>
								</span>
							</span>
						</p>
					</li>
					<li class="posting-con more-line">
					    <p>
					    	<span class="lines c-gris">精选帖子：<span class="c-carbon">10</span></span>
					    	<span class="lines c-gris">精选回答：<span class="c-carbon">5</span></span>
					    	<span class="lines c-gris">视频：<span class="c-carbon">PC | 5</span></span>
					    </p>
					</li>
					<li class="posting-action">
						<p class="h-block01">
							<span class="items">
								<span class="c-carbon">编辑产品</span>
							</span>
							<span class="items">
								<span class="c-carbon">参数设置</span>
							</span>
							<span class="items">
								<span class="c-carbon">图集编辑</span>
							</span>
						</p>
						<p class="h-block02">
							<span class="items">
								<span class="c-carbon">内容关联</span>
							</span>
							<span class="items">
								<span class="c-carbon">人物联系</span>
							</span>
							<span class="items">
								<span class="c-carbon">渠道管理</span>
							</span>
						</p>
						<p class="h-block03">
							<span class="items">
								<span class="c-gris">付费 | </span>
								<span @click="classfyTrigger">设置</span>
							</span>
							<span class="items">
								<span class="c-gris">TAG | </span>
								<span @click="classfyTrigger">设置</span>
							</span>
							<span class="items">
								<span class="c-carbon">删除</span>
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
       	  	single:'',
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
    span {
    	padding:2px 0;
    }
	.col {
		line-height: 18px;
	}
	.posting-author {
		flex:0 0 220px;
	}
	.posting-info {
		min-width: 214px;
		flex:1;
		display: flex;
	}
	.posting-con {
		min-width: 190px;
		flex:1;
	}
	.posting-action {
		min-width: 250px;
		flex:1;
		display: flex;
	}
	.posting-action p, .posting-info p {
       padding-top:16px;
	}
    .h-block01 {
		flex:0 0 80px;
	}
    .h-block02 {
		flex:0 0 80px;
	}
    .h-block03 {
		flex:0 0 80px;
	}
	.items {
		display: block;
		padding:2px 0;
	}
	.posting-id{
		min-width:200px;
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

