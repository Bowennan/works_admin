<template>
	<div class="lists">
		<ul class="header">
			<li class="rec-type">推荐类型</li>
			<li class="rec-num">当前数量设置</li>
			<li class="rec-ope">操作</li>
		</ul>

		<ul>
			<li>
				<ul class="con-header">
					<li class="rec-type more-line">
						<p>
						   <span>产品推荐</span>
						</p>
					</li>
					<li class="rec-num more-line">
						<p>
							<span>4个</span>
						</p>
					</li>
					<li class="rec-ope more-line">
					    <p>
					    	  <Select size="small" v-model="model1" style="width:130px">
						        <Option v-for="item in 6" :value="item" :key="item">{{ item }}</Option>
						    </Select>
					    </p>
					</li>
				</ul>
			</li>
		</ul>
		<ul>
			<li>
				<ul class="con-header">
					<li class="rec-type more-line">
						<p>
						   <span>帖子推荐</span>
						</p>
					</li>
					<li class="rec-num more-line">
						<p>
							<span>10篇</span>
						</p>
					</li>
					<li class="rec-ope more-line">
					    <p>
					    	  <Select size="small" v-model="model1" style="width:130px">
						        <Option v-for="item in 10" :value="item" :key="item">{{ item }}</Option>
						    </Select>
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
       	  	single:'',
       	  	opacityNum:1,
       	  	model1:''
       	  }
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
		color:#80848f;
		font-weight: 400;
	}
	.rec-type {
		min-width: 400px;
		flex:1;
	}
	.rec-num {
		min-width: 400px;
		flex:1;
	}
	.rec-ope {
		min-width: 150px;
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
	.con-header li p .values {
		color:#80848f;
	}
	.more-line p > span {
		display: block;
		color:#bbbec4;
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
	.action-status p span.con {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
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
	.show-detaile {
		width:100%;
		min-height: 330px;
		border:1px solid #ccc;
		margin-bottom:10px;
		position: relative;
		box-sizing: border-box;
		padding:10px;
	}
	.de-action {
       position: absolute;
       bottom:0px;
       left:0px;
       width:100%;
       height: 30px;
       line-height: 30px;
       font-size: 12px;
       background: #f8f8f9;
       box-sizing: border-box;
       padding:0 20px;
       color:#bbbec4;
	}
	.drection {
		display: inline-block;
		padding:5px;
		cursor:pointer;
		font-weight: bold;
		margin:0 10px;
		color:#495060;
	}
	.operator {
		position: absolute;
		right:20px;
		top:0;
	}
	.value-font {
		color:#80848f;
	}
	.de-font {
		width:100%;
		margin-bottom:12px;
	}
	.de-img {
		width:100%;
		margin-bottom: 40px;
	}
	.de-img img {
		border:5px solid #ccc;
	}
	.tips {
		margin-right: 20px;
		margin-top:6px;
	}
</style>

