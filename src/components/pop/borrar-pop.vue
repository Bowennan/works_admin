<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">产品品类删除</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title" style="margin:20px 0">
				是否删除该条品类？
			</span>
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
			...mapMutations({
				setPopStatus: 'setPopStatus'
			}),

			closePop() {
				this.setPopStatus()
			}
		}
	}
</script>