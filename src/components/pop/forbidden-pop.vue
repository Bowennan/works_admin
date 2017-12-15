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
              <span style="color:#bbbec4">禁用状态(天数)：
                <span style="color:#2d8cf0">{{forbiddenDay===0? "不禁用" : forbiddenDay===-1? "永久禁用" : forbiddenDay}}</span></span>
              
            </p>
            <p class="items">
              <Select v-model="forbiddenDay" style="width:200px">
                  <Option v-for="item in forbiddenDays" :value="item.value" :key="item.value">{{ item.label }}</Option>
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
                          <Button type="primary" class="btn-size"  @click="submit">确认违规</Button>
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
        		switchBtn: false,
            forbiddenDays: [
                    {
                      value: 0,
                      label: '不禁用'
                    },
                    {
                        value: 1,
                        label: '1天'
                    },
                    {
                        value: 3,
                        label: '3天'
                    },
                    {
                        value: 5,
                        label: '5天'
                    },
                    {
                        value: -1,
                        label: '永久禁用'
                    }

                ],
                forbiddenDay: 0
        	}
        },
        methods: {
           closeTheForbidden() {
           	this.$emit("closeForbiddenWindow")
           },
           submit() {
            this.$emit("confirmStoped", this.forbiddenDay);
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