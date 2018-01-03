<template>
	<div class="aside-box">
		 <Menu :theme="theme" class="menu-wrapper">
          <MenuItem name="send" class="submenu">
             <router-link to="/connect_contents" class="left-icon send" >
              <Icon type="star" size=16 class="iconfont"></Icon>
             	<span class="right-title">产品精选帖子</span>
             </router-link>
          </MenuItem>
          <MenuItem name="send" class="submenu">
             <router-link to="/connect_contents/psasking" class="left-icon send" >
              <Icon type="bookmark" size=16 class="iconfont"></Icon>
              <span class="right-title">产品精选问答</span>
             </router-link>
          </MenuItem>
          <MenuItem name="send" class="submenu">
             <router-link to="/users/sendmessage" class="left-icon send" >
              <Icon type="ios-paper" size=16 class="iconfont"></Icon>
              <span class="right-title">产品关联帖子</span>
             </router-link>
          </MenuItem>
          <MenuItem name="send" class="submenu">
             <router-link to="/users/sendmessage" class="left-icon send" >
              <Icon type="images" size=16 class="iconfont"></Icon>
              <span class="right-title">产品关联作品</span>
             </router-link>
          </MenuItem>
          <MenuItem name="send" class="submenu">
             <router-link to="/users/sendmessage" class="left-icon send" >
              <Icon type="help-circled"  size=16 class="iconfont"></Icon>
              <span class="right-title">产品关联问答</span>
             </router-link>
          </MenuItem>
          <MenuItem name="send" class="submenu">
             <router-link to="/users/sendmessage" class="left-icon send" >
              <Icon type="ios-box" size=16 class="iconfont"></Icon>
              <span class="right-title">产品关联闲置</span>
             </router-link>
          </MenuItem>
          <MenuItem name="send" class="submenu">
             <router-link to="/users/sendmessage" class="left-icon send" >
              <Icon type="social-bitcoin" size=16 class="iconfont"></Icon>
              <span class="right-title">产品关联好价</span>
             </router-link>
          </MenuItem>
          <MenuItem name="send" class="submenu">
             <router-link to="/users/sendmessage" class="left-icon send" >
              <Icon type="camera" size=16 class="iconfont"></Icon>
              <span class="right-title">产品关联装备秀</span>
             </router-link>
          </MenuItem>
          <MenuItem name="send" class="submenu">
             <router-link to="/users/sendmessage" class="left-icon send" >
              <Icon type="speakerphone" size=16 class="iconfont"></Icon>
              <span class="right-title">产品关联爆料</span>
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


