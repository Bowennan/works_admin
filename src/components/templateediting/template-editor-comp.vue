<template>
	<div class="editor">
		<div class="header">
			<span class="title">消息模板编辑</span>
		</div>

		<div class="textarea-box">
			 <div class="textarea-con">
                <div class="parameters">
                    <span class="para-choose">变量添加选择：</span>
                    <Button class="paras" type="ghost">用户ID</Button>
                    <Button class="paras" type="ghost">日期</Button>
                    <Button class="paras" type="ghost">地址</Button>
                    <Button class="paras" type="ghost">等等</Button>
                </div>
			 	<Input class="textarea" :rows="7"  v-model="value6" type="textarea" placeholder="输入发布内容..."></Input>

			 	<div class="submit">
                     <div class="sub-box">
                        <Select class="category" v-model="model1" style="width:105px">
                            <Option v-for="item in 6" :value="item" :key="item">{{ item}}</Option>
                        </Select>
                        <Input class="template-name" v-model="value" placeholder="模板名称"></Input>
                        <Button class="add" type="primary">确认添加模板</Button> 
                     </div>          
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
    .textarea-box {
    	width:100%;
    }
    .textarea-con {
    	box-sizing: border-box;
    	width:96%;
    	min-width: 986px;
    	margin:0 28px;
    	position: relative;
        padding:4px 10px 12px 10px;
        border:1px solid #ccc;
    }

    .textarea {
    	width:100%;
    	margin-bottom:22px;
    }

    .parameters {
        margin:10px 0;
    }
    .para-choose {
        font-size:14px;
        color:#495060;
        font-weight:bold;
    }
    .paras {
        margin-right: 12px;
        height: 24px;
        line-height: 24px;
        padding:0 8px;
        text-align: center;
    }
    .submit {
      position:relative;
      height: 30px;
    }
    .sub-box {
        position: absolute;
        right:0;
    }
    .template-name {
        width:120px;
    }
</style>

