<template>
  <div class="aside-box">
     <Menu :theme="theme" class="menu-wrapper">
          <div>
            <h3 style="text-align:center; padding:10px 0; color:#2d8cf0; font-size:14px">社区新建与管理</h3>
          </div>
          <MenuItem name="catalog_community" class="submenu">
             <router-link class="left-icon list-avator" to="/communities_manager">
              <Icon type="ios-home" size=16 class="iconfont"></Icon>
              <span class="right-title">品类社区管理</span>
             </router-link> 
          </MenuItem>
          <MenuItem name="brand_community" class="submenu">
             <router-link to="/communities_manager/brand" class="left-icon send" >
              <Icon type="ios-home" size=16 class="iconfont"></Icon>
              <span class="right-title">品牌社区管理</span>
             </router-link>
          </MenuItem>
          <MenuItem name="product_community" class="submenu">
            <router-link to="/communities_manager/product" class="left-icon editor" >
              <Icon type="ios-home"  size=16 class="iconfont"></Icon>
              <span class="right-title">产品社区管理</span>
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


