<template>
  <div class="aside-box">
     <Menu :theme="theme" class="menu-wrapper">
          <div>
            <h3 style="text-align:center; padding:10px 0; color:#2d8cf0; font-size:14px">社区首页管理</h3>
          </div>
          <MenuItem name="userlist" class="submenu">
             <router-link class="left-icon list-avator" to="/community_front_p">
              <Icon type="ios-paper" size=16 class="iconfont"></Icon>
              <span class="right-title">帖子列表</span>
             </router-link> 
          </MenuItem>
          <MenuItem name="send" class="submenu">
             <router-link to="/community_front_p/questions" class="left-icon send" >
              <Icon type="ios-help" size=16 class="iconfont"></Icon>
              <span class="right-title">问题列表</span>
             </router-link>
          </MenuItem>
          <MenuItem name="editor" class="submenu">
            <router-link to="/community_front_p/discount" class="left-icon editor" >
              <Icon type="social-yen"  size=16 class="iconfont"></Icon>
              <span class="right-title">好价列表</span>
            </router-link>
          </MenuItem>
          <MenuItem name="logs" class="submenu">
            <router-link to="/community_front_p/sencondhand" class="left-icon logs" >
              <Icon type="ios-box" size=16 class="iconfont"></Icon>
              <span class="right-title">二手列表</span>
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


