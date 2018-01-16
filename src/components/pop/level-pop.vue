<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">帖子评分</span>
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
              <Button class="pop-confirm-btn" type="primary" @click="changeLevel">确认发送</Button>
    
	   </div>

	</div>
</template>

<script>
    import {mapMutations, mapGetters} from 'vuex'
    import {updateArticle} from '@/axios/api'
	export default {
		data() {
			return {
				infos:'',
				level:null
			}
		},
		computed: {
          ...mapGetters([
               "articleId",
               "datas",
               "articleIndex"
          	])
		},
		methods: {
			...mapMutations([
                   'setPopStatus'
				]),
			closePop() {
				this.setPopStatus()
			},
			changeLevel() {
				this.setPopStatus()
				updateArticle({
					id: this.articleId,
					level: parseInt(this.level)
				}).then(res => {
                   
                    ((this.datas)[this.articleIndex]).level = parseInt(this.level)
					console.log("修改成功")
				}).catch(err => {
					console.log("修改失败")
				})
			}
		}
	}
</script>