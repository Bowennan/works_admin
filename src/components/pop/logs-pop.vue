<template>
	<div style="width:100%; height:480px; background:#fff">
				<h3 class="pop-box-header">用户本人操作日志(时间倒叙)
	              <Icon type="close-round" class="pop-box-close"></Icon>
	              <span class="pop-box-close" @click="closeTheLogs"></span>
				</h3>

					<div>
						<span class="item-title">操作积分变化信息</span>
					</div>

          <div>
            <Timeline>
              <TimelineItem>
                  <p class="time">1976年</p>
                  <p class="content">Apple I 问世</p>
              </TimelineItem>
              <TimelineItem>
                  <p class="time">1984年</p>
                  <p class="content">发布 Macintosh</p>
              </TimelineItem>
              <TimelineItem>
                  <p class="time">2007年</p>
                  <p class="content">发布 iPhone</p>
              </TimelineItem>
              <TimelineItem>
                  <p class="time">2010年</p>
                  <p class="content">发布 iPad</p>
              </TimelineItem>
              <TimelineItem>
                  <p class="time">2011年10月5日</p>
                  <p class="content">史蒂夫·乔布斯去世</p>
              </TimelineItem>
          </Timeline>
          </div>

					
                    
                    <div class="bottom-box-small">

                    	<div>
                    		<Button class="cancel-btn" type="primary" style="background:#fff; border:1px solid #84878f; color:#1c2438" @click="closeTheLogs">取消</Button> 
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
           closeTheLogs() {
           	this.$emit("closeLogWindow")
           }
        }
	}
</script>

<style scoped>
</style>