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
        <div v-show="!userlistData.length">
        	<loading></loading>
        </div>
		<ul class="contents" v-for="(item, index) in userlistData" :key="index">
			<li>
				<ul class="cons clear">
					<li class="header-item01 items">
						<div class="position-box">
							<p class="action-col">{{item.user_id}}</p>
							<p class="action-col"><a href="#">{{item.nickname}}</a></p>
							<p>😎</p>
						</div>
					</li>
					<li class="header-item02 items">
						<div class="position-box">
							<p>
							   <span class="other-col">等级:</span>
							   <span>{{item.level}}级</span>
							</p>
							<p>
								<span class="other-col">积分:</span>
								<span>{{item.score}}</span>
							</p>
							<p>
								<span class="other-col">信用:</span>
								<span>{{item.credit}}</span>
							</p>
						</div>
						
					</li>
					<li class="header-item03 items">
						<div class="position-box">
							<p class="sub-items">
								<span>
									<span class="other-col">帖子：</span>
								    <span>{{item.articles_count}}</span>
								</span>
								<span>
									<span class="other-col">好价：</span>
									<span>{{item.couponses_count}}</span>
								</span>
							</p>
							<p class="sub-items">
								<span>
									<span class="other-col">作品：</span>
								    <span>{{item.masterpieces_count}}</span>
								</span>
								<span>
									<span class="other-col">装备：</span>
									<span>{{item.discloses_count}}</span>
								</span>
							</p>
							<p class="sub-items">
								<span>
									<span class="other-col">问答：</span>
								    <span>{{item.questions_count}}</span>
								</span>
								<span>
									<span class="other-col">爆料：</span>
									<span>{{item.exhibitions_count}}</span>
								</span>
							</p>
							<p class="sub-items">
								<span>
									<span class="other-col">闲置：</span>
								    <span>{{item.idles_count}}</span>
								</span>
								<span>
									<span class="other-col">评论：</span>
									<span>{{item.comment_num}}</span>
								</span>
							</p>
						</div>
						
					</li>
					<li class="header-item04 items">
							<p>
								
									<span class="other-col">加入社区:</span>
									<span>{{(item.join_communities).length}}</span>
								
							
									
								    <Poptip trigger="hover" placement="bottom-start">
								        <span class="other-col">其他:</span>
								        <span>粉丝、收获喜欢、文章总分、举报数、注册时间</span>
								        <div class="pop-style" slot="content">
								        	<div class="pop-cons">
								        		<p>
								        		<span>加入的社区：</span> <span class="pop-nums" style="padding:0 5px" v-for="(inneritem, innerindex) in item.join_communities" :key="innerindex">{{inneritem.name}}</span>
								        		     <span v-if="!(item.join_communities).length">无</span>
									        	</p>
									        	<p>
									        		<span>粉丝量：</span> <span class="pop-nums">{{item.fans_num}}</span>
									        		<span class="pop-cols">收获喜欢：</span> <span class="pop-nums">{{item.praised_num}}</span>
									        	</p>
									        	<p>
									        		<span>文章总分：</span> <span class="pop-nums">暂无数据</span>
									        		<span class="pop-cols">举报数：</span> <span class="pop-nums">232</span>
									        	</p>
									        	<p>
									        		<span>注册时间：</span> <span class="pop-nums">{{item.created_at}}</span>
									        	</p>
								        	</div>
								        </div>
								    </Poptip>
							</p>
						
					</li>
					<li class="header-item05 items">
						<div class="position-box">
							<p>
								<span class="other-col" style="cursor:pointer" @click="showUserWindow01" >社交绑定:</span>
								<span>3</span>
							</p>
							<p>
								<span class="other-col" style="cursor:pointer" @click="showUserWindow02" >自媒体:</span>
								<span>12</span>
							</p>
							<p>
								<span class="other-col" style="cursor:pointer" @click="showUserWindow03" >实名认证:</span>
								<span>未绑定</span>
							</p>
							<p>
								<span class="other-col" style="cursor:pointer" @click="showUserWindow04" >收货地址:</span>
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
									<span style="vertical-align:middle; cursor:pointer" @click="showTaggingWindow">标注
                                       <Icon type="ios-pricetags" style="vertical-align:middle" size=14></Icon>
									</span>
								</span>
							</p>
							<p class="sub-items">
								<span>
									<span style="cursor:pointer" @click="showLogWindow">操作日志</span>
								</span>
								<span>
									<span style="cursor:pointer" @click="showForbiddenWindow(item.user_id)">{{freezeState? "已禁用" : "禁用"}}</span>
								</span>
							</p>
							<p class="sub-items">
								<span>
									<span style="cursor:pointer" @click="showPrivateWindow">私信查看</span>
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
				<authority-window v-if="switchBtn02" @closeAuthorityWindow="showAuthorityWindow"></authority-window>
				<user-window v-if="switchBtn07" :outter="nameNum" @closeUserWindow="showUserWindow"></user-window>
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
    import {forbiddenUser} from '@/axios/api'

	export default {
		props: {
			userlistData:{
				type:Array
			}
		},
        data() {
        	return {
        		single: 9,
        		model1: "消息模板",
        		value5: "我是输入框",
        		model11: "我是最后的选择框",
        		value:"我是认证框",
        		switchBtn:false,
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
        methods: {
        	getWindowsSize() {
	       		this.coverWidth = window.document.body.offsetWidth;
	       		this.coverHeight = window.document.body.offsetHeight;
	       	},
        	getForbiddenPara(para) {
        		forbiddenUser(para).then(res =>{
                   this.freezeState = res.data;
        		}).catch(err =>{
	               	console.log(err,'请求失败')
	               })
        	},
        	alertOne(days) {
        		this.switchBtn06 = !this.switchBtn06;
        		this.bg = !this.bg;
        		this.getForbiddenPara({
        			user_id: this.userId,
        			freezeTime: days
        		})
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
        		this.bg = !this.bg;
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
        		this.bg = !this.bg;
        	},
        	showUserWindow01() {
        		this.nameNum = "name1";
        		this.switchBtn07 = !this.switchBtn07;
        		this.bg = !this.bg;
        	},
        	showUserWindow02() {
        		this.nameNum = "name2";
        		this.switchBtn07 = !this.switchBtn07;
        		this.bg = !this.bg;
        	},
        	showUserWindow03() {
        		this.nameNum = "name3";
        		this.switchBtn07 = !this.switchBtn07;
        		this.bg = !this.bg;
        	},
        	showUserWindow04() {
        		this.nameNum = "name4";
        		this.switchBtn07 = !this.switchBtn07;
        		this.bg = !this.bg;
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
    /*.table-box {
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
    }*/
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