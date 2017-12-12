<template>
	<div style="width:100%; height:364px; background:#fff">
				<h3 class="pop-box-header">标注用户
	              <Icon type="close-round" class="pop-box-close"></Icon>
	              <span class="pop-box-close" @click="closeTheTagging"></span>
				</h3>

					<div>
						<span class="item-title">标注内容</span>
					</div>

          <div>
            <p class="items">
              <span style="color:#bbbec4">达人</span>
              <span style="color:#2d8cf0; margin-left:10px;">删除</span>
            </p>
            <p class="items">
               <Input size="small" v-model="value" placeholder="Enter something..." style="width: 150px"></Input>
               <span style="color:#2d8cf0; margin-left:10px;">确认添加</span>
            </p>
          </div>

					
                    
                    <div class="bottom-box-small">

                    	<div>
                    		<Button class="cancel-btn" type="primary" style="background:#fff; border:1px solid #84878f; color:#1c2438" @click="closeTheTagging">取消</Button> 
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
           closeTheTagging() {
           	this.$emit("closeTaggingWindow")
           }
        }
	}
</script>

<style scoped>
  .items {
    margin:5px;
  }
</style>