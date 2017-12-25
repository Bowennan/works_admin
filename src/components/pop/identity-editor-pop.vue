<template>
  <div class="pop-container">
    <div class="pop-header">
      <span class="pop-title">社区管理员身份管理</span>
      <Icon class="pop-close" type="close-round" @click.native="closeEditor"></Icon>
    </div>

    <div class="pop-sub-container">
      <span class="pop-sub-title">已管理社区</span>
      <p class='pop-items'>
        <span class="pop-item-title">有资源达人</span> <span class="c-rojo" style="margin-left:12px;">删除</span>
      </p>
      <p class="pop-items">
        <Select   size="small" v-model="infos" style="width:200px">
              <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
          </Select> <span class="c-azul" style="margin-left:12px;">
        确认添加</span>
      </p>
    </div>

    <div class="pop-sub-container" style="border:none">
      <span class="pop-sub-title">消息发送</span>
      <div class="border" style="height:132px;">
        <textarea class="text-contents border-bottom"></textarea>
        <Select class="text-sel"  size="small" v-model="infos" style="width:150px">
              <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
          </Select>
      </div>
    </div>

    <div class="pop-bottom-box">

      <Button class="pop-confirm-btn" type="ghost" @click="closeEditor">取消</Button>
      <Button class="pop-confirm-btn" type="primary" @click="closeEditor">确认</Button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return  {
         tag_name:"wu",
         infos:''
      }
    },
    methods: {
      closeEditor () {
        this.$emit('close')
      }
    }
  }
</script>