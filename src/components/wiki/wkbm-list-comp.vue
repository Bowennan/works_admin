<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">品牌ID</li>
			<li class="posting-author">品牌名称</li>
			<li class="posting-info">产品数量</li>
			<li class="posting-con">Logo图</li>
			<li class="posting-action">操作</li>
		</ul>

		<ul>
			<li>
				<ul class="list-contents">
					<li class="posting-id more-line">
						<p>
							<span class="lines">13232</span>
						</p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="c-carbon">漫步者</span>
						</p>
					</li>
					<li class="posting-info more-line">
					    <p>
					    	<span class="lines c-gris">关联产品：<span class="c-carbon">48</span></span>
					    </p>
					</li>
					<li class="posting-con more-line">
						<p>
							<span class="lines c-carbon">查看</span>
							
						</p>
					</li>
					<li class="posting-action more-line">
						<p>
							<span class="lines c-gris">排序 | 
								<span class="c-carbon">6</span>
							</span>
							
							<span class="lines c-carbon">编辑</span>

							<span class="lines c-carbon">删除</span>
							
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
		min-width:200px;
		flex:1;
	}
	.posting-info {
		min-width: 240px;
		flex:1;
	}
	.posting-con {
		min-width: 200px;
		flex:1;
	}
	.posting-action {
		min-width: 164px;
		flex:1;
	}
	.posting-id{
		min-width:230px;
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

