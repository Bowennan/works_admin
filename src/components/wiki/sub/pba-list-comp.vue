<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">ID/昵称</li>
			<li class="posting-author">个人信息</li>
			<li class="posting-info">品牌产品关联</li>
			<!-- <li class="posting-con">视频信息</li> -->
			<li class="posting-action">操作</li>
		</ul>

		<ul>
			<li>
				<ul class="list-contents">
					<li class="posting-id more-line">
						<p>
							<span class="lines">13232</span>
							<span class="lines">亏大发了水立方</span>
						</p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="lines c-gris">姓名：<span class="c-carbon">XXX</span></span>
							<span class="lines c-gris">电话：<span class="c-carbon">443461321651</span></span>
							<span class="lines c-gris">岗位：<span class="c-carbon">产品经理</span></span>
							<span class="lines c-gris">行业J：<span class="c-carbon">XXXXX</span></span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p>
							<span class="lines c-gris">品牌： <span class="c-carbon">XX</span></span>

							<Poptip style="white-space: normal"  trigger="hover" placement="bottom" width="300">
						        <span class="lines c-gris">产品关联： <span class="c-carbon font-hidden">各类产品，各类产品，，各类产品,，各类产品，各类产品,，各类产品，各类产品,，各类产品，各类产品,，各类产品各类产品，各类产品,，各类产品，各类产品,XXXXXXXXXX,XXXXXX</span></span> 
						        <div class="pop-cons" slot="content">
						           	  <p class="posting-pop c-gris" style="margin-bottom:6px">
						           	  	<span>关联产品：</span>
						           	  	<span class="c-carbon" style="padding:0 6px">一堆产品一堆产品一堆产品一堆产品一堆产品一堆产品一堆产品一堆产品一堆产品一堆产品一堆产品一堆产品一堆产品</span>
						           	  	<!-- <span v-if="!(item.communities).length">无</span> -->
						           	  </p>
					           </div>
    						</Poptip> 
						</p>
					</li>
					<!-- <li class="posting-con more-line">
						<p>
						
								<span class="lines c-gris">编辑 | 
                                   <span class="c-carbon">查看</span>
								</span>
							
						
								<span class="lines c-gris">参数 | 
                                   <span class="c-carbon">查看</span>
								</span>
							
						
								<span class="lines c-gris">图集 | 
                                   <span class="c-carbon">查看</span>
								</span>
							
						</p>
					</li> -->
					<li class="posting-action more-line">
						<p>
							<span class="lines c-gris">前往编辑 </span>
						</p>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {

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
		min-width:260px;
		flex:1;
	}
	.posting-info {
		min-width: 320px;
		flex:1;
	}
/*	.posting-con {
		min-width: 216px;
		flex:1;
	}*/
	.posting-action {
		min-width: 200px;
		flex:1;
	}
	.posting-id{
		min-width:250px;
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

