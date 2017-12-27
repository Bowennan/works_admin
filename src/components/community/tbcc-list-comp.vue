<template>
	<div class="list-container">
		<show-detaile></show-detaile>
		<ul class="list-header">
			<li class="id-nickname">
                 <Checkbox v-model="single"></Checkbox>
			评论ID/类型</li>
			<li class="media-info">评论内容</li>
			<li class="works">评论来源</li>
			<li class="apply-info">评论信息</li>
			<li class="action-status">操作</li>
		</ul>

		<ul>
			<li>
				<ul class="list-contents">
					<li class="id-nickname more-line">
						<p class="f-col">
						   <Checkbox class="checkbox" v-model="single"></Checkbox>
						   <span class="c-carbon">12121</span>
						   <span class="c-carbon">直评</span>
						</p>
					</li>
					<li class="media-info more-line">
						<p class="c-azul pointer">查看</p>
					</li>
					<li class="works more-line">
					    <p>
					    	<span>评论者：<span class="c-carbon">影视，娱乐，体育</span></span>
					    	<span>所属内容：<span class="c-carbon">作品1，作品2</span></span>
					    	<span>标题：<span class="c-carbon">作品1，作品2</span></span>
					    </p>
					</li>
					<li class="apply-info more-line">
						<p>
							<span>社区：<span class="c-carbon">待审核</span></span>
							<span>赞同：<span class="c-carbon">5</span></span>
							<span>举报：<span class="c-carbon">56</span></span>
							<span>时间：<span class="c-carbon">2017-12-12</span></span>
						</p>
					</li>
					<li class="action-status more-line">
						<p>
							<span>审核状态 | <span class="c-carbon pointer">不通过</span></span>
							<span>热门评论 | <span class="c-carbon pointer">是</span></span>
							<span>评论状态 | <span class="c-carbon pointer">正常</span></span>
						</p>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
    import showDetaile from "@/components/community/show-detaile"
	export default {
       data() {
       	  return {
       	  	state: 0,
       	  	single:'',
       	  	opacityNum:1
       	  }
       },
       methods: {
       	imgOpacity() {
       		this.opacityNum = 0.3
       	},
        reverseImgOpacity() {
        	this.opacityNum = 1
        }
       },
       components: {
       	 showDetaile
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
		color:#bbbec4;
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

