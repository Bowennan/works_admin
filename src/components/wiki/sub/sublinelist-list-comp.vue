<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">ID</li>
			<li class="posting-author">店名</li>
			<li class="posting-info">详细地址</li>
			<li class="posting-con">其他信息</li>
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
							<span class="lines">木叶村店</span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p>
							<span class="lines c-gris">地区： <span class="c-carbon">广东省深圳市</span></span>

							<span class="lines c-gris">详细地址： <span class="c-carbon">广东省深圳市华强北九方购物中心</span></span>
						</p>
					</li>
					<li class="posting-con more-line">
						<p>
						
								<span class="lines c-gris">联系电话：
                                   <span class="c-carbon">张先生 15225546658</span>
								</span>
							
						
								<span class="lines c-gris">营业时间：
                                   <span class="c-carbon">2018-01-19</span>
								</span>
							
						</p>
					</li>
					<li class="posting-action more-line">
						<p>
							<span class="lines c-carbon">编辑 </span>

							<span class="lines c-carbon">删除 </span>
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
		min-width:150px;
		flex:1;
	}
	.posting-info {
		min-width: 400px;
		flex:1;
	}
	.posting-con {
		min-width: 280px;
		flex:1;
	}
	.posting-action {
		min-width: 100px;
		flex:1;
	}
	.posting-id{
		min-width:110px;
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

