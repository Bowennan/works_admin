<template>
  <div id="app">
    <head-comp></head-comp>
    <div class="aside-and-contents">
     <!--  <aside-comp class="aside"></aside-comp> -->
      <div class="search">
          <router-view></router-view> 
      </div>
    </div>

  </div>
</template>

<script>
import headComp from '@/components/head-comp'


export default {
  components: {
    headComp
  }
}
</script>

<style>
  #app {
    position: relative;
    width:100%;
    height:100%;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  }
  .aside-and-contents {
    width:100%;
    height: calc(100% - 86px);
    position: absolute;
    top:86px;
    left:0;
  }
  .search {
    width:100%;
    height:100%;
    min-width: 1330px;
  }


</style>
