<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">审核用户实名管理</span>
			<Icon class="pop-close" type="close-round" @click.native="closeRenameCheck"></Icon>
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
			<Button class="pop-confirm-btn" type="ghost" @click="closeRenameCheck">取消</Button>
			<Button class="pop-confirm-btn" type="primary" @click="closeRenameCheck">确认</Button>
		</div>
	</div>
</template>

<script>
	export default {
        data() {
        	return {
        		value: "无",
        		single:'',
        		sel:'',
        		infos:''
        	}
        },
        methods: {
        	closeRenameCheck (){
        		this.$emit('close')
        	}
        }
	}
</script>