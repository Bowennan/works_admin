<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="action-id">操作ID</li>
			<li class="actor">操作者</li>
			<li class="action-name">操作行为</li>
			<li class="action-con">操作内容</li>
			<li class="action-obj more-line col">
				<p>
					<span>操作对象</span>
					<span>(ID昵称)</span>
				</p>
			</li>
			<li class="action-info">操作信息</li>
		</ul>

		<ul>
			<li>
				<ul class="list-contents">
					<li class="action-id">
						<p>1025</p>
					</li>
					<li class="actor">
						<p>萤火虫之舞</p>
					</li>
					<li class="action-name">
						<p>昵称违规</p>
					</li>
					<li class="action-con">
					    <p>
					    	<span class="font-hidden">
					    		发布信息：的接口浪费精力都开始就电视剧法律上的放到手机发了是放到手机发了电视剧法律上的
					    始就电视剧法律上的放到手机发了是放到手机发了电视剧法律上的
					    	</span>
					    </p>
					</li>
					<li class="action-obj more-line">
						<p>
							<span>1265</span>
							<span>去年买的</span>
						</p>
					</li>
					<li class="action-info more-line">
						<p>
							<span>时间</span>
							<span>2017-02-03</span>
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
	.col {
		line-height: 18px;
	}
	.action-obj {
		flex:0 0 122px;
	}
	.action-id {
		flex:0 0 126px;
	}
	.actor {
		flex:0 0 118px;
	}
	.action-name {
		flex:0 0 116px;
	}
	.action-con {
		min-width:247px;
		flex:1;
	}
	.action-info {
		flex:0 0 288px;
	}
	.header li, .con-header li {
        box-sizing: border-box;
        padding:0 18px;
	}
	.more-line p span {
		display: block;
	}
</style>

