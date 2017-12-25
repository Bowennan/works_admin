<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">关联产品</span>
			<Icon class="pop-close" type="close-round" @click.native="closeRenameCheck"></Icon>
		</div>



		<div class="pop-sub-container">
			<span class="pop-sub-title">关联产品</span>

			<p class="pop-items">
			   <span class="pop-item-title">产品1：</span>
			   <Input size="small" v-model="value" placeholder="Enter something..." style="width: 120px"></Input>
			   <span class="pop-item-title-s" style="margin-left:12px;">ID：</span>
               <Input size="small" v-model="value" placeholder="Enter something..." style="width: 120px"></Input>
               <span class="c-rojo pop-item-title-s" style="text-align:right; cursor:pointer">删除</span>
			</p>

			<p class="pop-items">
			   <span class="pop-item-title">产品：</span>
			   <Input size="small" v-model="value" placeholder="Enter something..." style="width: 120px"></Input>
			   <span class="pop-item-title-s" style="margin-left:12px;">ID：</span>
               <Input size="small" v-model="value" placeholder="Enter something..." style="width: 120px"></Input>
               <span class="c-azul pop-item-title-s" style="text-align:right; cursor:pointer">添加</span>
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