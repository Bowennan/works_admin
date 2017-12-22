<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">新增手机社区产品榜</span>
			<Icon class="pop-close" type="close-round" @click.native="closeWindos"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">产品榜类型</span>
			 <Select size="small" v-model="sel" style="width:150px">
		        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
		     </Select>
			<span class="pop-sub-title">上传图片 （64*64px图片，必填）</span>

			<Upload action="//jsonplaceholder.typicode.com/posts/">
		        <div class="pop-small-pic" style="width: 58px;height:58px;line-height: 58px; text-align:center">
		            <Icon type="camera" size="20"></Icon>
		        </div>
		    </Upload>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">信息填写</span>
			<p class="pop-items">
				<span class="pop-item-title">产品ID：</span>  <Input size="small" v-model="value" placeholder="Enter something..." style="width: 230px"></Input>
			</p>
		</div>

		<div class="pop-bottom-box">
			<Button class="pop-confirm-btn" type="ghost" @click="closeWindos">取消</Button>
			<Button class="pop-confirm-btn" type="primary">确认</Button>
		</div>
	</div>
</template>

<script>
	export default {
        data() {
        	return {
        		value: "无",
        		single:'',
        		sel:''
        	}
        },
        methods: {
        	closeWindos (){
        		this.$emit('close')
        	}
        }
	}
</script>

<style scoped>
	.pop-container {
		width:100%;
		/*height: 750px;*/
		box-sizing: border-box;
		padding:2px 10px;
		background: #fff;
		position: absolute;
		top:0;
		left:0;
		font-size:12px;
		font-weight: 400;
		color:#bbbec4;
		border:1px solid #e9eaec;
		padding-bottom:90px;
	}
	.pop-header {
       width:100%;
       height: 38px;
       line-height: 38px;
       border-bottom:1px solid #e9eaec;
       position: relative;
	}
	.pop-title {
		font-size: 14px;
		font-weight: bold;
		color:#1c2438;
	}
	.pop-close {
		position: absolute;
		top:5px;
		right:5px;
		color:#1c2438;
		padding:10px;
		font-weight: bold;
		cursor:pointer;
	}
	.pop-sub-container {
		width:100%;
		height: auto;
		padding-bottom:12px;
		border-bottom:1px solid #e9eaec;
	}
	.pop-sub-title {
		display: block;
		padding:18px 10px;
		position:relative;
	}
	.pop-sub-title:before {
		display: block;
		position: absolute;
		content:'';
		width:4px;
		height: 4px;
		background: #ccc;
		border-radius: 50%;
		top:25px;
		left:2px;
	}
	.pop-small-pic {
		width:58px;
		height: 58px;
		line-height: 58px;
		text-align: center;
		border-radius:4px;
		border:1px dashed #e9eaec;
		cursor:pointer;
	}

	.pop-small-pic:hover {
        border:1px dashed #ff890f;
        font-size:16px;
        color:#999;
	}
	.pop-items {
		padding:4px 12px;
	}
	.pop-item-title {
		display: inline-block;
		width:60px;
	}
	.pop-single-sel {
		color:#1c2438;
	}
	.pop-date {
		margin-left:20px;
	}
	.pop-bottom-box {
		position: absolute;
		bottom:0;
		left:0;
		width:100%;
		height:80px;
		background: #f8f8f9;
		line-height: 80px;
	}
	.pop-confirm-btn {
		width:90px;
		margin-left:20px;
	}
</style>