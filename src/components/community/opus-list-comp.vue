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
							<!-- <span class="lines">{{(item.user).user_id? (item.user).user_id : "数据无" }}</span>
							<span class="lines">{{(item.user).nickname? (item.user).nickname : "数据无" }}</span> -->
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
						<p class="h-block01">
							<span class="items">
								<span class="c-gris">作品归类 | </span>
								<span class="pointer" @click="setCatalog(item)">设置</span>
							</span>
							<span class="items">
								<span class="c-gris">作品状态 | </span>
								<span class="pointer" @click="setStatus(item)">{{item.status===0? "隐藏" : item.status===1? "正常" : "草稿"}}</span>
							</span>
							<span class="items">
								<span class="c-gris">产品关联 | </span>
								<span class="pointer"  @click="setConnect(item)">设置</span>
							</span>
						</p>
						<p class="h-block02">
							<span class="items">
								<span class="c-gris">推首 | </span>
								<span class="pointer"  @click="setPull(item)">设置</span>
							</span>
							<span class="items">
								<span class="c-gris">评分 | </span>
								<span class="pointer" @click="setLevel(item)">等级A</span>
							</span>
							<span class="items">
								<span class="c-gris">TAG | </span>
								<span class="pointer">设置</span>
							</span>
						</p>
						<p class="h-block03">
							<span class="items">
								<span class="c-gris">权重 | </span>
								<span class="pointer"  @click="setWeight(item)">{{item.weight}}</span>
							</span>
						</p>
					</li>
				</ul>
			</li>
		</ul>
		<transition name="slide-fade">
		<div class="cover-style"
             v-if="popStatus"
             :style="{width:coverWidth + 'px', height:coverHeight + 'px'}"
		>
				<div class="pop-wrapper">
					<class :id="itemData.id" v-if="1 === popNum"></class>
					<status :id="itemData.id" @reload="getMasterpieceData" v-if="2 === popNum"></status>
					<connection :id="itemData.id" :connectionPro="itemData.products" @reload="getMasterpieceData" v-if="3 === popNum"></connection>
					<recommend ref="recommend" :id="itemData.id" :haveRecommend="havePulled" :allCommunity="itemData.communities" @reload="getMasterpieceData" v-if="4 === popNum"></recommend>
					<level :id="itemData.id" @reload="getMasterpieceData" v-if="5 === popNum"></level>
					<weight :weight="itemData.weight" :id="itemData.id" @reload="getMasterpieceData" v-if="7 === popNum"></weight>

				</div>
		</div>
		</transition>
	</div>
</template>

<script>
    import Loading from '@/components/base-comp/loading'
    import Status from "@/components/pop/status-pop"
    import Level from "@/components/pop/level-pop"
    import Connection from "@/components/pop/connectp-pop"
    import Weight from "@/components/pop/weight-pop"
    import Class from "@/components/pop/classfy-pop"
    import Recommend from "@/components/pop/recommend-pop"
    import {mapGetters, mapMutations, mapActions} from 'vuex'
	export default {
       data() {
       	  return {
       	  	coverWidth:0,
       	  	coverHeight:0,
       	  	itemData:null,
       	  	havePulled:[]
       	  }
       },
       created() {
       	  this.getMasterpieceData()
         },
       computed: {
       	...mapGetters('masterpieceData', [
               "datas",
               "popNum",
               "popStatus"
       		])
       },

       methods: {
       	getWindowsSize() {
            this.coverWidth = window.document.body.offsetWidth;
            this.coverHeight = window.document.body.offsetHeight;
          },

           ...mapActions('masterpieceData', [
               'getMasterpieceData',
               'setPop'
          	]),
	       	postingData(item) {
	          	this.getWindowsSize()
	          	this.itemData = item
	          },

	          setCatalog(item) {
	          	this.postingData(item)
	          	this.setPop(1)
	          },

	          setStatus(item) {
	          	this.postingData(item)
	          	this.setPop(2)
	          },

	          setConnect(item) {
	          	this.postingData(item)
	          	this.setPop(3)
	          },

	          setPull(item) {
	          	this.postingData(item)
	          	this.setPop(4)
	          	this.havePulled.length=[]
	          	item.communities.forEach((ele) => {
	                if(ele.is_choice) {
	                	this.havePulled.push(ele)
	                }
	          	})
	          	
	          },

	          setLevel(item) {
	            this.postingData(item)
	            this.setPop(5)
	          },

	          setWeight(item) {
	          	this.postingData(item)
	          	this.setPop(7)
	          }
       },
       components: {
       	Loading,
       	Status,
       	Level,
       	Connection,
       	Weight,
       	Class,
       	Recommend
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
	.more-line p .lines {
		display: block;
		padding:2px 0;
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
	 .slide-fade-enter-active {
		  transition: all .5s ease;
		}
		.slide-fade-leave-active {
		  transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
		}
		.slide-fade-enter, .slide-fade-leave-to
		/* .slide-fade-leave-active for below version 2.1.8 */ {
		  transform: scale(0.2);
		  opacity: 0;
		}
</style>

