<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">
               <Checkbox v-model="single">产品名称</Checkbox>
			</li>
			<li class="posting-author">推荐信息</li>
			<li class="posting-info">推荐理由</li>
			<li class="posting-action">操作</li>
		</ul>

		<ul>
			<li>
				<ul class="list-contents">
					<li class="posting-id more-line">
						<p style="position:relative; padding-left:20px;"> 
							<Checkbox style="position:absolute; top:36px; left:0" v-model="single"></Checkbox>
							<span class="lines">IPHONE X</span>
						</p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="lines c-gris">联系方式：<span class="c-carbon">132132454213</span></span>
							<span class="lines c-gris">时间：<span class="c-carbon">2017-12-12</span></span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p>
							
                           <Poptip  trigger="hover" placement="bottom" width="300">
						       <span class="c-carbon">的咯见附件发动机上了飞机上的飞机螺丝钉看法圣诞节分厘卡似的发生的记录反馈速度飞机迪斯科浪费见佛为附件为jfk了集散地立刻解放拉萨大家看了放假了士大夫解放昆仑山搭街坊就考了多少就废了</span>
						        <div class="con-pop" slot="content">
						           <div style="width:100%; height:130px; white-space:normal" class="poptip-box">
						           	 的咯见附件发动机上了飞机上的飞机螺丝钉看法圣诞节分厘卡似的发生的记录反馈速度飞机迪斯科浪费见佛为附件为jfk了集散地立刻解放拉萨大家看了放假了士大夫解放昆仑山搭街坊就考了多少就废了的咯见附件发动机上了飞机上的飞机螺丝钉看法圣诞节分厘卡似的发生的记录反馈速度飞机迪 
						           </div>
						        </div>
    						</Poptip>
					
						</p>
					</li>
					<li class="posting-action more-line">
						<p>
							<span class="lines c-gris">回馈 | 
								<span class="c-carbon">未审核</span>
							</span>
							<span class="lines c-gris">图片 | 
								<span class="c-carbon">查看</span>
							</span>
							<span class="lines c-gris">链接 | 
								<span class="c-carbon">查看</span>
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
		min-width: 180px;
		flex:1;
	}
	.posting-info {
		min-width: 440px;
		flex:1;
	}
	.posting-action {
		min-width: 200px;
		flex:1;
	}
	.items {
		display: block;
		padding:2px 0;
	}
	.posting-id{
		min-width:180px;
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
	.hidden-part {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
</style>

