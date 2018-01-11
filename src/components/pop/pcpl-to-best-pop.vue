<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">百科精选帖子</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">
				是否确认精选到该产品的精选帖子列表下？
			</span>
			
			<RadioGroup class="pop-single-sel" v-model="animal">
		        <Radio label=1>是，精选</Radio>
		        <Radio label=0>否，不精选</Radio>
		    </RadioGroup>
			
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
              Modificarvalor: '',
              animal:''
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