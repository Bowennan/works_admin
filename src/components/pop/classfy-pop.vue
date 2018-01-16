<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">帖子归类社区</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">文章社区选择（可全选）</span>

			<p class="pop-items">
				  <Checkbox class="pop-single-sel" v-model="single">社区1</Checkbox>
				   <Checkbox class="pop-single-sel" v-model="single">社区2</Checkbox>
				    <Checkbox class="pop-single-sel" v-model="single">社区3</Checkbox>
			</p>
			<p class="pop-items">
				  <Checkbox class="pop-single-sel" v-model="single">社区1</Checkbox>
				   <Checkbox class="pop-single-sel" v-model="single">社区2</Checkbox>
				    <Checkbox class="pop-single-sel" v-model="single">社区3</Checkbox>
			</p>
			<p class="pop-items">
				  <Checkbox class="pop-single-sel" v-model="single">社区1</Checkbox>
				   <Checkbox class="pop-single-sel" v-model="single">社区2</Checkbox>
				    <Checkbox class="pop-single-sel" v-model="single">社区3</Checkbox>
			</p>
		</div>

	    <div class="pop-bottom-box">
      
         
            <Button class="pop-confirm-btn" type="ghost" @click="closePop">取消</Button>
              <Button class="pop-confirm-btn" type="primary">确认发送</Button>
    
	   </div>

	</div>
</template>

<script>
    import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				infos:''
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