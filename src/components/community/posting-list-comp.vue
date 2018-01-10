<template>
	<div class="list-container">
		<ul class="list-header">
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
				<ul class="list-contents">
					<li class="posting-id more-line">
						<p>
							<span class="lines">{{item.id}}</span>
							<span class="lines">{{item.title}}</span>
							<span class="lines c-gris">{{item.updated_at}}</span>
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
					    <p class="c-gris">产品ID： <span class="c-carbon" style="padding:0 3px"  v-for="(inneritem, innerindex) in item.products" :key="innerindex">{{inneritem.id}}</span>
					<span v-if="!(item.products).length">无</span></p>
					</li>
					<li class="posting-action">
						<p class="h-block01">
							<span class="items">
								<span class="c-gris">文章归类 | </span>
								<span class="c-carbon pointer">设置</span>
							</span>
							
							<span class="items">
								<span class="c-gris">文章状态 | </span>
								<span class="c-carbon pointer" @click="setStatus(item.id)">{{item.status===0? "删除" : item.status===1? "正常" : "草稿"}}</span>
							</span>
							<span class="items">
								<span class="c-gris">产品关联 | </span>
								<span class="c-carbon pointer">设置</span>
							</span>
						</p>
						<p class="h-block02">
							<span class="items">
								<span class="c-gris">推首 | </span>
								<span class="c-carbon pointer">设置</span>
							</span>
							<span class="items">
								<span class="c-gris">评分 | </span>
								<span class="c-carbon pointer">{{item.level===0? "等级A" : item.level===1? "等级B" : item.level===2? "等级C" : item.level===3? "等级D" : "设置" }}</span>
							</span>
							<span class="items">
								<span class="c-gris">TAG | </span>
								<span class="c-carbon pointer">设置</span>
							</span>
						</p>
						<p class="h-block03">
							<span class="items">
								<span class="c-gris">权重 | </span>
								<span class="c-carbon pointer">{{item.weight}}</span>
							</span>
						</p>
					</li>
				</ul>
			</li>
		</ul>

		<div class="cover-style"
             v-show="popStatus"
             :style="{width:coverWidth + 'px', height:coverHeight + 'px'}"
		>
			<div class="pop-wrapper">
				<status @changeStatus="changeStatus" v-if="2 === popNum"></status>
			</div>
		</div>
	</div>
</template>

<script>
    import Loading from '@/components/base-comp/loading'
    import status from "@/components/pop/status-pop"
    import {mapGetters, mapMutations} from 'vuex'
    import {updateArticleStatus, communityPosting} from '@/axios/api'
	export default {
		props:{
			postingListData:{
				type:Array
			}
		},
       data() {
       	  return {
       	  	state: 0,
       	  	coverWidth:0,
       	  	coverHeight:0
       	  }
       },
       created() {
          this.getWindowsSize()
         },
       computed: {
       	...mapGetters([
               'popStatus',
               'popNum',
               'articleId'
       		])
       },
       methods: {
       	getWindowsSize() {
            this.coverWidth = window.document.body.offsetWidth;
            this.coverHeight = window.document.body.offsetHeight;
          },
       	...mapMutations([
                'setPopStatus',
                'setPopNum',
                'sendId'
       		]),
       	setStatus(id) {
       		this.setPopNum(2)
       		this.setPopStatus()
       		this.sendId(id)
       		//console.log(this.articleId)
       	},
       	changeStatus(status) {
       		let that = this
       		//console.log(this.articleId)
       		updateArticleStatus({
       			id: this.articleId,
       			status: status
       		}).then(res => {
       			that.$emit("refresh")
       		})
       	}
       },
       components: {
       	Loading,
       	status
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

