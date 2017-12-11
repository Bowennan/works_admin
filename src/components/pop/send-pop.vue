<template>
	<div style="width:100%; height:365px; background:#fff">
				<h3 class="pop-box-header">发信息
	              <Icon type="close-round" class="pop-box-close"></Icon>
	              <span class="pop-box-close" @click="closeTheSend"></span>
				</h3>

					<div>
						<span class="item-title">消息编辑</span>
					</div>

					<div class="textarea-box">
					  <textarea class="re-text">的垃圾分厘卡</textarea>
                      <div class="text-select">
					  	<Select v-model="model1" style="width:130px">
					        <Option v-for="item in 5" :value="item" :key="item">{{ item}}</Option>
					    </Select>
					  </div>
					</div>
                    
                    <div class="bottom-box-small">

                    	<div>
                    		<Button class="cancel-btn" type="primary" style="background:#fff; border:1px solid #84878f; color:#1c2438" @click="closeTheSend">取消</Button> 
                    		<Button class="cancel-btn" type="primary">确认发送</Button>
                    	</div>
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
           closeTheSend() {
           	this.$emit("closeSendWindow")
           }
        }
	}
</script>

<style scoped>
</style>