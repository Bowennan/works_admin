<template>
	<div style="width:100%; height:537px; background:#fff">
				<h3 class="pop-box-header">禁用用户管理
	              <Icon type="close-round" class="pop-box-close"></Icon>
	              <span class="pop-box-close" @click="closeTheForbidden"></span>
				</h3>

					<div>
						<span class="item-title">禁用操作</span>
					</div>

          <div>
            <p class="items">
              <span style="color:#bbbec4">剩余禁用天数
                <span style="color:#2d8cf0">10</span>天</span>
              
            </p>
            <p class="items">
               <Select size="small" v-model="model1" style="width:200px">
                  <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
              </Select>
            </p>
          </div>

					 <span class="item-title">发送信息</span>
                <div class="textarea-box" style="width:451px">
                  <textarea class="re-text">的垃圾分厘卡</textarea>
                            <div class="text-select">
                    <Select v-model="model1" style="width:130px">
                        <Option v-for="item in 5" :value="item" :key="item">{{ item}}</Option>
                    </Select>
                  </div>
            </div>

            <div class="bottom-box">
                        <p class="btn-group">
                          <Select v-model="model1" style="width:200px">
                      <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
                  </Select>
                  <Button type="primary" class="sub-btn">发送认证码</Button>
                        </p>
                        <p class="btn-group">
                          <Input v-model="value" placeholder="Enter something..." style="width: 200px"></Input>
                          <Button type="primary" class="sub-btn">认证</Button>
                        </p>
                        <p class="btn-group">
                          <Button type="ghost"  class="btn-size" style="border:1px solid #80848f" @click="closeTheForbidden">取消</Button>
                          <Button type="primary" class="btn-size" >确认违规</Button>
                        </p>
                      </div>
			</div>
</template>

<script>
	export default {
       data() {
        	return {
        		single: 9,
        		model1: "消息模板",
        		value5: "我是输入框",
        		model11: "我是最后的选择框",
        		value:"我是认证框",
        		switchBtn: false
        	}
        },
        methods: {
           closeTheForbidden() {
           	this.$emit("closeForbiddenWindow")
           }
        }
	}
</script>

<style scoped>
  .items {
    margin:5px;
  }
  .btn-group {
    margin-top:16px;
    margin-left:12px;
  }
  .btn-size {
    width:90px;
    height: 36px;
    margin-right: 20px;
  }
  .sub-btn {
    width:90px;
    height: 30px;
  }
</style>