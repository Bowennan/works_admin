<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">
				产品视频新增
			</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">
				产品分类选择
			</span>
			<p class="pop-items">
				<Select v-model="model1" style="width:200px">
			        <Option v-for="item in 3" :value="item" :key="item">{{ item }}</Option>
			    </Select>
			</p>
			<p class="pop-items">
				<Select v-model="model1" style="width:200px">
			        <Option v-for="item in 3" :value="item" :key="item">{{ item }}</Option>
			    </Select>
			</p>
			<p class="pop-items">
				<Select v-model="model1" style="width:200px">
			        <Option v-for="item in 3" :value="item" :key="item">{{ item }}</Option>
			    </Select>
			</p>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">
				视频图 (图片大小500*340px)
			</span>
			<Upload action="//jsonplaceholder.typicode.com/posts/">
		        <div class="pop-small-pic" style="width: 58px;height:58px;line-height: 58px; text-align:center">
		            <Icon type="camera" size="20"></Icon>
		        </div>
		    </Upload>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">
				PC端视频上传
			</span>
			<p class="pop-items">
				<Upload action="//jsonplaceholder.typicode.com/posts/">
			        <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
			    </Upload>
			</p>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">
				移动端视频上传
			</span>
			<p class="pop-items">
				<Upload action="//jsonplaceholder.typicode.com/posts/">
			        <Button type="ghost" icon="ios-cloud-upload-outline">上传文件</Button>
			    </Upload>
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