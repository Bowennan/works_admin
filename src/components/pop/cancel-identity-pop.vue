<template>
  <div class="pop-container">
    <div class="pop-header">
      <span class="pop-title">达人身份取缔</span>
      <Icon class="pop-close" type="close-round" @click.native="closeCancel"></Icon>
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

    <div class="pop-bottom-box-big">
      
        <div class="sub-btn-input">
          <Select class="input-and-sel" size="small" v-model="infos" style="width:200px">
                <Option v-for="item in 4" :value="item" :key="item">{{ item }}</Option>
            </Select>
            <Button class="more-than-two" size="small" type="primary">确认授权人</Button>
        </div>
                
                <div class="sub-btn-input">
                  <Input class="input-and-sel" size="small" v-model="infos" placeholder="Enter something..." style="width: 200px"></Input>
              <Button class="more-than-two" size="small" type="primary">认证</Button>
                </div>

           <div class="sub-btn-input">
            <Button class="more-than-two" type="ghost" @click="closeCancel">取消</Button>
              <Button class="more-than-two" type="primary" @click="closeCancel">确认发送</Button>
           </div>
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
      closeCancel() {
        this.$emit('close')
      }
    }
  }
</script>