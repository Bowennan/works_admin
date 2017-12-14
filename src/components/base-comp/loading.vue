<template>
  <div class="loading">
    <img width="200" height="200" src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: '正在加载...'
      }
    }
  }
</script>
<style scoped>
   .loading{
     text-align: center;
     font-size:18px;
     font-weight: 400;
   }
</style>