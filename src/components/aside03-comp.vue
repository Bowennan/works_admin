<template>
  <div class="aside-box">
     <Menu :theme="theme" class="lists-box">
          <div>
            <h3 style="text-align:center; padding:10px 0; color:#2d8cf0; font-size:14px">通用模块管理</h3>
          </div>
          <MenuItem name="userlist" class="sublist">
             <router-link class="list-icon list-avator" to="/community_common_m">
              <Icon type="ios-film" size=16 class="iconfont"></Icon>
              <span class="icon-name">Banner管理</span>
             </router-link> 
          </MenuItem>
          <MenuItem name="send" class="sublist">
             <router-link to="/community_common_m/products" class="list-icon send" >
              <Icon type="ios-color-filter" size=16 class="iconfont"></Icon>
              <span class="icon-name">产品展示榜</span>
             </router-link>
          </MenuItem>
          <MenuItem name="editor" class="sublist">
            <router-link to="/community_common_m/bulletin" class="list-icon editor" >
              <Icon type="ios-compose" size=16 class="iconfont"></Icon>
              <span class="icon-name">公告栏管理</span>
            </router-link>
          </MenuItem>
          <MenuItem name="logs" class="sublist">
            <router-link to="/community_common_m/recommend" class="list-icon logs" >
              <Icon type="asterisk" size=16 class="iconfont"></Icon>
              <span class="icon-name">推荐管理</span>
            </router-link>
          </MenuItem>
            </Menu>

            <div class="views">
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

<style scoped>
    .aside-box {
      position:relative;
      box-sizing: border-box;
      width:100%;
      height: 100%;
      padding-left:240px;
    }
    .lists-box {
      box-sizing: border-box;
      font-size:12px;
      width: 240px;
      border-bottom: 1px solid #dddee1;
      padding-bottom: 30px;
      position: absolute;
      top:0;
      left:0;
    }
    .views {
      position:absolute;
      right: 0;
      top:0;
      left:240px;
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
  i.iconfont.ivu-icon.ivu-icon-ios-film,
  i.iconfont.ivu-icon.ivu-icon-ios-color-filter,
  i.iconfont.ivu-icon.ivu-icon-filing,
  i.iconfont.ivu-icon.ivu-icon-ios-compose,
  i.iconfont.ivu-icon.ivu-icon-asterisk {
      vertical-align: middle;
      margin-rgiht: 4px;
      margin-right: 4px;
  }
  .sublist-sub {
    color:#80848f;
    padding-left:46px;
  }
</style>


