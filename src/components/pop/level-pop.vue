<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">帖子评分</span>
			<Icon type="close-round" class="pop-close" @click.native="closeLevel"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">等级选择</span>

			<p class="pop-items">
				 <Radio class="pop-single-sel" v-model="single">等级A</Radio>
			</p>
			<p class="pop-items">
				 <Radio class="pop-single-sel" v-model="single">等级B</Radio>
			</p>
			<p class="pop-items">
				 <Radio class="pop-single-sel" v-model="single">等级C</Radio>
			</p>
			<p class="pop-items">
				 <Radio class="pop-single-sel" v-model="single">等级D</Radio>
			</p>
			<p class="pop-items">
				 <Radio class="pop-single-sel" v-model="single">无等级</Radio>
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
      
         
            <Button class="pop-confirm-btn" type="ghost" @click="closeLevel">取消</Button>
              <Button class="pop-confirm-btn" type="primary" @click="closeLevel">确认发送</Button>
    
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
			closeLevel() {
				this.$emit('close')
			}
		}
	}
</script>