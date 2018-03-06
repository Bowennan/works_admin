<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">帖子状态选择</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">状态选择</span>

			<RadioGroup class="pop-single-sel" v-model="status">
		        <Radio style="display:block; margin:8px 4px" label=1>正常</Radio>
		        <Radio style="display:block; margin:8px 4px" label=0>隐藏帖子</Radio>
		        <Radio style="display:block; margin:8px 4px" label=2>退回草稿箱</Radio>
		    </RadioGroup>
		</div>

		<div class="pop-sub-container" style="border:none">
	      <span class="pop-sub-title">消息发送</span>
	      <div class="border" style="height:132px;">
	        <textarea class="text-contents border-bottom"></textarea>
	        <Select class="text-sel"  size="small" v-model="infos" style="width:150px">
              <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
            </Select>
	      </div> 
	    </div>

	    <div class="pop-bottom-box">
      
              
              <Button class="pop-confirm-btn" style="background:#fff" type="ghost" @click="closePop">取消</Button>
              <Button class="pop-confirm-btn" type="primary" @click="changeStatus">确认发送</Button>
    
	   </div>

	</div>
</template>

<script>
    import {mapMutations, mapGetters, mapActions} from 'vuex'
	export default {
		props: {
            id: {
            	type:Number
            }
		},
		data() {
			return {
				infos:'',
				status:null
			}
		},
		computed: {
          ...mapGetters([
               "articleId",
               "datas",
               "articleIndex",
               "source"
          	])
		},
		methods: {
			...mapMutations([
                   'setPopStatus'
				]),
			...mapActions([
                   'updateArticle'
				]),
			closePop() {
				this.setPopStatus()
			},
			changeStatus() {
				this.updateArticle({
                    id: this.id,
                    status: this.status
				})

				this.$emit('reload')
			}
		}
	}
</script>