<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">列表二级参数添加</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">
				产品二级参数添加
			</span>
			<p class="pop-items">
				<span class="pop-item-title">
					一级参数
				</span>
				 <Select size="small" v-model="unaclase" style="width:200px">
			        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
			     </Select>
			</p>

			<p class="pop-items">
				<span class="pop-item-title">
					二级参数
				</span>
				 <Select size="small" v-model="dosclase" style="width:200px">
			        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
			     </Select>
			</p>

			<p class="pop-items">
				<span class="pop-item-title">
					排序
				</span>
				 <Input size="small" v-model="value" placeholder="Enter something..." style="width: 200px"></Input>
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
              unaclase: '',
              dosclase: '',
              value:''
			}
		},

		methods: {
			...mapMutations({
				setPopStatus: 'setPopStatus'
			}),

			closePop() {
				this.setPopStatus()
			}
		}
	}
</script>