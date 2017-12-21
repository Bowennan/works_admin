<template>
	<div class="lists">
		<ul class="header">
			<li class="pro-id">
                 <Checkbox v-model="single"></Checkbox>
			ID/产品/日期</li>
			<li class="pro-img">图片</li>
			<li class="pro-info">产品榜信息</li>
			<li class="pro-url">链接</li>
			<li class="pro-loc">位置</li>
			<li class="pro-ope">操作</li>
		</ul>

		<ul>
			<li>
				<ul class="con-header">
					<li class="pro-id more-line">
						<p class="f-col">
						   <Checkbox class="checkbox" v-model="single"></Checkbox>
						   <span class="values">12121</span>
						   <span class="values">直评</span>
						   <span>2017-12-12</span>
						</p>
					</li>
					<li class="pro-img more-line">
						<p >
							<span style="color:#2d8cf0; cursor:pointer">查看</span>
						</p>
					</li>
					<li class="pro-info more-line">
					    <p>
					    	<span>产品ID：<span class="values">121212</span></span>
					    	<span>产品名字：<span class="values">机器人</span></span>
					    	<span>上市时间：<span class="values">2017-12-19</span></span>
					    </p>
					</li>
					<li class="pro-url more-line">
						<p>
							<span>社区链接<span class="values">(可点)</span></span>
							<span>百科链接<span class="values">(可点)</span></span>
						</p>
					</li>
					<li class="pro-loc">
						<p>
							<span>热门新机</span>
						</p>
					</li>
					<li class="pro-ope more-line">
						<p>
							<span>操作 | <span class="values">编辑</span></span>
							<span>状态 | <span class="values">正常</span></span>
						</p>
					</li>
				</ul>
			</li>
		</ul>

		<div v-show="cover" :style="{width:coverWidth+'px', height:coverHeight+'px'}" style="background:rgba(204, 204, 204, 0.59); position:fixed; top:0; left:0; z-index:1000" >
			<div style="width:500px; position:fixed; top:120px; left:50%; transform:translateX(-50%); z-index:2000">
				<banner-first @close="closeWindos"></banner-first>
			</div>
		</div>
	</div>
</template>

<script>
    import BannerFirst from '@/components/pop/banner-status-pop'
	export default {
		props: {
			cover: {
				type:Boolean,
				default: false
			}
		},
		created() {
           this.getWindowsSize()
		},
       data() {
       	  return {
       	  	state: 0,
       	  	single:'',
       	  	opacityNum:1,
       	  	coverHeight:0,
       	  	coverWidth:0,
       	  	show_Status:false
       	  }
       },
       methods: {
       	getWindowsSize() {
       		this.coverWidth = window.document.body.offsetWidth;
       		this.coverHeight = window.document.body.offsetHeight;
       	},
       	closeWindos() {
           this.$emit('close')
       	}
       },
       components: {
       	BannerFirst
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
	.pro-id {
		flex:1;
		min-width:310px;
	}
	.pro-img {
		flex:0 0 108px;
	}
	.pro-info {
		flex:0 0 204px;
	}
	.pro-url {
		flex:0 0 158px;
	}
	.pro-loc {
		flex:0 0 166px;
	}
	.pro-ope {
		flex:0 0 120px;
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
		padding:4px 0;
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

