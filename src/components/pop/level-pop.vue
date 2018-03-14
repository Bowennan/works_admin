<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">等级评定</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">等级选择</span>

			<RadioGroup class="pop-single-sel" v-model="level">
		        <Radio style="display:block; margin:8px 4px" label=1>A级</Radio>
		        <Radio style="display:block; margin:8px 4px" label=2>B级</Radio>
		        <Radio style="display:block; margin:8px 4px" label=3>C级</Radio>
		        <Radio style="display:block; margin:8px 4px" label=4>D级</Radio>
		        <Radio style="display:block; margin:8px 4px" label=0>无等级</Radio>
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
              <Button class="pop-confirm-btn" type="primary" @click="submit">确认发送</Button>
    
	   </div>

	</div>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex'
	export default {
		props: {
			id: {
				type:Number
			}
		},
		data() {
			return {
				infos:'',
				level:null
			}
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
			submit() {
				this.updateArticle({
					path: this.$route.params.path,
					id: this.id,
					level: this.level
				})

				this.$emit('reload')
			}
		}
	}
</script>