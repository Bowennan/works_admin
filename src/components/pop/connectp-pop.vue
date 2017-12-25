<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">
				产品关联
			</span>
			<Icon type="close-round" class="pop-close" @click.native="closeConnect"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">关联1：</span>
			<p class="pop-items pop-two-cols">
				<span class="pop-flex-one">ID： <span>12313246132</span></span> 
				<span class="pop-flex-one">产品名：<span>XXX</span></span> 
			</p>
			<p class="pop-items pop-two-cols">
				<span class="pop-flex-one">品牌：<span>小米</span></span> 
				<span class="pop-flex-one">品类：<span>智能</span></span> 
			</p>
			<p class="pop-items">
				<Icon type="trash-a"></Icon> <span class="c-azul">删除</span>
			</p>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">
				新增关联产品
			</span>
			<p class="pop-item">
				<Input size="small" v-model="value" placeholder="Enter something..." style="width: 200px"></Input>
				<span class="c-azul">确认添加</span>
			</p>
		</div>

		<div class="pop-bottom-box">
			<Button  class="pop-confirm-btn" type="ghost" @click="closeConnect">取消</Button>
			<Button  class="pop-confirm-btn" type="primary" @click="closeConnect">确认</Button>
            
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value:''
			}
		},
		methods: {
			closeConnect() {
				this.$emit('close')
			}
		}
	}
</script>