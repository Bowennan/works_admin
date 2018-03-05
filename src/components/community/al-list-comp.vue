<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="id-nickname">
                 <Checkbox v-model="single"></Checkbox>
			回答ID/类型</li>
			<li class="media-info">回答内容</li>
			<li class="works">回答来源</li>
			<li class="apply-info">回答信息</li>
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
						   <span class="c-carbon">回复</span>
						</p>
					</li>
					<li class="media-info more-line">
						<p class="pointer c-azul">查看</p>
					</li>
					<li class="works more-line">
					    <p>
					    	<span class="c-gris">回答者：<span class="c-carbon">{{(item.user).nickname}}</span></span>
					    	<span class="c-gris">问题：<span class="c-carbon">暂无</span></span>
					    </p>
					</li>
					<li class="apply-info more-line">
						<p>
							<span class="c-gris">回复：<span class="c-carbon">{{item.reply_num}}</span></span>
							<span class="c-gris">赞同：<span class="c-carbon">{{item.agree_num}}</span></span>
							<span class="c-gris">举报：<span class="c-carbon">0</span></span>
							<span class="c-gris">时间：<span class="c-carbon">{{(item.created_at)}}</span></span>
						</p>
					</li>
					<li class="action-status more-line">
						<p>
							<span class="c-gris">热门回答 | <span class="c-carbon">是</span></span>
							<span class="c-gris">回答状态 | <span class="c-carbon">{{item.deleted_at===null? "正常" : "隐藏"}}</span></span>
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
       	  	state: 0,
       	  	single:''
       	  }
       },

       created() {
       	this.getReplyData({
       		summary_catalog: 'article'
       	}),
       	this.getWindowsSize()
       },
       computed: {
       	...mapGetters('replysData',[
              "datas"
       		])
       },

       methods: {
       		getWindowsSize() {
            this.coverWidth = window.document.body.offsetWidth;
            this.coverHeight = window.document.body.offsetHeight;
          },
          ...mapActions('replysData', [
               'getReplyData'
          	]),
       	...mapMutations('replysData', [
                'setPopStatus',
                'setPopNum',
                'sendId',
                'sendConnection',
                'setArticleIndex',
                'SET_POSTING_SOURCE',
                'GET_COMMUNITY_ID',
                'SET_COMMUNITY_CHIOCE',
                'GET_COMMUNITIES'
              ])
       	 },
       components: {
       	Loading
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
		flex:0 0 120px;
	}
	.more-line p > span {
		display: block;
		padding:2px 0;
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

