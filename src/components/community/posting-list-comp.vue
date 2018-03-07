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
						<p class="h-block01">
							<span class="items">
								<span class="c-gris">文章归类 | </span>
								<span class="c-carbon pointer" @click="setCatalog(item)">设置</span>
							</span>
							
							<span class="items">
								<span class="c-gris">文章状态 | </span>
								<span class="c-carbon pointer" @click="setStatus(item)">{{item.status===0? "隐藏" : item.status===1? "正常" : "草稿"}}</span>
							</span>
							<span class="items">
								<span class="c-gris">产品关联 | </span>
								<span class="c-carbon pointer" @click="setConnect(item)">设置</span>
							</span>
						</p>
						<p class="h-block02">
							<span class="items">
								<span class="c-gris">推首 | </span>
								<span class="c-carbon pointer" @click="setPull(item)">设置</span>
							</span>
							<span class="items">
								<span class="c-gris">评分 | </span>
								<span class="c-carbon pointer" @click="setLevel(item)">{{item.level===0? "无等级" : item.level===1? "等级A" : item.level===2? "等级B" : item.level===3? "等级C" : "等级D" }}</span>
							</span>
							<span class="items">
								<span class="c-gris">TAG | </span>
								<span class="c-carbon pointer">设置</span>
							</span>
						</p>
						<p class="h-block03">
							<span class="items">
								<span class="c-gris">权重 | </span>
								<span class="c-carbon pointer" @click="setWeight(item)">{{item.weight}}</span>
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
					<status :id="itemData.id" @reload="getPostingData" v-if="2 === popNum"></status>
					<connection :id="itemData.id" :connectionPro="itemData.products" @reload="getPostingData" v-if="3 === popNum"></connection>
					<recommend ref="recommend" :id="itemData.id" :haveRecommend="havePulled" :allCommunity="itemData.communities" @reload="getPostingData" v-if="4 === popNum"></recommend>
					<level :id="itemData.id" @reload="getPostingData" v-if="5 === popNum"></level>
					<weight :weight="itemData.weight" :id="itemData.id" @reload="getPostingData" v-if="7 === popNum"></weight>

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
       	  this.getPostingData()
         },
       computed: {
       	...mapGetters('postingsData', [
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
          ...mapActions('postingsData', [
               'getPostingData',
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

