<template>
	<div class="aside-box">
		 <Menu :theme="theme" class="menu-wrapper">
		 	    <MenuItem name="userlist" class="submenu">
                   	 <router-link class="left-icon list-avator" to="/connect_persons">
          						<Icon type="android-people" size=16 class="iconfont"></Icon>
          						<span class="right-title">产品品牌官方</span>
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


