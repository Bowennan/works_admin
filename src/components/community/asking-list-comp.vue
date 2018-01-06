<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">
             <Checkbox v-model="single">ID/标题/日期</Checkbox>
			</li>
			<li class="posting-author">作者信息</li>
			<li class="posting-info">提问信息</li>
			<li class="posting-con">产品关联</li>
			<li class="posting-action">提问状态与操作</li>
		</ul>

		<div v-show="!questionListData.length">
        	<loading></loading>
        </div>

		<ul v-for="(item, index) in questionListData" :key="index">
			<li>
				<ul class="list-contents">
					<li class="posting-id more-line">
						<p style="position:relative; box-sizing:border-box; padding-left:20px"> 
							<Checkbox style="position:absolute; left:0; top:34px" v-model="single"></Checkbox>
							<span class="lines">{{item.id}}</span>
							<span class="lines">{{item.title}}</span>
							<span class="lines c-gris">{{item.updated_at}}</span>
						</p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="lines">{{(item.user).user_id}}</span>
							<span class="lines">{{(item.user).nickname}}</span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p>
							<span class="lines c-gris">回答： <span class="c-carbon">{{item.comment_num}}</span></span> 
							<span class="lines c-gris">社区： <span class="c-carbon">{{(item.communities).length}}</span></span> 
							
							<Poptip  trigger="hover" placement="bottom" width="300">
						        <span>浏览、收藏、其他</span>
						        <div class="pop-cons" slot="content">
						           	  <p class="posting-pop c-gris" style="margin-bottom:6px">
						           	  	<span>社区归属：</span>
						           	  	<span class="c-carbon" style="padding:0 6px"  v-for="(inneritem, innerindex) in item.communities" :key="innerindex">{{inneritem.name}}</span>
								        		     <span class="c-carbon" v-if="!(item.communities).length">无</span>
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
						           	  	<span>TAG:</span>
						           	  	<span class="c-carbon" style="padding:0 6px"  v-for="(tag, tagindex) in item.tags" :key="tagindex">{{tag.name}}</span>
								        		     <span v-if="!(item.tags).length">无</span>
						           	  </p>
						        </div>
    						</Poptip>
						</p>
					</li>
					<li class="posting-con">
					    <p class="c-gris">产品ID： <span class="c-carbon" style="padding:0 3px"  v-for="(products, productsindex) in item.products" :key="productsindex">{{products.id}}</span>
					    <span v-if="!(item.products).length">无</span></p>
					</li>
					<li class="posting-action">
						<p class="h-block01">
							<span class="items">
								<span class="c-gris">社区归类 |</span>
								<span class="pointer">设置</span>
							</span>
							<span class="items">
								<span class="c-gris">产品关联 |</span>
								<span class="pointer">设置</span>
							</span>
							<span class="items">
								<span class="c-gris">提问状态 |</span>
								<span class="c-carbon pointer">{{item.status===0? "隐藏" : item.status===1? "正常" : "草稿"}}</span>
							</span>
						</p>
						<p class="h-block02">
							<span class="items">
								<span class="c-gris">推首 |</span>
								<span class="pointer">设置</span>
							</span>
							<span class="items">
								<span class="c-gris">权重 |</span>
								<span class="pointer">{{item.weight}}</span>
							</span>
							
							<span class="items">
								<span class="c-gris">TAG |</span>
								<span class="pointer">设置</span>
							</span>
						</p>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>

    import Loading from '@/components/base-comp/loading'
	export default {
		props: {
			questionListData: {
				type:Array
			}
		},
       data() {
       	  return {
       	  	state: 0,
       	  	single:''
       	  }
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
</style>

