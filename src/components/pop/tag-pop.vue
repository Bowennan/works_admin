<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">TAG设置</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">已添加TAG关键词</span>
			<p class="pop-items" v-for='(item, index) in haveTag' :key="index">
				<span class="c-carbon pop-item-title-l">{{item}}</span> <span  class="c-azul pointer" @click="remove(index)">删除</span>
			</p>
			<p v-if="!haveTag.length" class="pop-items">暂无TAG</p>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">
				新建TAG关键词
			</span>
			<p class="pop-item">
				<Input size="small" v-model="value" @on-change="kanakn" placeholder="创建TAG" style="width: 200px"></Input>
				<span class="c-azul" @click="addTag()">确认添加</span>
			</p>
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
			haveTag: {
				type:Array,
				default: []
			},
			id: {
				type:Number
			}
		},
		data() {
			return {
				value: ''
			}
		},
		methods: {
			kanakn() {
				console.log(this.value)
			},
			...mapMutations([
                   'setPopStatus'
				]),
			...mapActions([
                   'updateTag'
				]),
			closePop () {
				this.setPopStatus()
			},
			remove(index) {
				this.$nextTick(() => {
					this.haveTag.splice(index, 1)
				})
			},
			addTag() {
				    this.$nextTick(() => {
						this.haveTag.push(this.value)
					})
			},
			submit() {

				try {
					this.updateTag({

						id: this.id,
						tag_ids: this.haveTag
					})
				} catch(e) {
					console.log(e)
				}
				


				// this.choiceArr.length = 0
				this.$emit('reload')
			}
		}
	}
</script>