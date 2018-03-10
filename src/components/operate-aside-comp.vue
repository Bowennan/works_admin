<template>
  <div class="aside-box">
     <Menu :theme="theme" class="menu-wrapper">
          <div>
            <h3 style="text-align:center; padding:10px 0; color:#2d8cf0; font-size:14px">运营管理</h3>
          </div>
          <MenuItem name="10-1" class="submenu">
             <router-link class="left-icon list-avator" to="/operate">
              <Icon type="ios-list" size=16 class="iconfont"></Icon>
              <span class="right-title">权限用户组管理</span>
             </router-link> 
          </MenuItem>
          <MenuItem name="10-2" class="submenu">
             <router-link to="/operate/backstage" class="left-icon send" >
              <Icon type="android-people" size=16 class="iconfont"></Icon>
              <span class="right-title">后台用户列表</span>
             </router-link>
          </MenuItem>
         <!--  <MenuItem name="editor" class="submenu">
            <router-link to="/masters/masterorder" class="left-icon editor" >
              <Icon type="ios-compose" size=16 class="iconfont"></Icon>
              <span class="right-title">写作入口</span>
            </router-link>
          </MenuItem> -->
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