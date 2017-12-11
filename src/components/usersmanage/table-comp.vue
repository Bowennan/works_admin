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
		<ul class="contents" v-for="item in 10">
			<li>
				<ul class="cons clear">
					<li class="header-item01 items">
						<div class="position-box">
							<p class="action-col">106898</p>
							<p class="action-col">会跳舞的车</p>
							<p>😮</p>
						</div>
					</li>
					<li class="header-item02 items">
						<div class="position-box">
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
						<div class="position-box">
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
							<p>
								
									<span class="other-col">加入社区:</span>
									<span>3</span>
								
							
									
								    <Poptip trigger="hover" placement="bottom-start">
								        <span class="other-col">其他:</span>
								        <span>粉丝、收获喜欢、文章总数、举报数、注册时间</span>
								        <div class="pop-style" slot="content">
								        	<div class="pop-cons">
								        		<p>
								        		<span>加入的社区：</span> <span class="pop-nums">无人机，智能家居</span>
									        	</p>
									        	<p>
									        		<span>粉丝量：</span> <span class="pop-nums">112</span>
									        		<span class="pop-cols">收获喜欢：</span> <span class="pop-nums">3235</span>
									        	</p>
									        	<p>
									        		<span>文章总数：</span> <span class="pop-nums">2325</span>
									        		<span class="pop-cols">举报数：</span> <span class="pop-nums">232</span>
									        	</p>
									        	<p>
									        		<span>注册时间：</span> <span class="pop-nums">2017-12-03</span>
									        	</p>
								        	</div>
								        </div>
								    </Poptip>
							</p>
						
					</li>
					<li class="header-item05 items">
						<div class="position-box">
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
						<div class="action-col position-box">
							<p class="sub-items">
								<span>
									<span style="cursor:pointer" @click="showSendWindow">发信息</span>
								</span>
								<span>
									<span style="cursor:pointer" @click="showNickWindow">昵称管理</span>
								</span>
							</p>
							<p class="sub-items">
								<span>
									<span style="cursor:pointer" @click="showAuthorityWindow">权限设置</span>
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
           
		    <div :class="bg? 'container' : ''"></div>
			<div class="pop-box" v-show="switchBtn">
		      <nick-window @closeTheWindow="showNickWindow"></nick-window>
		    </div>
	

		
			<div class="pop-box" v-show="switchBtn01">
		      <send-window @closeSendWindow="showSendWindow"></send-window>
		    </div>

		    <div class="pop-box" v-show="switchBtn02">
		      <authority-window @closeAuthorityWindow="showAuthorityWindow"></authority-window>
		    </div>
		
	</div>
</template>

<script>
    import '../../commoncss/pop-up.css'
    import nickWindow from '@/components/pop/nick-pop'
    import sendWindow from '@/components/pop/send-pop'
    import authorityWindow from '@/components/pop/authority-pop'
	export default {
        data() {
        	return {
        		single: 9,
        		model1: "消息模板",
        		value5: "我是输入框",
        		model11: "我是最后的选择框",
        		value:"我是认证框",
        		switchBtn: false,
        		switchBtn01: false,
        		switchBtn02: false,
        		bg:false
        	}
        },
        methods: {
        	showNickWindow() {
        		this.switchBtn = !this.switchBtn;
        		this.bg = !this.bg;
        	},
        	showSendWindow() {
        		this.switchBtn01 = !this.switchBtn01;
        		this.bg = !this.bg;
        	},
        	showAuthorityWindow() {
                this.switchBtn02 = !this.switchBtn02;
        		this.bg = !this.bg;
        	}
        },
        components: {
        	nickWindow,
        	sendWindow,
        	authorityWindow
        }
	}
</script>

<style scoped>
    .table-box {
    	position: relative;
    	height: calc(100% - 78px - 118px);
    }
    .container {
    	position: absolute;
    	top:0;
    	bottom:0;
    	left:0;
    	right:0;
    	background: #e9eaec9c;
    }
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
	.cons li .position-box {
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
	.header-item04 > p {
		padding-top:30px;
	}
	.pop-style {
		width:350px;
		height: 150px;
		position: relative;
	}
	.pop-cons {
		position: absolute;
		top:50%;
		left:50%;
		transform: translate(-50%, -50%)
	}
	.pop-cons p {
		color:#80848f;
		margin:10px 0;
	}
    .pop-cols {
    	margin-left:20px;
    }
    .pop-nums {
    	color:#1c2438;
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