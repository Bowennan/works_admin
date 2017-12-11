<template>
	<div style="width:100%; height:630px; background:#fff">
				<h3 class="pop-box-header">昵称管理
	              <Icon type="close-round" class="pop-box-close"></Icon>
	              <span class="pop-box-close" @click="closeTheNick"></span>
				</h3>
					
					<div class="item-box">
						<span class="item-title">昵称修改记录</span>
						<p class="item">
							<span>你是某某某</span>
							<span class="right-ob">2017-12-11</span>
						</p>
						<p class="item">
							<span>你是某某某</span>
							<span class="right-ob">2017-12-11</span>
						</p>
						<p class="item">
							<span>你是某某某</span>
							<span class="right-ob">2017-12-11</span>
						</p>
					</div>

					<div class="item-box">
						<span class="item-title">昵称违规操作</span>
						<p class="instead-nick-name">
							<Checkbox v-model="single">随机生成昵称替代</Checkbox>
						</p>
					</div>

					<div class="textarea-box">
					  <textarea class="re-text">的垃圾分厘卡</textarea>
                      <div class="text-select">
					  	<Select v-model="model1" style="width:130px">
					        <Option v-for="item in 5" :value="item" :key="item">{{ item}}</Option>
					    </Select>
					  </div>
					</div>
                    
                    <div class="bottom-box ">
                    	<div class="autho">
                    		 <Select v-model="model11" style="width:200px">
						        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
						     </Select>
                    		 <Button class="info-input" type="primary">确认授权人</Button>
                    	</div>

                    	<div class="autho">
                    		<Input v-model="value" placeholder="Enter something..." style="width: 200px"></Input>
                    		<Button class="info-input" type="primary" style="width:92px;">认证</Button>
                    	</div>

                    	<div>
                    		<Button class="cancel-btn" type="primary" style="background:#fff; border:1px solid #84878f; color:#1c2438" @click="closeTheNick">取消</Button> 
                    		<Button class="cancel-btn" type="primary">确认违规</Button>
                    	</div>
                    </div>
			</div>
</template>

<script>
	export default {
       data() {
        	return {
        		single: 9,
        		model1: "消息模板",
        		value5: "我是输入框",
        		model11: "我是最后的选择框",
        		value:"我是认证框",
        		switchBtn: false
        	}
        },
        methods: {
           closeTheNick() {
           	this.$emit("closeTheWindow")
           }
        }
	}
</script>

<style scoped>
	    .item {
	    	padding:2px 10px;
	    	position: relative;
	    	color:#495060;
	    	font-weight: bold;
	    }
	    .right-ob {
	    	position: absolute;
	    	right:5px;
	    	color:#bbbec4;
	    	font-weight: 400;
	    }
	    .instead-nick-name {
	    	padding:2px 10px;
	    	position: relative;
	    	color:#bbbec4;
	    	font-weight: 400;
	    }
</style>