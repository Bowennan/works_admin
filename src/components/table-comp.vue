<template>
	<div class="table-box">
		<ul class="header clear">
			<li class="header-item01">ID/昵称</li>
			<li class="header-item02">账号信息</li>
			<li class="header-item03">原创内容</li>
			<li class="header-item04">详细数据</li>
			<li class="header-item05">用户资料</li>
			<li class="header-item06">操作</li>
		</ul>
		<ul class="contents">
			<li>
				<ul class="cons clear">
					<li class="header-item01 items">
						<div>
							<p class="action-col">106898</p>
							<p class="action-col">会跳舞的车</p>
							<p>😮</p>
						</div>
					</li>
					<li class="header-item02 items">
						<div>
							<p>
							   <span class="other-col">等级:</span>
							   <span>6级</span>
							</p>
							<p>
								<span class="other-col">积分:</span>
								<span>13133</span>
							</p>
							<p>
								<span class="other-col">信用:</span>
								<span>56</span>
							</p>
						</div>
						
					</li>
					<li class="header-item03 items">
						<div>
							<p class="sub-items">
								<span>
									<span class="other-col">帖子:</span>
								    <span>33</span>
								</span>
								<span>
									<span class="other-col">好价:</span>
									<span>33</span>
								</span>
							</p>
							<p class="sub-items">
								<span>
									<span class="other-col">作品:</span>
								    <span>33</span>
								</span>
								<span>
									<span class="other-col">装备:</span>
									<span>33</span>
								</span>
							</p>
							<p class="sub-items">
								<span>
									<span class="other-col">问答:</span>
								    <span>33</span>
								</span>
								<span>
									<span class="other-col">爆料:</span>
									<span>33</span>
								</span>
							</p>
							<p class="sub-items">
								<span>
									<span class="other-col">闲置:</span>
								    <span>13</span>
								</span>
								<span>
									<span class="other-col">评论:</span>
									<span>33</span>
								</span>
							</p>
						</div>
						
					</li>
					<li class="header-item04 items">
						<div>
							<p>
								<span class="other-col">加入社区:</span>
								<span>3</span>
							</p>
							<p>
								<span class="other-col">其他:</span>
								<span class="action-col">的金科路附近的的解放军的的金科路附近的的思考jfk了</span>
							</p>
							
						</div>
						
					</li>
					<li class="header-item05 items">
						<div>
							<p>
								<span class="other-col">社交绑定:</span>
								<span>3</span>
							</p>
							<p>
								<span class="other-col">自媒体:</span>
								<span>12</span>
							</p>
							<p>
								<span class="other-col">实名认证:</span>
								<span>未绑定</span>
							</p>
							<p>
								<span class="other-col">收货地址:</span>
								<span>5</span>
							</p>
						</div>
						
					</li>
					<li class="header-item06 items">
						<div class="action-col">
							<p class="sub-items">
								<span>
									<span>发信息</span>
								</span>
								<span>
									<span>昵称管理</span>
								</span>
							</p>
							<p class="sub-items">
								<span>
									<span>权限设置</span>
								</span>
								<span>
									<span style="vertical-align:middle">标注
                                       <Icon type="ios-pricetags" style="vertical-align:middle" size=14></Icon>
									</span>
								</span>
							</p>
							<p class="sub-items">
								<span>
									<span>操作日志</span>
								</span>
								<span>
									<span>禁用</span>
								</span>
							</p>
							<p class="sub-items">
								<span>
									<span>私信查看</span>
								</span>
								<span>
									
 										<slot name="tbt"></slot>
									
								</span>
							</p>
						</div>
						
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
    .header {
    	min-width:1052px;
    	height:42px;
    	line-height: 42px;
    	box-sizing: border-box;
    	border-top:1px solid #dddee1;
    	border-bottom:1px solid #dddee1;
    }
	.header li{
       float:left;
       font-size:12px;
       color:#1c2438;
       font-weight: bold;
	}
	.header li:nth-child(1) {
		padding-left:30px;
	}
	.header li:nth-child(2) {
		padding-left:26px;
	}
	.header li:nth-child(3) {
		padding-left:24px;
	}
	.header li:nth-child(4) {
		padding-left:20px;
	}
	.header li:nth-child(5) {
		padding-left:16px;
	}
	.header li:nth-child(6) {
		padding-left:16px;
	}
	.header-item01 {
		width:14%;
		min-width:145px;
	}
	.header-item02 {
		width:13%;
		min-width:128px;
	}
	.header-item03 {
		width:19%;
		min-width:208px;
	}
	.header-item04 {
		width:19%;
		min-width:208px;
	}
	.header-item05 {
		width:14%;
		min-width:148px;
	}
	.header-item06 {
		width:17%;
		min-width:183px;
	}
	.clear:after {
		clear:both;
		display: block;
		content:'';
	}
    .cons {
    	box-sizing: border-box;
    	padding:0 10px;
    	border-bottom:1px solid #dddee1;
    }
	.cons li {
	   float:left;
       font-size:12px;
       box-sizing: border-box;
       height:96px;
       position:relative;
	}
	.cons li div {
	  width:100%;
	  box-sizing: border-box;
	  padding:5px 20px;
      position:absolute;
      top:50%;
      left:50%;
      transform: translate(-50%, -50%);
	}
	.cons .items {
		display: flex;
		flex-direction: column;
	}
	.cons .items p {
		flex:1;
		line-height: 1.8;
	}
	.cons .items .sub-items {
		display: flex;
	}
	.cons .items .sub-items span {
		flex:1;
	}
	.cons .action-col {
		color:#80848f;
	}
	.cons .other-col {
		color:#bbbec4;
	}
</style>