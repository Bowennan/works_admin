<template>
	<div class="editor">
		<div class="header">
			<span class="title">发官方消息</span>
			<Select class="select" v-model="model1" style="width:150px">
		        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
		    </Select>
		</div>

		<div class="textarea-box01">
			 <div class="textarea-con">
			 	<Input class="textarea" :rows="7"  v-model="value6" type="textarea" placeholder="输入发布内容..."></Input>

			 	<div class="sub-box">
                     <Select class="author" v-model="model1" style="width:200px">
                        <Option v-for="item in 6" :value="item" :key="item">{{ item}}</Option>
                    </Select>
                    <Button class="send-code" type="primary">发送认证码</Button>
                    <Input class="code-input" v-model="value" placeholder="授权认证码"></Input>
                    <Button class="confirm" type="primary">认证</Button>
                    <Button class="send" type="primary">发送消息</Button>           
                </div>
			 </div>
		</div>
	</div>
</template>

<script>
	export default {
       data() {
       	 return {
       	 	model1: '',
       	 	value6: '',
       	 	value: ''
       	 }
       }
	}
</script>

<style scoped>
	.editor {
		width:100%;
		box-sizing: border-box;
	}
    .header {
       width:100%;
       height: 70px;
       position: relative;
    }
    .title {
    	position:absolute;
    	top:22px;
    	left:28px;
    	font-size:16px;
    	color:#495060;
    	font-weight: bold;
    }
    .select {
    	position: absolute;
    	top:22px;
    	right:38px;
    }
    .textarea-box01 {
    	width:100%;
    }
    .textarea-con {
    	box-sizing: border-box;
    	width:96%;
    	min-width: 986px;
    	margin:0 28px;
    	position: relative;
    }
    .sub-box {
        position: relative;
        height: 30px;
    }
    .textarea {
    	width:100%;
    	margin-bottom:22px;
    }

    .author, .code-input {
    	width:180px;
    }

    .send {
    	width:90px;
    	position: absolute;
    	right:0;
    }
    .confirm, .send-code {
    	width:70px;
    	margin-right:70px;
    }
    .send-code.ivu-btn {
    	padding:6px 4px;
    	text-align: center;
    }
    .author, .code-input {
    	margin-right:14px;
    }
</style>