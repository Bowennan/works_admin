<template>
	<div class="list-container">
		<h4 class="list-title">发布消息记录</h4>
		<ul class="list-header">
			<li class="id-info">消息ID</li>
			<li class="sender">发布者</li>
			<li class="send-obj">对象</li>
			<li class="send-time">发布时间</li>
			<li class="send-con">发布内容</li>
			<li class="send-status">发布状态</li>
		</ul>

		<ul>
			<li>
				<ul class="list-contents">
					<li class="id-info">
						<p>1025</p>
					</li>
					<li class="sender">
						<p>yangcong</p>
					</li>
					<li class="send-obj">
						<p>全部对象</p>
					</li>
					<li class="send-time">
					    <p>
					     <span>年月日</span>
					     <span>时分秒</span>
					    </p>
					</li>
					<li class="send-con">
						<p>
							
							 <Poptip trigger="hover" placement="bottom" width="460">
						        <span class="font-hidden">
									看到了机房建设力度jfk了就是的放到数据库了发生的法撒旦克里夫稍等机房老师是的飞机轮是大乐法律上的看到了机房建设力度jfk了就是的放到法撒旦克里夫稍等里夫稍等机房老师是的飞机轮是大家受到法律上的就是的方法监考老师的副食店解放拉萨副食店解放螺丝钉复试独家快乐法律上的复试独家快乐法律上的复试独家快乐法律上的
								</span>
						        <div style="white-space:normal" slot="content">
						           <span>
						           	看到了机房建设力度jfk了就是的放到数据库了发生的法撒旦克里夫稍等机房老师是的飞机轮是大乐法律上的看到了机房建设力度jfk了就是的放到法撒旦克里夫稍等里夫稍等机房老师是的飞机轮是大家受到法律上的就是的方法监考老师的副食店解放拉萨副食店解放螺丝钉复试独家快乐法律上的复试独家快乐法律上的复试独家快乐法律上的的放到数据库了发生的法撒旦克里夫稍等机房老师是的飞机轮是大乐法律上的看到了机房建设力度jfk了就是的放到法撒旦克里夫稍等里夫稍等
						           </span>
						        </div>
						    </Poptip>
						</p>
					</li>
					<li class="send-status">
						<p>成功/失败</p>
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
	.send-con {
		min-width:360px;
		flex:1;
	}
	.id-info {
		flex:0 0 148px;
	}
	.sender {

		flex:0 0 138px;
	}
	.send-obj {
		flex:0 0 158px;
	}
	.send-time {
		flex:0 0 120px;
	}
	.send-status {
		flex:0 0 90px;
	}
	
	
	.send-time p > span {
		display: block;
	}
</style>

