<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">百科精选帖子排序</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">
				帖子排序选择 (数值越大越靠前)
			</span>
			<p class="pop-items">
				<span class="pop-item-title">
					排序填写
				</span>
				<Input size="small" v-model="Modificarvalor" placeholder="Enter something..." style="width: 220px"></Input>
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
              Modificarvalor: ''
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