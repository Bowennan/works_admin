<template>
  <div class="aside-box">
     <Menu :theme="theme" class="menu-wrapper">
          <div>
            <h3 style="text-align:center; padding:10px 0; color:#2d8cf0; font-size:14px">达人志首页管理</h3>
          </div>
          <MenuItem name="userlist" class="submenu">
             <router-link class="left-icon list-avator" to="/masters">
              <Icon type="ios-list" size=16 class="iconfont"></Icon>
              <span class="right-title">达人志列表</span>
             </router-link> 
          </MenuItem>
          <MenuItem name="send" class="submenu">
             <router-link to="/masters/master_list" class="left-icon send" >
              <Icon type="ios-people" size=16 class="iconfont"></Icon>
              <span class="right-title">达人列表</span>
             </router-link>
          </MenuItem>
          <MenuItem name="editor" class="submenu">
            <router-link to="/masters/master_order" class="left-icon editor" >
              <Icon type="person-add" size=16 class="iconfont"></Icon>
              <span class="right-title">想邀约达人列表</span>
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