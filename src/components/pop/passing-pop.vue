<template>
	<div class="pop-position">
		
		<div class="head-style">
			<span>审核用户实名管理</span>
			<Icon class="close" type="close-round" @click="closeWindos"></Icon>
			<span class="close"  @click="closeWindos"></span>
		</div>

		<div>
			<span class="sub-title">是否通过</span>
			<Radio v-model="single" class="sing-sel">审核通过</Radio>
			<Radio v-model="single" class="sing-sel">审核不通过</Radio>
		</div>

		<div>
			<span class="sub-title">消息发送</span>
			<div class="message-box">
			  <textarea class="text-box"></textarea>
			    <Select v-model="model2" size="small" style="width:100px">
			        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
			    </Select>
			</div>
		</div>

		<div class="bottom-box">
			
			<Button class="btns" type="ghost" @click="closeWindos">取消</Button>
			<Button class="btns" type="primary">确认</Button>
		</div>

	</div>
</template>
<script>
	export default {
		data() {
           return {
           	  single:'',
              model2:''
           }
		},
       methods: {
       	closeWindos() {
       		this.$emit("close")
       	}
       }
	}
</script>

<style scoped>
	.pop-position {
		width:496px;
		height:400px;
		position: fixed;
		left:50%;
		top:230px;
		transform: translateX(-50%);
		background: #fff;
		box-sizing: border-box;
		padding:8px 15px;
		border:1px solid #dddee1;
	}
	.head-style {
       width:100%;
       height: 38px;
       line-height: 38px;
       border-bottom:1px solid #c9cacc;
       font-size: 14px;
       font-weight: 400px;
       color:#1c2438;
       position: relative;
	}
	.close {
		display: block;
		width:14px;
		height: 14px;
		position: absolute;
		right:4px;
		top:12px;
		cursor:pointer;
	}
	.sub-title {
		display: block;
		height: 38px;
		line-height: 38px;
		color:#bbbec4;
		font-size:12px;
		font-weight: 400px;
		box-sizing: border-box;
		padding:2px 10px;
		position: relative;
	}
	.sub-title:before {
		display: inline-block;
		position: absolute;
		content: " ";
		width:4px;
		height: 4px;
		background: #bbbec4;
		border-radius: 50%;
		left:2px;
		top:18px;
	}
	.sing-sel {
		display: block;
		color:#1c2438;
		margin-left:20px;
		font-size: 12px;
		margin-bottom: 5px;
	}
	.message-box {
		width:453px;
		height: 132px;
		padding:2px;
		border:1px solid #ccc;
		margin:0 auto;
	}
	.text-box {
		width:100%;
		height: 84px;
		border:none;
		resize: none;
		border-bottom:1px solid #dddee1;
		margin-bottom:5px;
	}
	.bottom-box {
		position: absolute;
		bottom:0;
		left:0px;
		width:100%;
		height: 80px;
		line-height: 80px;
		background: #f8f8f9;
	}
	.btns {
		width:90px;
        height: 36px;
        margin-left:20px;
	}
</style>