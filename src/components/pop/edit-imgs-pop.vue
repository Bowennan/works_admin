<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">
				图集编辑
			</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">
				图集信息
			</span>
			<Upload action="//jsonplaceholder.typicode.com/posts/">
		        <div class="pop-small-pic" style="width: 58px;height:58px;line-height: 58px; text-align:center">
		            <Icon type="camera" size="20"></Icon>
		        </div>
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
        	...mapMutations({
        		setPopStatus: 'setPopStatus'
        	}),
            
            closePop() {
            	this.setPopStatus()
            }
        }
	}
</script>