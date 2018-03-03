<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">ID/标题/日期</li>
			<li class="posting-author">作者信息</li>
			<li class="posting-info">作品信息</li>
			<li class="posting-con">产品关联</li>
			<li class="posting-action">作品状态与操作</li>
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
							<span class="lines">{{item.user_id}}</span>
							<span class="lines">{{(item.user).nickname}}</span>
							<span class="lines">😜</span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p>
							<span class="lines c-gris">评论: <span class="c-carbon">{{item.comment_num}}</span></span> 
							<span class="lines c-gris">类型: <span class="c-carbon">{{item.content_type==="image"? "纯图" : item.content_type==="video"? "视频" : "图文"}}</span></span> 

							<Poptip style="white-space: normal"  trigger="hover" placement="bottom" width="300">
						        <span class="lines c-gris">其他: <span class="c-carbon">社区、浏览量等</span></span> 
						        <div class="pop-cons" slot="content">
						           	  <p class="posting-pop c-gris" style="margin-bottom:6px">
						           	  	<span>社区归属：</span>
						           	  	<span class="c-carbon" style="padding:0 6px"  v-for="(inneritem, innerindex) in item.communities" :key="innerindex">{{inneritem.name}}</span>
						           	  	<span v-if="!(item.communities).length">无</span>
						           	  </p>
						           	  <p class="c-gris" style="display:flex; margin-bottom:6px">
						           	  	<span style="flex:1">
						           	  		总浏览量：<span class="c-carbon">{{item.read_num}}</span>
						           	  	</span>
						           	  	<span style="flex:1">
						           	  		日浏览量：<span class="c-carbon">暂无</span>
						           	  	</span>
						           	  </p>
						           	  <p class="c-gris" style="display:flex; margin-bottom:6px">
						           	  	<span style="flex:1">
						           	  		举报：<span class="c-carbon">暂无</span>
						           	  	</span>
						           	  	<span style="flex:1">
						           	  		收藏：<span class="c-carbon">{{item.collect_num}}</span>
						           	  	</span>
						           	  </p>
						           	  <p class="c-gris">
						           	  	<span>
							           	  		TAG：<span style="padding:0 2px" class="c-carbon" v-for="(proitem, proindex) in item.tags" :key="proindex">
							           	  			{{proitem.name}}
						           	  		     </span>
						           	  	</span>
						           	  </p>
						           </div>
    						</Poptip>
						</p>
					</li>
					<li class="posting-con">
					    <p class="c-gris">产品ID： <span class="c-carbon" style="padding:0 2px"  v-for="(inneritem, innerindex) in item.products" :key="innerindex">{{inneritem.id}}</span>
                        <span v-if="!(item.products).length">无</span>
					    </p>
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
	</div>
</template>

<script>
    import Loading from '@/components/base-comp/loading'
    import {mapGetters, mapMutations, mapActions} from 'vuex'
	export default {
       data() {
       	  return {
       	  	coverWidth:0,
       	  	coverHeight:0
       	  }
       },
       created() {
       	  this.getAbnormalMasterpiece()
          this.getWindowsSize()
         },
       computed: {
       	...mapGetters('masterpieceData', [
               "datas",
               "popStatus",
               "popNum",
               "commid",
               "choice",
               "communities"
       		])
       },

       methods: {
       	getWindowsSize() {
            this.coverWidth = window.document.body.offsetWidth;
            this.coverHeight = window.document.body.offsetHeight;
          },

           ...mapActions('masterpieceData', [
               'getAbnormalMasterpiece'
          	]),
       	...mapMutations('masterpieceData', [
                'setPopStatus',
                'setPopNum',
                'sendId',
                'sendConnection',
                'setArticleIndex',
                'SET_POSTING_SOURCE',
                'GET_COMMUNITY_ID',
                'SET_COMMUNITY_CHIOCE',
                'GET_COMMUNITIES'
       		]),
       },
       components: {
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
		flex:0 0 296px;
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
	.pop-cons {
		width:100%;
		height: 140px;
        color:#80848f;
	}
	.pop-cons .posting-pop{
		width:100%;
		display: block;
		color:#bbbec4;
		min-height: 24px;
		line-height: 24px;
		white-space: normal;
	}
</style>

