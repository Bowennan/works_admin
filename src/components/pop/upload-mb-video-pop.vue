<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">
				移动端视频上传
			</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">
				上传视频
			</span>
			<Upload action="//jsonplaceholder.typicode.com/posts/">
		        <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
		    </Upload>
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