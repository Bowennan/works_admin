<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">帖子首推</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">已首推</span>
			<p class="pop-items" v-for='(item, index) in haveRecommend' :key="index">
				<span class="c-carbon pop-item-title-l">{{item.name}}</span> <span  class="c-azul pointer" @click="remove(index)">删除</span>
			</p>
			<p v-if="!haveRecommend.length" class="pop-items">暂无推首</p>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">推荐地方选择（可全选）</span>
			<p class="pop-items">
				 <Checkbox class="c-carbon" v-model="infos">网站首页推首</Checkbox>
			</p>
			<p class="pop-items">
				<span class="c-gris">社区推首</span>
				<!-- <span>{{choiceArr}}</span> -->
				<Select v-model="choiceArr" multiple style="width:260px">
			        <Option v-for="item in allCommunity" :value="item.id" :key="item.id">{{ item.name }}</Option>
			    </Select>
			</p>
		</div>


		<div class="pop-sub-container">
			<span class="pop-sub-title">推首时间选择</span>
			<p class="pop-items">
				<span>选定时间定时推首：</span>
				 <DatePicker size="small" type="date" placeholder="Select date" style="width: 200px"></DatePicker>
			</p>

			<p class="pop-items">
				<span class='c-gris'>日期最远可选为一个月，不选默认立刻推首</span>
			</p>
		</div>

		<div class="pop-sub-container" style="border:none">
	      <span class="pop-sub-title">消息发送</span>
	      <div class="border" style="height:132px;">
	        <textarea class="text-contents border-bottom"></textarea>
	        <Select class="text-sel"  size="small" v-model="choiceArr" style="width:150px">
	              <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
	          </Select>
	      </div>
	    </div>

	    <div class="pop-bottom-box">
			<Button  class="pop-confirm-btn" type="ghost" @click="closePop">取消</Button>
			<Button  class="pop-confirm-btn" type="primary" @click="submit">确认</Button>
            
		</div>
	</div>
</template>

<script>
    import {updateArticleChoice} from '@/axios/api'
    import {mapMutations, mapActions} from 'vuex'
	export default {
		props: {
			haveRecommend: {
				type:Array
			},
			id: {
				type:Number
			},
			allCommunity: {
				type:Array 
			}
		},
		data() {
			return {
				infos:true,
				choiceArr:[]
			}
		},
		methods: {
			...mapMutations([
                   'setPopStatus'
				]),
			...mapActions([
                   'updateArticleChoice'
				]),
			closePop () {
				this.setPopStatus()
			},
			remove(index) {
				this.$nextTick(() => {
					this.haveRecommend.splice(index, 1)
				})
			},
			submit() {
				let haveRecommendId = []
				this.haveRecommend.forEach((item) => {
					haveRecommendId.push(item.id)
				})
				this.updateArticleChoice({
					id: this.id,
					community_ids: (this.choiceArr).concat(haveRecommendId)
				})
				// this.choiceArr.length = 0
				this.$emit('reload')
			}
		}
	}
</script>