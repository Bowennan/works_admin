<template>
  <div class="aside-box">
     <Menu :theme="theme" class="menu-wrapper">
          <div>
            <h3 style="text-align:center; padding:10px 0; color:#2d8cf0; font-size:14px">通用模块管理</h3>
          </div>
          <MenuItem name="userlist" class="submenu">
             <router-link class="left-icon list-avator" to="/community_common_m">
              <Icon type="ios-film" size=16 class="iconfont"></Icon>
              <span class="right-title">Banner管理</span>
             </router-link> 
          </MenuItem>
          <MenuItem name="send" class="submenu">
             <router-link to="/community_common_m/products" class="left-icon send" >
              <Icon type="ios-color-filter" size=16 class="iconfont"></Icon>
              <span class="right-title">产品展示榜</span>
             </router-link>
          </MenuItem>
          <MenuItem name="editor" class="submenu">
            <router-link to="/community_common_m/bulletin" class="left-icon editor" >
              <Icon type="ios-compose" size=16 class="iconfont"></Icon>
              <span class="right-title">公告栏管理</span>
            </router-link>
          </MenuItem>
          <MenuItem name="logs" class="submenu">
            <router-link to="/community_common_m/recommend" class="left-icon logs" >
              <Icon type="asterisk" size=16 class="iconfont"></Icon>
              <span class="right-title">推荐管理</span>
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
          theme: "light",
          status: "block"
        }
       }
  }
</script>


