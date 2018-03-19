<template>
	<div class="aside-box">
		 <Menu :theme="theme" class="menu-wrapper">
		 	    <MenuItem name="userlist" class="submenu">
                   	 <router-link class="left-icon list-avator" to="/user_manager" style="color:#2b85e4">
						<Icon type="android-people" size=16 class="iconfont"></Icon>
						<span class="right-title">用户列表</span>
					 </router-link> 
	            </MenuItem>
                <Submenu name="user">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="left-icon">
 								<Icon type="ios-cog" size=16 class="iconfont"></Icon>
 								<span class="right-title">待处理用户</span>
 							</span>
                        </div>
                    </template>
                    <MenuItem name="1-1" class="submenu">
                      <router-link to="/user_manager/nutbt" class="left-icon submenu-sub">新用户处理</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-2" class="submenu">
                      <router-link to="/user_manager/tagged" class="left-icon submenu-sub">标记用户处理</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                    <MenuItem name="1-3" class="submenu">
                      <router-link to="/user_manager/abnormal" class="left-icon submenu-sub">异常用户处理</router-link>
                      <Badge count="10" class="badge-scale"></Badge>
                    </MenuItem>
                </Submenu>
                <MenuItem name="send" class="submenu">
                   <router-link to="/user_manager/sendmessage" class="left-icon send" >
                   	<Icon type="ios-email" size=16 class="iconfont"></Icon>
                   	<span class="right-title">群发信息</span>
                   </router-link>
	            </MenuItem>
                <Submenu name="check">
                    <template slot="title">
                        <div style="height:18px; display:inline-block">
                        	<span class="left-icon checked">
                        		<Icon type="filing" size=16 class="iconfont"></Icon>
                        		<span class="right-title">用户身份审核</span>
                        	</span>
                        </div>
                    </template>
	                    <MenuItem name="3-1" class="submenu">
	                      <router-link to="/user_manager/rename" class="left-icon submenu-sub">实名认证</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="3-2" class="submenu">
	                      <router-link to="/user_manager/media" class="left-icon submenu-sub">自媒体</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="3-3" class="submenu">
	                      <router-link to="/user_manager/eo" class="left-icon submenu-sub">体验官</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="3-4" class="submenu">
	                      <router-link to="/user_manager/bo" class="left-icon submenu-sub">品牌官方</router-link>
                          <Badge count="10" class="badge-scale"></Badge>
	                    </MenuItem>
	                    <MenuItem name="3-5" class="submenu">
	                    <router-link to="/user_manager/master" class="left-icon submenu-sub">达人</router-link></MenuItem>
	                    <MenuItem name="3-6" class="submenu">
	                    <router-link to="/user_manager/community" class="left-icon submenu-sub">社区管理员</router-link></MenuItem>
	                    <MenuItem name="3-7" class="submenu">
	                    <router-link to="/user_manager/bestkit" class="left-icon submenu-sub">棒客官方</router-link></MenuItem>
                </Submenu>
                <MenuItem name="editor" class="submenu">
                	<router-link to="/user_manager/template" class="left-icon editor" >
                		<Icon type="ios-compose" size=16 class="iconfont"></Icon>
                		<span class="right-title">消息模板编辑</span>
                	</router-link>
	            </MenuItem>
                <MenuItem name="logs" class="submenu">
                	<router-link to="/user_manager/logs" class="left-icon logs" >
                		<Icon type="ios-list" size=16 class="iconfont"></Icon>
                		<span class="right-title">操作日志</span>
                	</router-link>
	            </MenuItem>
            </Menu>

            <div class="viewer">
            	<router-view></router-view>
            </div>
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

<style>
	/*公共侧边导航样式，见main.js*/
</style>


