<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">ID/标题/日期</li>
			<li class="posting-author">作者信息</li>
			<li class="posting-info">帖子信息</li>
			<li class="posting-con">产品关联</li>
			<li class="posting-action">帖子状态与操作</li>
		</ul>

		<div v-show="!datas.length">
        	<loading></loading>
        </div>

		<ul  v-for="(item, index) in datas" :key="index">
			<li>
				<ul class="list-contents">
					<li class="posting-id more-line">
						<p>
							<span class="lines">{{item.id}}</span>
							<span class="lines">{{item.title}}</span>
							<span class="lines c-gris">{{item.published_at}}</span>
						</p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="lines">{{(item.user).user_id}}</span>
							<span class="lines">{{(item.user).nickname}}</span>
							<span class="lines">😜</span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p>
							<span class="lines c-gris">评论: <span class="c-carbon">{{item.comment_num}}</span></span> 
							<span class="lines c-gris">类别: <span class="c-carbon">{{item.article_type_name_cn}} | {{item.content_type==="image"? "纯图" : item.content_type==="video"? "视频" : "图文"}}</span></span> 

							    <Poptip style="white-space: normal;" trigger='hover' placement="bottom" width="300">
							        <span class="lines c-gris">其他: <span class="c-carbon">社区、浏览量等</span></span> 
							        <div class="pop-cons" slot="content">
							            <p class="posting-pop c-gris">
								        		<span>社区归属：</span> <span class="c-carbon" style="padding:0 6px"  v-for="(inneritem, innerindex) in item.communities" :key="innerindex">{{inneritem.name}}</span>
								        		     <span v-if="!(item.communities).length">无</span>
									        	</p>
                                        <p class="posting-pop c-gris">
                                        	浏览：<span class="c-carbon">{{item.read_num}}</span>
                                        </p>
                                        <p class="posting-pop c-gris">
                                        	收藏：<span class="c-carbon">{{item.collect_num}}</span>
                                        </p>
							        </div>
							    </Poptip>
						</p>
					</li>
					<li class="posting-con">
					    <p class="c-gris">产品ID: <span class="c-carbon" v-for="(inneritem, innerindex) in item.products" :key="innerindex">{{inneritem.id}}</span></p>
					</li>
					<li class="posting-action">
						<p class="h-block01">
							<span class="items">
								<span class="c-gris">审核状态 | </span>
								<span @click="setPass" class="c-rojo pointer">待审核</span>
							</span>
							<span class="items">
								<span class="c-gris">文章状态 | </span>
								<span @click="setStatus" class="pointer">{{item.status===0? "隐藏" : item.status===1? "正常" : "草稿"}}</span>
							</span>
							<span class="items">
								<span class="c-gris">产品关联 | </span>
								<span @click="setConnection" class="pointer">设置</span>
							</span>
						</p>
						<p class="h-block02">
							<span class="items">
								<span class="c-gris">推首 | </span>
								<span @click="setRecommend" class="pointer">设置</span>
							</span>
							<span class="items">
								<span class="c-gris">评分 | </span>
								<span @click="setLevel" class="pointer">{{item.level===0? "无等级" : item.level===1? "等级A" : item.level===2? "等级B" : item.level===3? "等级C" : "等级D" }}</span>
							</span>
							<span class="items">
								<span class="c-gris">TAG | </span>
								<span class="pointer">设置</span>
							</span>
						</p>
						<p class="h-block03">
							<span class="items">
								<span class="c-gris">文章归类 | </span>
								<span @click="setClass" class="pointer">设置</span>
							</span>
							<span class="items">
								<span class="c-gris">权重 | </span>
								<span @click="setWeight" class="pointer">{{item.weight}}</span>
							</span>
						</p>
					</li>
				</ul>
			</li>
		</ul>
  
        <div v-show="popStatus" :style="{width:coverWidth+'px', height:coverHeight+'px'}" class="cover-style">
			<div class="pop-wrapper">
				<examine-window v-if="1 === popNum"></examine-window>
				<status-window v-if="2 === popNum"></status-window>
				<classfy-window v-if="3 === popNum"></classfy-window>
				<connectp-window v-if="4 === popNum"></connectp-window>
				<recommend-window v-if="5 === popNum"></recommend-window>
				<level-window v-if="6 === popNum"></level-window>
				<weight-window v-if="7 === popNum"></weight-window>
			</div>
		</div>
	</div>
</template>

<script>
    import Loading from '@/components/base-comp/loading'
    import examineWindow from '@/components/pop/examine-pop'
    import connectpWindow from '@/components/pop/connectp-pop'
    import statusWindow from '@/components/pop/status-pop'
    import classfyWindow from '@/components/pop/classfy-pop'
    import recommendWindow from '@/components/pop/recommend-pop'
    import levelWindow from '@/components/pop/level-pop'
    import tagWindow from '@/components/pop/tag-pop'
    import weightWindow from '@/components/pop/weight-pop'
    import {mapActions, mapGetters, mapMutations} from "vuex"
	export default {

       data() {
       	  return {
       	  	coverWidth:0,
    		coverHeight:0
       	  }
       },
       computed: {
       	...mapGetters([
               'datas',
               'popStatus',
               'popNum'
       		])
       },
       created() {
           this.getPostingReviewData()
           this.getWindowsSize()
        },
       methods: {
       	...mapActions([
               'getPostingReviewData'
       		]),
       	...mapMutations([
                'setPopStatus',
                'setPopNum',
                'sendId',
                'sendConnection',
                'setArticleIndex'
       		]),
       	getWindowsSize() {
	       		this.coverWidth = window.document.body.offsetWidth;
	       		this.coverHeight = window.document.body.offsetHeight;
	       	},
          setPass() {
          	this.setPopStatus()
          	this.setPopNum(1)
          },
          setStatus(){
          	this.setPopStatus()
          	this.setPopNum(2)
          },
          setClass(){
          	this.setPopStatus()
          	this.setPopNum(3)
          },
          setConnection(){
          	this.setPopStatus()
          	this.setPopNum(4)
          },
          setRecommend(){
          	this.setPopStatus()
          	this.setPopNum(5)
          },
          setLevel(){
          	this.setPopStatus()
          	this.setPopNum(6)
          },
          setWeight(){
          	this.setPopStatus()
          	this.setPopNum(7)
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
        	weightWindow,
        	Loading
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
		padding:2px 0;
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

