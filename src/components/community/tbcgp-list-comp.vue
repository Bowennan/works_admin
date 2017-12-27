<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">
             <Checkbox v-model="single">ID/标题/日期</Checkbox>
			</li>
			<li class="posting-author">作者信息</li>
			<li class="posting-info">好价信息</li>
			<li class="posting-con">产品关联</li>
			<li class="posting-action">好价状态与操作</li>
		</ul>

		<ul>
			<li>
				<ul class="list-contents">
					<li class="posting-id more-line">
						<p style="position:relative; box-sizing:border-box; padding-left:20px"> 
							<Checkbox style="position:absolute; left:0; top:34px" v-model="single"></Checkbox>
							<span class="lines c-carbon">13232</span>
							<span class="lines c-carbon">你知道你活的比狗惨吗？你知道你活的比狗惨吗？你知道你活的比狗惨吗？你知道你活的比狗惨吗？</span>
							<span class="lines c-gris">2017-12-9</span>
						</p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="lines c-carbon">1212</span>
							<span class="lines c-carbon">哈，你不配</span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p>
							<span class="lines c-gris">评论: <span class="c-carbon">12</span></span> 
							<span class="lines c-gris">白菜价: <span class="c-carbon">点击新建页面</span></span> 
							
							<Poptip  trigger="hover" placement="bottom" width="300">
						        <span class="lines c-gris">其他: <span class="c-carbon">价格、赞、收藏等</span></span> 
						        <div class="con-pop" slot="content">
						           <div style="width:100%; height:130px; white-space:normal" class="poptip-box">
						           	  <p>
						           	  	<span>社区归属：</span>
						           	  	<span class="c-carbon">苹果社区、无人机社区</span>
						           	  </p>
						           	  <p style="display:flex">
						           	  	<span style="flex:1">
						           	  		总浏览量：<span class="c-carbon">21212</span>
						           	  	</span>
						           	  	<span style="flex:1">
						           	  		日浏览量：<span class="c-carbon">1231</span>
						           	  	</span>
						           	  </p>
						           	  <p style="display:flex">
						           	  	<span style="flex:1">
						           	  		赞：<span class="c-carbon">1212</span>
						           	  	</span>
						           	  	<span style="flex:1">
						           	  		踩：<span class="c-carbon">122</span>
						           	  	</span>
						           	  </p>
						           	  <p style="display:flex">
						           	  	<span style="flex:1">
						           	  		优惠：<span class="c-carbon">1212</span>
						           	  	</span>
						           	  	<span style="flex:1">
						           	  		收藏：<span class="c-carbon">122</span>
						           	  	</span>
						           	  </p>
						           	  <p>
						           	  	<span>
						           	  		举报：<span class="c-carbon">1212</span>
						           	  	</span>
						           	  </p>
						           </div>
						        </div>
    						</Poptip>
						</p>
					</li>
					<li class="posting-con">
					    <p class="c-gris">产品ID： <span class="c-carbon">12151</span></p>
					</li>
					<li class="posting-action">
						<p class="h-block01">
							<span class="items">
								<span class="c-gris">好价状态 | </span>
								<span class="c-carbon pointer">隐藏</span>
							</span>
							<span class="items">
								<span class="c-gris">社区归类 | </span>
								<span class="c-carbon pointer">设置</span>
							</span>
							<span class="items">
								<span class="c-gris">审核状态 | </span>
								<span class="c-carbon pointer">不通过</span>
							</span>
							
						</p>
						<p class="h-block02">
							<span class="items">
								<span class="c-gris">产品关联 | </span>
								<span class="c-carbon pointer">设置</span>
							</span>
							
							<span class="items">
								<span class="c-gris">权重 | </span>
								<span class="c-carbon pointer">123</span>
							</span>
							<span class="items">
								<span class="c-gris">推首 | </span>
								<span class="c-carbon pointer">设置</span>
							</span>
						</p>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
       data() {
       	  return {
       	  	state: 0,
       	  	single:''
       	  }
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
		flex:0 0 320px;
		display: flex;
	}
	.posting-action p {
       padding-top:16px;
	}
	.posting-action .h-block01 {
		flex:0 0 110px;
	}
	.posting-action .h-block02 {
		flex:0 0 100px;
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
</style>

