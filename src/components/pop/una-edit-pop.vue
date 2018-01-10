<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">编辑一级品类</span>
			<Icon class="pop-close" type="close-round" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">
				产品一级品类编辑
			</span>

			<p class="pop-items">
				<span class="pop-item-title">一级品类</span>
				 <Input v-model="value" placeholder="Enter something..." style="width: 200px"></Input>
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