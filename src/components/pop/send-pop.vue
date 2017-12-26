<template>
  <div class="pop-container">
    <div class="pop-header">
      <span class="pop-title">发信息</span>
      <Icon class="pop-close" type="close-round" @click.native="closeSend"></Icon>
    </div>

    <div class="pop-sub-container" style="border:none">
      <span class="pop-sub-title">消息编辑</span>
      <div class="border" style="height:132px;">
        <textarea class="text-contents border-bottom"></textarea>
        <Select class="text-sel"  size="small" v-model="infos" style="width:150px">
              <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
          </Select>
      </div>
    </div>

    <div class="pop-bottom-box">
       <Button class="pop-confirm-btn" @click="closeSend" type="ghost">取消</Button> 
       <Button class="pop-confirm-btn" @click="closeSend" type="primary">确认发送</Button>
       
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        check01:true,
        check02:true,
        infos:'无'
      }
    },
    methods: {
      closeSend() {
        this.$emit('close')
      }
    }
  }
</script>