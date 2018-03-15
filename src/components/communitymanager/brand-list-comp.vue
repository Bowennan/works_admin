<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">社区ID</li>
			<li class="posting-author">社区总人数</li>
			<li class="posting-info">社区内容信息</li>
			<li class="posting-con">社区功能模块</li>
			<li class="posting-action">社区操作</li>
		</ul>

		<ul v-for="(item, index) in datas" :key="index">
			<li>
				<ul class="list-contents">
					<li class="posting-id more-line">
						<p>
							<span class="lines">{{item.id}}</span>
							<span class="lines">{{item.name}}</span>
						</p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="lines c-gris"><span class="c-carbon">{{item.user_num}}人</span></span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p class="h-block01">
							<span class="items">
								<span class="c-gris">帖子：
                                   <span class="c-carbon">{{item.article_num}}</span>
								</span>
							</span>
							<span class="items">
								<span class="c-gris">作品：
                                   <span class="c-carbon">{{item.masterpiece_num}}</span>
								</span>
							</span>
							<span class="items">
								<span class="c-gris">提问：
                                   <span class="c-carbon">{{item.question_num}}</span>
								</span>
							</span>
							<span class="items">
								<span class="c-gris">二手：
                                   <span class="c-carbon">{{item.idle_num}}</span>
								</span>
							</span>
						</p>
						<p class="h-block02">
							<span class="items">
								<span class="c-gris">好价：
                                   <span class="c-carbon">{{item.coupons_num}}</span>
								</span>
							</span>
							<span class="items">
								<span class="c-gris">爆料：
                                   <span class="c-carbon">{{item.disclose_num}}</span>
								</span>
							</span>
							<span class="items">
								<span class="c-gris">评论：
                                   <span class="c-carbon">{{item.comment_num}}</span>
								</span>
							</span>
							<span class="items">
								<span class="c-gris">装备秀：
                                   <span class="c-carbon">{{item.exhibition_num}}</span>
								</span>
							</span>
						</p>
					</li>
					<li class="posting-con more-line">
					    <p>
					    	<span class="lines c-gris"><span class="c-carbon">{{item.summary_catalog}}</span></span>
					    </p>
					</li>
					<li class="posting-action more-line">
						<p>
							<span class="lines">
								<span class="c-gris">社区状态 | </span>
								<span>{{item.status == 0 ? '隐藏' : '正常'}}</span>
							</span>
							<span class="lines">
								<span class="c-gris">社区编辑 | </span>
								<span>设置</span>
							</span>
						</p>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
    import {mapGetters, mapActions, mapMutations} from 'vuex'
	export default {
       data() {
       	 return {
       	 }
       },
       computed: {
       	...mapGetters('communitymanagerData', [
               'datas'
       		])
       },
       created() {
       	this.communityManager({
       		relation_type: 'brand'
       	})
       	console.log(this.datas)
       },
       methods: {
       	...mapActions('communitymanagerData', [
               'communityManager'
       		]),
       	getWindowsSize() {
       		this.coverWidth = window.document.body.offsetWidth;
       		this.coverHeight = window.document.body.offsetHeight;
       	}
       },
       components: {
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
		min-width: 260px;
		flex:1;
		display: flex;
	}
	.posting-con {
		min-width: 120px;
		flex:1;
	}
	.posting-action {
		min-width: 250px;
		flex:1;
	}
    .h-block01 {
		flex:0 0 100px;
	}
    .h-block02 {
		flex:0 0 100px;
	}
    .h-block03 {
		flex:0 0 60px;
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



