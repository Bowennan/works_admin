<template>
	<div class="lists">
		<ul class="header">
			<li class="posting-id">
             <Checkbox v-model="single">ID/标题/日期</Checkbox>
			</li>
			<li class="posting-author">作者信息</li>
			<li class="posting-info">二手信息</li>
			<li class="posting-con">产品关联</li>
			<li class="posting-action">二手状态与操作</li>
		</ul>

		<ul v-for="(item, index) in datas" :key='index'>
			<li>
				<ul class="con-header">
					<li class="posting-id more-line">
						<p style="position:relative; box-sizing:border-box; padding-left:20px"> 
							<Checkbox style="position:absolute; left:0; top:34px" v-model="single"></Checkbox>
							<span class="lines values">{{item.id}}</span>
							<span class="lines values">{{item.title}}</span>
							<span class="lines">{{item.updated_at | sliceStr}}</span>
						</p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="lines values">{{item.user_id}}</span>
							<span class="lines values">暂无</span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p>
							<span class="lines">评论: <span class="values">{{item.comment_num}}</span></span> 
							<span class="lines">闲鱼: <span class="values">查看</span></span> 
							<span class="lines">转转: <span class="values">查看</span></span> 
							
							<Poptip  trigger="hover" placement="bottom" width="300">
						        <span class="lines c-gris">其他: <span class="c-carbon">价格、赞、收藏等</span></span> 
						        <div class="con-pop" slot="content">
						           <div style="width:100%; height:130px; white-space:normal" class="poptip-box">
						           	  <p>
						           	  	<span>社区归属：</span>
						           	  	<span class="c-carbon" style="padding:0 6px"  v-for="(inneritem, innerindex) in item.communities" :key="innerindex">{{inneritem.name}}</span>
								        		     <span v-if="!(item.communities).length">无</span>
						           	  </p>
						           	  <p style="display:flex">
						           	  	<span style="flex:1">
						           	  		总浏览量：<span class="c-carbon">{{item.read_num}}</span>
						           	  	</span>
						           	  	<span style="flex:1">
						           	  		日浏览量：<span class="c-carbon">无</span>
						           	  	</span>
						           	  </p>
						           	  <p style="display:flex">
						           	  	<span style="flex:1">
						           	  		赞：<span class="c-carbon">{{item.agree_num}}</span>
						           	  	</span>
						           	  	<span style="flex:1">
						           	  		踩：<span class="c-carbon">{{item.disagree_num}}</span>
						           	  	</span>
						           	  </p>
						           	  <p style="display:flex">
						           	  	<span style="flex:1">
						           	  		转让价：<span class="c-carbon">{{item.sell_price}}</span>
						           	  	</span>
						           	  	<span style="flex:1">
						           	  		入手价：<span class="c-carbon">{{item.buy_price}}</span>
						           	  	</span>
						           	  </p>
						           	  <p style="display:flex">
						           	  	<span style="flex:1">
						           	  		收藏：<span class="c-carbon">{{item.collect_num}}</span>
						           	  	</span>
						           	  	<span style="flex:1">
						           	  		举报：<span class="c-carbon">暂无</span>
						           	  	</span>
						           	  </p>
						           </div>
						        </div>
    						</Poptip>
						</p>
					</li>
					<li class="posting-con">
					    <p class='c-gris'>产品ID： <span class="c-carbon" style="padding:0 3px"  v-for="(products, productsindex) in item.products" :key="productsindex">{{products.id}}</span>
					    <span v-if="!(item.products).length">无</span></p>
					</li>
					<li class="posting-action">
						<p>
							<span class="items">
								<span>状态 |</span>
								<span class="values">{{item.status == 1? "正常" : "隐藏"}}</span>
							</span>
							<span class="items">
								<span>权重 |</span>
								<span class="values">{{item.weight}}</span>
							</span>
						</p>
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
	export default {
       data() {
       	  return {
       	  	state: 0,
       	  	single:''
       	  }
       },

       created() {
       	this.getChooseIdleData()
       },

       computed: {
       	...mapGetters('chooseIdleData', [
               'datas'
       		])
       },

       methods: {
       	...mapActions('chooseIdleData', [
              'getChooseIdleData'
       		])
       }

   }
</script>

<style scoped>
	.lists {
		width:96%;
		margin-left:28px;
		margin-top:20px;
	}
	.header {
		box-sizing: border-box;
		width:100%;
		height: 42px;
		line-height: 42px;
		border-top:1px solid #ccc;
		border-bottom:1px solid #ccc;
		display:flex;
		color:#1c2438;
		font-weight: bold;
	}
	.con-header {
		box-sizing: border-box;
		width:100%;
		height: 96px;
		display: flex;
		border-bottom:1px solid #ccc;
		color:#bbbec4;
		font-weight: 400;
	}
	.col {
		line-height: 18px;
	}
	.posting-author {
		flex:0 0 120px;
	}
	.posting-info {
		flex:0 0 200px;
	}
	.posting-con {
		flex:0 0 228px;
	}
	.posting-action {
		flex:0 0 220px;
	}
	.items {
		display: block;
		padding:2px 0;
	}
	.posting-id{
		min-width:232px;
		flex:1;
	}
	.header li, .con-header li {
        box-sizing: border-box;
        padding:0 18px;
	}
	.con-header li p {
		height: 95px;
		display: table-cell;
		vertical-align: middle;
	}
	.con-header li p span {
		padding:2px 0;
	}
	.more-line p .lines {
		display: block;
	}
	.con-box {
		display: block;
        width:100%;
        max-height:54px; 
        overflow: hidden;
        position: relative;
	}
	.points {
		display:block;
		width:36px;
		height: 18px;
        position:absolute;
        bottom:0;
        right:0;
        background: -webkit-linear-gradient(left, transparent, #fff 55%);
		background: -o-linear-gradient(right, transparent, #fff 55%);
		background: -moz-linear-gradient(right, transparent, #fff 55%);
		background: linear-gradient(to right, transparent, #fff 55%);
		font-size:14px;
		font-weight: bold;
		text-align: right;
		padding-left:20px;
	}
	.action-con p span {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
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
	.values {
		color:#80848f;

	}
</style>

