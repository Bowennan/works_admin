<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">
				线下渠道编辑
			</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">
				线下渠道编辑
			</span>
			<p class="pop-items">
				<span class="pop-itme-title">
					省市选择
				</span>
				<Select v-model="model1" style="width:200px">
			        <Option v-for="item in 6" :value="item" :key="item">{{ item }}</Option>
			    </Select>
			</p>

			<p class="pop-items">
				<span class="pop-item-title">
					详细地址
				</span>
				 <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
			</p>
			<p class="pop-items">
				<span class="pop-item-title">
					店名
				</span>
				 <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
			</p>
			<p class="pop-items">
				<span class="pop-item-title">
					联系电话
				</span>
				 <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
			</p>
			<p class="pop-items">
				<span class="pop-item-title">
					营业时间
				</span>
				 <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
			</p>
		</div>

		<div class="pop-bottom-box">
			 <Button class="pop-confirm-btn" type="ghost" style="background:#fff" @click="closePop">取消</Button>
			 <Button class="pop-confirm-btn" type="primary">确认</Button>
		</div>
	</div>
</template>

<script>
   import {mapMutations} from 'vuex'
	export default {
		data() {
			return {

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