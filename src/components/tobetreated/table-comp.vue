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
		<!-- <div v-show="!userlistData.length">
        	<loading></loading>
        </div> -->
		<ul class="contents">
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
								    <span class="pointer">33</span>
								</span>
								<span>
									<span class="other-col">好价:</span>
									<span class="pointer">33</span>
								</span>
							</p>
							<p class="sub-items">
								<span>
									<span class="other-col">作品:</span>
								    <span class="pointer">33</span>
								</span>
								<span>
									<span class="other-col">装备:</span>
									<span class="pointer">33</span>
								</span>
							</p>
							<p class="sub-items">
								<span>
									<span class="other-col">问答:</span>
								    <span class="pointer">33</span>
								</span>
								<span>
									<span class="other-col">爆料:</span>
									<span class="pointer">33</span>
								</span>
							</p>
							<p class="sub-items">
								<span>
									<span class="other-col">闲置:</span>
								    <span class="pointer">13</span>
								</span>
								<span>
									<span class="other-col">评论:</span>
									<span class="pointer">33</span>
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
							        <span class="pointer">粉丝、收获喜欢、文章总数、举报数、注册时间</span>
							        <div class='pop-style' slot="content">
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
								<span class="other-col pointer"  @click="showUserWindow01">社交绑定:</span>
								<span>3</span>
							</p>
							<p>
								<span class="other-col pointer"  @click="showUserWindow02">自媒体:</span>
								<span>12</span>
							</p>
							<p>
								<span class="other-col pointer" @click="showUserWindow03">实名认证:</span>
								<span>未绑定</span>
							</p>
							<p>
								<span class="other-col pointer" @click="showUserWindow04">收货地址:</span>
								<span>5</span>
							</p>
						</div>
						
					</li>
					<li class="header-item06 items">
						<div class="action-col position-box">
							<p class="sub-items">
								<span>
									<span class="pointer" @click="showSendWindow">发信息</span>
								</span>
								<span>
									<span class="pointer" @click="showNickWindow">昵称管理</span>
								</span>
							</p>
							<p class="sub-items">
								<span>
									<span class="pointer" @click="showAuthorityWindow">权限设置</span>
								</span>
								<span>
									<span class="pointer" style="vertical-align:middle" @click="showTaggingWindow">{{marca}}
                                       <Icon v-if="marca" type="ios-pricetags" style="vertical-align:middle" size=14></Icon>
									</span>
								</span>
							</p>
							<p class="sub-items">
								<span>
									<span class="pointer" @click="showLogWindow">操作日志</span>
								</span>
								<span>
									<span class="pointer" @click="showForbiddenWindow">{{desactivar}}</span>
								</span>
							</p>
							<p class="sub-items">
								<span>
									<span class="pointer" @click="showPrivateWindow">私信查看</span>
								</span>
								<span>
									
 									<span :class="statusStyle" @click="done">{{status? "已处理" : "待处理"}}</span>
									
								</span>
							</p>
						</div>
						
					</li>
				</ul>
			</li>
		</ul>

		<div v-show="cover" :style="{width:coverWidth+'px', height:coverHeight+'px'}" class="cover-style">
			<div class="pop-wrapper">
				<nick-window v-if="switchBtn" @close="showNickWindow"></nick-window>
				<tagging-window v-if="switchBtn05" @close="showTaggingWindow"></tagging-window>
				<forbidden-window v-if="switchBtn06" @close="showForbiddenWindow"></forbidden-window>
				<private-window v-if="switchBtn04" @close="showPrivateWindow"></private-window>
				<log-window v-if="switchBtn03" @close="showLogWindow"></log-window>
				<send-window v-if="switchBtn01" @close="showSendWindow"></send-window>
				<authority-window v-if="switchBtn02" @close="showAuthorityWindow"></authority-window>
				<user-window v-if="switchBtn07" :outter="nameNum" @close="showUserWindow"></user-window>
			</div>
		</div>

	</div>
</template>

<script>
    import nickWindow from '@/components/pop/nick-pop'
    import sendWindow from '@/components/pop/send-pop'
    import authorityWindow from '@/components/pop/authority-pop'
    import logWindow from '@/components/pop/logs-pop'
    import privateWindow from '@/components/pop/private-pop'
    import taggingWindow from '@/components/pop/tagging-pop'
    import forbiddenWindow from '@/components/pop/forbidden-pop'
    import userWindow from '@/components/pop/user-pop'
    import Loading from '@/components/base-comp/loading'

	export default {
       data() {
       	return{
       		status:false,
       		marca:"标记与否",
       		desactivar:"禁用与否",
       		switchBtn: false,
    		switchBtn01: false,
    		switchBtn02: false,
    		switchBtn03: false,
    		switchBtn04: false,
    		switchBtn05: false,
    		switchBtn06: false,
    		switchBtn07: false,
    		bg:false,
    		nameNum:'',
    		userId:'',
    		freezeState: false,
    		coverWidth:0,
    		coverHeight:0,
    		cover:false
       	}
       },
       created() {
       	this.getWindowsSize()
       },
       computed: {
       	statusStyle() {
       		return this.status? "treated" : "tobe-treated"
       	}
       },
       methods: {
       	getWindowsSize() {
	       		this.coverWidth = window.document.body.offsetWidth;
	       		this.coverHeight = window.document.body.offsetHeight;
	       	},
       	done() {
       		this.status = !this.status;//或许需要发送后台交互
       	},
       	showNickWindow() {
    		this.switchBtn = !this.switchBtn;
    		this.cover = !this.cover;
    	},
    	showSendWindow() {
    		this.switchBtn01 = !this.switchBtn01;
    		this.cover = !this.cover;
    	},
    	showAuthorityWindow() {
            this.switchBtn02 = !this.switchBtn02;
    		this.cover= !this.cover;
    	},
    	showLogWindow() {
    		this.switchBtn03 = !this.switchBtn03;
    		this.cover = !this.cover;
    	},
    	showPrivateWindow() {
    		this.switchBtn04 = !this.switchBtn04;
    		this.cover = !this.cover;
    	},
    	showTaggingWindow() {
    		this.switchBtn05 = !this.switchBtn05;
    		this.cover = !this.cover;
    	},
    	showForbiddenWindow() {
    		this.switchBtn06 = !this.switchBtn06;
    		this.cover = !this.cover;
    	},
    	showUserWindow() {
    		this.switchBtn07 = !this.switchBtn07;
    		this.cover = !this.cover;
    	},
    	showUserWindow01() {
    		this.nameNum = "name1";
    		this.switchBtn07 = !this.switchBtn07;
    		this.cover = !this.cover;
    	},
    	showUserWindow02() {
    		this.nameNum = "name2";
    		this.switchBtn07 = !this.switchBtn07;
    		this.cover = !this.cover;
    	},
    	showUserWindow03() {
    		this.nameNum = "name3";
    		this.switchBtn07 = !this.switchBtn07;
    		this.cover = !this.cover;
    	},
    	showUserWindow04() {
    		this.nameNum = "name4";
    		this.switchBtn07 = !this.switchBtn07;
    		this.cover = !this.cover;
    	}
       },
       components: {
       	 	nickWindow,
        	sendWindow,
        	authorityWindow,
        	logWindow,
        	privateWindow,
        	taggingWindow,
        	forbiddenWindow,
        	userWindow,
        	Loading
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
    	top:-196px;
    	bottom:0;
    	left:-10px;
    	right:-56px;
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
	.tobe-treated {
	  	display: inline-block;
	  	width:52px;
	  	height:21px;
	  	line-height: 21px;
	  	text-align: center;
	  	background: #f90;
	  	border-radius: 5px;
	  	color:#fff;
	  	font-size:12px;
	  	font-weight: bold;
	  	cursor:pointer;
	  }
	  .treated {
	  	display: inline-block;
	  	box-sizing: border-box;
	  	border:1px solid #ccc;
	  	width:52px;
	  	height:21px;
	  	line-height: 21px;
	  	text-align: center;
	  	background: #fff;
	  	border-radius: 5px;
	  	color:#80848f;
	  	font-size:12px;
	  	font-weight: bold;
	  	cursor:pointer;
	  }
	  .pointer {
	  	cursor: pointer;
	  }
</style>