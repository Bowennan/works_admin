<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="id-nickname">
                 <Checkbox v-model="single"></Checkbox>
			评论ID/类型</li>
			<li class="media-info">评论内容</li>
			<li class="works">评论来源</li>
			<li class="apply-info">评论信息</li>
			<li class="action-status">操作</li>
		</ul>
        <div v-show="!datas.length">
        	<loading></loading>
        </div>
		<ul v-for="(item, index) in datas" :key="index">
			<li>
				<ul class="list-contents">
					<li class="id-nickname more-line">
						<p class="f-col">
						   <Checkbox class="checkbox" v-model="single"></Checkbox>
						   <span class="c-carbon">{{item.id}}</span>
						   <span class="c-carbon">直评</span>
						</p>
					</li>
					<li class="media-info more-line">
						<p class="c-azul pointer">查看</p>
					</li>
					<li class="works more-line">
					    <p>
					    	<span class="c-gris">评论者：<span class="c-carbon">{{(item.user).nickname}}</span></span>
					    	<span class="c-gris">所属内容：<span class="c-carbon">暂无</span></span>
					    	<span v-if='summary_catalog' class="c-gris">标题：<span class="c-carbon">{{(item[summary_catalog]).title}}</span></span>
					    </p>
					</li>
					<li class="apply-info more-line">
						<p>
							<span class="c-gris">回复：<span class="c-carbon">{{item.reply_num}}</span></span>
							<span class="c-gris">赞同：<span class="c-carbon">{{item.agree_num}}</span></span>
							<span class="c-gris">举报：<span class="c-carbon">暂无</span></span>
							<span class="c-gris">时间：<span class="c-carbon">{{item.created_at}}</span></span>
						</p>
					</li>
					<li class="action-status more-line">
						<p>
							<span class="c-gris">热门评论 | <span class="c-carbon">暂无</span></span>
							<span class="c-gris">评论状态 | <span class="c-carbon pointer" @click="setStatus(item.id)">{{item.deleted_at===null? "正常" : "隐藏"}}</span></span>
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
					<status :id="id" @reload="getCommentsData" v-if="2 === popNum"></status>

				</div>
		</div>
		</transition>
	</div>
</template>

<script>
    import Loading from '@/components/base-comp/loading'
    import Status from "@/components/pop/status-comments-pop"
    import {mapGetters, mapMutations, mapActions} from 'vuex'
	export default {
       data() {
       	  return {
       	  	coverWidth:0,
       	  	coverHeight:0,
       	  	id:null,
       	  	single:''
       	  }
       },

       created() {
       	  this.getCommentsData()
       },
       computed: {
       	...mapGetters('commentsData',[
              "datas",
              "summary_catalog",
               "popNum",
               "popStatus"
       		])
       },

       methods: {
       		getWindowsSize() {
            this.coverWidth = window.document.body.offsetWidth;
            this.coverHeight = window.document.body.offsetHeight;
          },
          ...mapActions('commentsData', [
               'getCommentData',
               'setPop'
          	]),

          getCommentsData() {
          	this.getCommentData({
	       		summary_catalog: this.summary_catalog
	       	})
          },

           postingData() {
          	this.getWindowsSize()
          },

		  setStatus(id) {
		  	        this.postingData()
		          	this.setPop(2)
		          	this.id = id
		          },
       	 },
       components: {
       	Loading,
       	Status
       }
   }
</script>

<style scoped>
	.apply-info {
		flex:0 0 197px;
	}
	.id-nickname {
		flex:0 0 158px;
	}
	.media-info {
		flex:0 0 156px;
	}
	.works {
		min-width: 398px;
		flex:1;
	}
	.action-status {
		flex:0 0 150px;
	}
	.more-line p > span {
		display: block;
	}
	.f-col {
		position: relative;
		padding-left:20px;
	}
	.checkbox {
		    position: absolute;
		    left: 0;
		    top: 36px;
	}

	
</style>

