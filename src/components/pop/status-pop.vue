<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">帖子状态选择</span>
			<Icon type="close-round" class="pop-close" @click.native="closeStatus"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">状态选择</span>

			<p class="pop-items">
				 <Radio class="pop-single-sel" v-model="single">正常</Radio>
			</p>
			<p class="pop-items">
				 <Radio class="pop-single-sel" v-model="single">隐藏文章</Radio>
			</p>
			<p class="pop-items">
				 <Radio class="pop-single-sel" v-model="single">退回草稿箱</Radio>
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
      
         
            <Button class="pop-confirm-btn" type="ghost" @click="closeStatus">取消</Button>
              <Button class="pop-confirm-btn" type="primary" @click="closeStatus">确认发送</Button>
    
	   </div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				infos:''
			}
		},
		methods: {
			closeStatus() {
				this.$emit('close')
			}
		}
	}
</script>