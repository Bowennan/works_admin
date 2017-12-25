<template>
  <div class="pop-container">
    <div class="pop-header">
      <span class="pop-title">标注用户</span>
      <Icon class="pop-close" type="close-round" @click.native="closeTag"></Icon>
    </div>

    <div class="pop-sub-container">
      <span class="pop-sub-title">标注内容</span>
      <p class='pop-items'>
        <span class="pop-item-title">有资源达人</span> <span class="c-azul">删除</span>
      </p>
      <p class="pop-items">
        <Input size="small" class="pop-input-box" v-model="tag_name" placeholder="Enter something..." style="width: 200px"></Input> <span class="c-azul">确认添加</span>
      </p>
    </div>

    <div class="pop-bottom-box">

      <Button class="pop-confirm-btn" type="ghost" @click="closeTag">取消</Button>
      <Button class="pop-confirm-btn" type="primary" @click="closeTag">确认</Button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return  {
         tag_name:"wu"
      }
    },
    methods: {
      closeTag () {
        this.$emit('close')
      }
    }
  }
</script>