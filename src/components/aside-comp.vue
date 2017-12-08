<template>
	<div class="aside-box">
		 <Menu :theme="theme" class="lists-box">
		 	    <MenuItem name="userlist" class="sublist">
                   	 <router-link class="list-icon list-avator" to="/" style="color:#2b85e4">
						<Icon type="android-people" size=16 class="iconfont"></Icon>
						<span class="icon-name">用户列表</span>
					 </router-link> 
	            </MenuItem>
                <Submenu name="user">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="list-icon">
 								<Icon type="ios-cog" size=16 class="iconfont"></Icon>
 								<span class="icon-name">待处理用户</span>
 							</span>
                        </div>
                    </template>
                    <MenuItem name="1-1" class="sublist">
                      <router-link to="/nutbt" class="list-icon sublist-sub">新用户处理</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-2" class="sublist">
                      <router-link to="/tagged" class="list-icon sublist-sub">标记用户处理</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-3" class="sublist">
                      <router-link to="/abnormal" class="list-icon sublist-sub">异常用户处理</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                </Submenu>
                <MenuItem name="send" class="sublist">
                   <router-link to="/sendmessage" class="list-icon send" >
                   	<Icon type="ios-email" size=16 class="iconfont"></Icon>
                   	<span class="icon-name">群发信息</span>
                   </router-link>
	            </MenuItem>
                <Submenu name="check">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="list-icon checked">
                        		<Icon type="filing" size=16 class="iconfont"></Icon>
                        		<span class="icon-name">用户身份审核</span>
                        	</span>
                        </div>
                    </template>
	                    <MenuItem name="3-1" class="sublist">
	                      <router-link to="/rename" class="list-icon sublist-sub">实名认证</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="3-2" class="sublist">
	                      <router-link to="/media" class="list-icon sublist-sub">自媒体</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="3-3" class="sublist">
	                      <router-link to="/eo" class="list-icon sublist-sub">体验官</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="3-4" class="sublist">
	                      <router-link to="/bo" class="list-icon sublist-sub">品牌官方</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="3-5" class="sublist">
	                    <router-link to="/master" class="list-icon sublist-sub">达人</router-link></MenuItem>
	                    <MenuItem name="3-6" class="sublist">
	                    <router-link to="/community" class="list-icon sublist-sub">社区管理员</router-link></MenuItem>
	                    <MenuItem name="3-7" class="sublist">
	                    <router-link to="/bestkit" class="list-icon sublist-sub">棒客官方</router-link></MenuItem>
                </Submenu>
                <MenuItem name="editor" class="sublist">
                	<router-link to="/template" class="list-icon editor" >
                		<Icon type="ios-compose" size=16 class="iconfont"></Icon>
                		<span class="icon-name">消息模板编辑</span>
                	</router-link>
	            </MenuItem>
                <MenuItem name="logs" class="sublist">
                	<router-link to="/logs" class="list-icon logs" >
                		<Icon type="ios-list" size=16 class="iconfont"></Icon>
                		<span class="icon-name">操作日志</span>
                	</router-link>
	            </MenuItem>
            </Menu>
	</div>
</template>

<script>
	export default {
       data() {
       	return {
       		theme: "light"
       	}
       }
	}
</script>

<style scoped>
    .lists-box {
    	box-sizing: border-box;
    	font-size:12px;
    	width: 240px;
	    border-bottom: 1px solid #dddee1;
	    padding-bottom: 30px;
    }
    .title {
    	margin-left:28px;
    }
    .avator {
    	margin-left:10px;
    }
    .avator,.name {
    	vertical-align: top;
    }
	.name {
		font-size:12px;
		color:#3a8ce6;
	}
	.sublist {
		height:46px;
		box-sizing: border-box;
		font-size:12px !important;
		color:#80848f;
		position: relative;
		font-weight:bold;
	}
	.badge-scale {
		position: absolute;
		right:20px;
		transform: scale(0.8,0.65);
	}
	.list-avator {
		color:#2b85e4 !important;
	}
	.list-icon {
		position: absolute;
		top:0;
		left:0;
		display: block;
		width:100%;
		height:46px;
		line-height: 46px;
		box-sizing: border-box;
		padding-left:30px;
		background-size:18px 18px;
		background-position: 28px center;
		background-repeat: no-repeat;
		color:#1c2438;
		font-weight:bold;
	}
	.icon-name {
		vertical-align: middle;
	}
	i.iconfont.ivu-icon.ivu-icon-ios-cog,
	i.iconfont.ivu-icon.ivu-icon-android-people,
	i.iconfont.ivu-icon.ivu-icon-ios-email,
	i.iconfont.ivu-icon.ivu-icon-filing,
	i.iconfont.ivu-icon.ivu-icon-ios-compose,
	i.iconfont.ivu-icon.ivu-icon-ios-list {
	    vertical-align: middle;
	    margin-rgiht: 4px;
	    margin-right: 4px;
	}
	.sublist-sub {
		color:#80848f;
		padding-left:46px;
	}
</style>


