<template>
	<div class="lists">
		<h4 class="title">模板编辑记录</h4>
		<ul class="header">
			<li class="id-info">消息ID</li>
			<li class="sender">编辑者</li>
			<li class="send-obj">对象</li>
			<li class="classfiy">归类</li>
			<li class="send-time">发布时间</li>
			<li class="send-con">内容</li>
			<li class="action">操作</li>
		</ul>

		<ul>
			<li>
				<ul class="con-header">
					<li class="id-info">
						<p>1025</p>
					</li>
					<li class="sender">
						<p>yangcong</p>
					</li>
					<li class="send-obj">
						<p>全部对象</p>
					</li>
					<li class="classfiy more-line">
					    <p>
					     <span>模板归类</span>
					     <span>名称</span>
					    </p>
					</li>
					<li class="send-time more-line">
					    <p>
					     <span>年月日</span>
					     <span>时分秒</span>
					    </p>
					</li>
					<li class="send-con">
						<p>
							<span>
								看到了机房建设力度jfk了就是的放到数据库了发生的法撒旦克里夫稍等机房老师是的飞机轮是大乐法律上的看到了机房建设力度jfk了就是的放到法撒旦克里夫稍等里夫稍等机房老师是的飞机轮是大家受到法律上的就是的方法监考老师的副食店解放拉萨副食店解放螺丝钉复试独家快乐法律上的复试独家快乐法律上的复试独家快乐法律上的
							</span>
						</p>
					</li>
					<li class="action more-line">
						<p>
					     <span>编辑</span>
					     <span>删除</span>
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
       	  }
       }
   }
</script>

<style scoped>
	.lists {
		width:96%;
		margin-left:28px;
		margin-top:40px;
	}
	.title {
		font-size:14px;
		font-weight: bold;
		color:#495060;
		margin-bottom:10px;
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
		font-weight: bold;
	}
	.more-line p span{
       display: block;
	}
	.send-con {
		min-width:290px;
		flex:1;
	}
	.id-info {
		flex:0 0 110px;
	}
	.sender {
		flex:0 0 120px;
	}
	.send-obj {
		flex:0 0 102px;
	}
    .classfiy {
    	flex:0 0 108px;
    }
	.send-time {
		flex:0 0 167px;
	}
	.action {
		flex:0 0 115px;
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
	.send-time p span {
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
	.send-con p span {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4;
		overflow: hidden;
	}
</style>

