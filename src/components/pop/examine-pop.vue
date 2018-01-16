<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">审核帖子</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">是否通过</span>

			<p class="pop-items">
				 <Radio class="pop-single-sel" v-model="single">审核通过</Radio>
			</p>
			<p class="pop-items">
				 <Radio class="pop-single-sel" v-model="single">审核不通过</Radio>
			</p>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">审核不通过操作</span>

			<p class="pop-items">
				 <Radio class="pop-single-sel" v-model="single">文章状态设置为隐藏状态</Radio>
			</p>
			<p class="pop-items">
				 <Radio class="pop-single-sel" v-model="single">文章退回用户的草稿箱重新修改</Radio>
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
      
         
            <Button class="pop-confirm-btn" type="ghost" @click="closePop">取消</Button>
              <Button class="pop-confirm-btn" type="primary">确认发送</Button>
    
	   </div>

	</div>
</template>

<script>
    import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				infos:''
			}
		},
		methods: {
			...mapMutations([
                   'setPopStatus'
				]),
			closePop() {
				this.setPopStatus()
			}
		}
	}
</script>