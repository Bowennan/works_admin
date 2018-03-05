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

		<ul v-for="(item, index) in datas" :key="index">
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
						<p>
							
								<span class="c-gris">文章状态 | </span>
								<span @click="setStatus({
									id: item.id,
									index: index
								})" class="pointer">{{item.status===0? "隐藏" : item.status===1? "正常" : "草稿"}}</span>
						
						</p>
					</li>
				</ul>
			</li>
		</ul>
  
        <div v-show="popStatus" :style="{width:coverWidth+'px', height:coverHeight+'px'}" class="cover-style">
			<div class="pop-wrapper">
				<status-window></status-window>
			</div>
		</div>
	</div>
</template>

<script>
    import Loading from '@/components/base-comp/loading'
    import statusWindow from '@/components/pop/status-pop'
    import {mapGetters, mapMutations, mapActions} from 'vuex'
	export default {
       data() {
       	  return {
       	  	coverWidth:0,
    		coverHeight:0
       	  }
       },
       created() {
       	   this.getPostingAbnormalData()
           this.getWindowsSize()
        },
        computed: {
       	...mapGetters('postingsData', [
               "datas"
       		])
       },
       methods: {
       	...mapMutations('postingsData', [
               'setPopStatus',
                'setPopNum',
                'sendId',
                'sendConnection',
                'setArticleIndex',
                'SET_POSTING_SOURCE'
       		]),
       	...mapActions('postingsData', [
              'getPostingAbnormalData'
       		]),
       	getWindowsSize() {
	       		this.coverWidth = window.document.body.offsetWidth;
	       		this.coverHeight = window.document.body.offsetHeight;
	       	},
          setStatus(obj){
          	this.setPopStatus()
          	this.SET_POSTING_SOURCE('ap')
          	this.sendId(obj.id)
          	this.setArticleIndex(obj.index)
          }
       },
       components: {
        	statusWindow,
        	Loading
        }
   }
</script>

<style scoped>
	.col {
		line-height: 18px;
	}
	.posting-author {
		flex:0 0 140px;
	}
	.posting-info {
		flex:0 0 200px;
	}
	.posting-con {
		flex:0 0 200px;
	}
	.posting-action {
		flex:0 0 220px;
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

