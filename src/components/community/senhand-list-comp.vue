<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">
             <Checkbox v-model="single">ID/标题/日期</Checkbox>
			</li>
			<li class="posting-author">作者信息</li>
			<li class="posting-info">二手信息</li>
			<li class="posting-con">产品关联</li>
			<li class="posting-action">二手状态与操作</li>
		</ul>

		<div v-show="!datas.length">
        	<loading></loading>
        </div>

		<ul v-for="(item, index) in datas" :key="index">
			<li>
				<ul class="list-contents">
					<li class="posting-id more-line">
						<p style="position:relative; box-sizing:border-box; padding-left:20px"> 
							<Checkbox style="position:absolute; left:0; top:34px" v-model="single"></Checkbox>
							<span class="lines c-carbon">{{item.id}}</span>
							<span class="lines c-carbon">{{item.title}}</span>
							<span class="lines c-gris">{{item.updated_at}}</span>
						</p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="lines c-carbon">{{item.user_id}}</span>
							<span class="lines c-carbon">暂无</span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p>
							<span class="lines c-gris">评论: <span class="c-carbon">{{item.comment_num}}</span></span> 
							<span class="lines c-gris">闲鱼: <span class="c-carbon">查看</span></span> 
							<span class="lines c-gris">转转: <span class="c-carbon">查看</span></span> 
							
							<Poptip  trigger="hover" placement="bottom" width="300">
						        <span class="lines c-gris">其他: <span class="c-carbon">价格、赞、收藏等</span></span> 
						        <div class="con-pop" slot="content">
						           <div style="width:100%; height:130px; white-space:normal" class="poptip-box">
						           	  <p>
						           	  	<span>社区归属：</span>
						           	  	<span class="c-carbon" style="padding:0 6px"  v-for="(inneritem, innerindex) in item.communities" :key="innerindex">{{inneritem.name}}</span>
								        		     <span v-if="!(item.communities).length">无</span>
						           	  </p>
						           	  <p style="display:flex">
						           	  	<span style="flex:1">
						           	  		总浏览量：<span class="c-carbon">{{item.read_num}}</span>
						           	  	</span>
						           	  	<span style="flex:1">
						           	  		日浏览量：<span class="c-carbon">无</span>
						           	  	</span>
						           	  </p>
						           	  <p style="display:flex">
						           	  	<span style="flex:1">
						           	  		赞：<span class="c-carbon">{{item.agree_num}}</span>
						           	  	</span>
						           	  	<span style="flex:1">
						           	  		踩：<span class="c-carbon">{{item.disagree_num}}</span>
						           	  	</span>
						           	  </p>
						           	  <p style="display:flex">
						           	  	<span style="flex:1">
						           	  		转让价：<span class="c-carbon">{{item.sell_price}}</span>
						           	  	</span>
						           	  	<span style="flex:1">
						           	  		入手价：<span class="c-carbon">{{item.buy_price}}</span>
						           	  	</span>
						           	  </p>
						           	  <p style="display:flex">
						           	  	<span style="flex:1">
						           	  		收藏：<span class="c-carbon">{{item.collect_num}}</span>
						           	  	</span>
						           	  	<span style="flex:1">
						           	  		举报：<span class="c-carbon">暂无</span>
						           	  	</span>
						           	  </p>
						           </div>
						        </div>
    						</Poptip>
						</p>
					</li>
					<li class="posting-con">
					    <p class='c-gris'>产品ID： <span class="c-carbon" style="padding:0 3px"  v-for="(products, productsindex) in item.products" :key="productsindex">{{products.id}}</span>
					    <span v-if="!(item.products).length">无</span></p>
					</li>
					<li class="posting-action">
						<p class="h-block01">
							<span class="items">
								<span class="c-gris">二手状态 | </span>
								<span class="c-carbon pointer" @click="setStatus(item)">{{item.status===0? "隐藏" : item.status===1? "正常" : "下架"}}</span>
							</span>
							<span class="items">
								<span class="c-gris">二手归类 | </span>
								<span class="c-carbon pointer" @click="setCatalog(item)">设置</span>
							</span>
							<span class="items">
								<span class="c-gris">产品关联 | </span>
								<span class="c-carbon pointer" @click="setConnect(item)">设置</span>
							</span>
							
						</p>
						<p class="h-block02">
							
							
							<span class="items">
								<span class="c-gris">权重 | </span>
								<span class="c-carbon pointer"  @click="setWeight(item)">暂无</span>
							</span>
							<span class="items">
								<span class="c-gris">推首 | </span>
								<span class="c-carbon pointer" @click="setPull(item)">设置</span>
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
					<status :id="itemData.id" @reload="getIdleData" v-if="2 === popNum"></status>
					<connection :id="itemData.id" :connectionPro="itemData.products" @reload="getIdleData" v-if="3 === popNum"></connection>
					<recommend ref="recommend" :id="itemData.id" :haveRecommend="havePulled" :allCommunity="itemData.communities" @reload="getIdleData" v-if="4 === popNum"></recommend>
					<weight :weight="itemData.weight" :id="itemData.id" @reload="getIdleData" v-if="7 === popNum"></weight>

				</div>
		</div>
		</transition>
	</div>
</template>

<script>
    import Loading from '@/components/base-comp/loading'
    import Status from "@/components/pop/status-pop"
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
       	  	havePulled:[],
       	  	single:''
       	  }
       },

       created() {
       	this.getIdleData()
       },
       computed: {
       	...mapGetters('idlesData',[
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
          ...mapActions('idlesData', [
               'getIdleData',
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
          setWeight(item) {
          	this.postingData(item)
          	this.setPop(7)
          }
       },
       components: {
       	Loading,
       	Status,
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
		flex:0 0 300px;
		display: flex;
	}
	.posting-action p {
       padding-top:16px;
	}
	.posting-action .h-block01 {
		flex:0 0 110px;
	}
	.posting-action .h-block02 {
		flex:0 0 80px;
	}
	.posting-action .h-block03 {
		flex:0 0 110px;
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

