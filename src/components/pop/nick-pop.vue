<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">用户昵称管理</span>
			<Icon class="pop-close" type="close-round" @click.native="closeNick"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">昵称修改记录</span>
			<p class="pop-items pop-two-cols">
				
				<span class="pop-flex-one c-carbon">我是大理州</span><span class="pop-flex-one">2018-12-25</span>
				
			</p>
			<p class="pop-items pop-two-cols">
				<span class="pop-flex-one c-carbon">我是大理州</span><span class="pop-flex-one">2018-12-25</span>
			</p>
			<p class="pop-items pop-two-cols">
				<span class="pop-flex-one c-carbon">我是大理州</span><span class="pop-flex-one">2018-12-25</span>
			</p>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">昵称违规操作</span>
			<p class="pop-items">
				 <Checkbox v-model="check01" class="c-carbon">发送违规信息给用户</Checkbox>
				  <Checkbox v-model="check02" class="c-carbon">随机生成昵称替代</Checkbox>
			</p>
		</div>

		<div class="pop-sub-container border text-box">
			<textarea class="text-contents border-bottom"></textarea>
			<Select class="text-sel"  size="small" v-model="infos" style="width:150px">
		        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
		    </Select>
		</div>

		<div class="pop-bottom-box-big">
			
				<div class="sub-btn-input">
					<Select class="input-and-sel" size="small" v-model="infos" style="width:200px">
				        <Option v-for="item in 4" :value="item" :key="item">{{ item }}</Option>
				    </Select>
				    <Button class="more-than-two" size="small" type="primary">确认授权人</Button>
				</div>
                
                <div class="sub-btn-input">
                	<Input class="input-and-sel" size="small" v-model="infos" placeholder="Enter something..." style="width: 200px"></Input>
			        <Button class="more-than-two" size="small" type="primary">认证</Button>
                </div>

			     <div class="sub-btn-input">
			     	<Button class="more-than-two" type="ghost" @click="closeNick">取消</Button>
			        <Button class="more-than-two" type="primary" @click="closeNick">确认发送</Button>
			     </div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				check01:true,
				check02:true,
				infos:'无'
			}
		},
		methods: {
			closeNick() {
				this.$emit('close')
			}
		}
	}
</script>