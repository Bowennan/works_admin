<template>
	<div style="width:100%; height:480px; background:#fff">
				<h3 class="pop-box-header">私信查看(时间倒叙)
	              <Icon type="close-round" class="pop-box-close"></Icon>
	              <span class="pop-box-close" @click="closeThePrivate"></span>
				</h3>

					<div>
						<span class="item-title">操作积分变化信息</span>
					</div>

          <div>
            <Timeline>
              <TimelineItem v-for="item in 5" :key="item">
                  <p class="time">201{{item}}年</p>
                  <p class="content">做了{{item}}件事情  <span style="color:#2d8cf0; margin-left:20px">查看详情</span></p>
              </TimelineItem>
          </Timeline>
          </div>

					
                    
                    <div class="bottom-box-small">

                    	<div>
                    		<Button class="cancel-btn" type="primary" style="background:#fff; border:1px solid #84878f; color:#1c2438" @click="closeThePrivate">取消</Button> 
                    		<Button class="cancel-btn" type="primary">确认</Button>
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
           closeThePrivate() {
           	this.$emit("closePrivateWindow")
           }
        }
	}
</script>

<style scoped>
</style>