<template>
	<div class="aside-box">
		 <Menu :theme="theme" class="menu-wrapper">
                <MenuItem name="editor" class="submenu">
                	<router-link to="/manage_ways" class="left-icon editor" >
                    <Icon type="ios-cart" size=16 class="iconfont"></Icon>
                		<span class="right-title">产品线上渠道管理</span>
                	</router-link>
	            </MenuItem>
                <MenuItem name="logs" class="submenu">
                	<router-link to="/manage_ways/sublist" class="left-icon logs" >
                    <Icon type="ios-filing" size=16 class="iconfont"></Icon>
                		<span class="right-title">产品线下渠道管理</span>
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


