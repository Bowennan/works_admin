<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">
				产品关联
			</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container pop-scroll-bar" style="overflow-x:hidden; overflow-y:scroll; height:400px; border:none">
			<div class="pop-sub-container" v-if="connectionArr.length" v-for="(item, index) in connectionArr">
				<span class="pop-sub-title c-carbon">关联{{index + 1}}：</span>
				<p class="pop-items pop-two-cols">
					<span class="pop-flex-one">ID： <span>{{item.id}}</span></span> 
					<span class="pop-flex-one">产品名：<span>{{item.name}}</span></span> 
				</p>
				<p class="pop-items pop-two-cols">
					<span class="pop-flex-one">品牌：<span>暂无</span></span> 
					<span class="pop-flex-one">品类：<span>暂无</span></span> 
				</p>
				<p class="pop-items">
					 <span class="removed"><Icon class="trash" size=16 type="trash-a"></Icon>删除</span>
				</p>
			</div>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">
				新增关联产品
			</span>
			<p class="pop-item">
				<Input size="small" v-model="value" placeholder="Enter something..." style="width: 200px"></Input>
				<span class="c-azul">确认添加</span>
			</p>
		</div>

		<div class="pop-bottom-box">
			<Button  class="pop-confirm-btn" type="ghost" @click="closePop">取消</Button>
			<Button  class="pop-confirm-btn" type="primary">确认</Button>
            
		</div>
	</div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
	export default {
		data() {
			return {
				value:''
			}
		},
		computed: {
			...mapGetters([
                   "articleId",
				   "connectionArr"
				])
		},
		methods: {
			...mapMutations([
                   "setPopStatus"
				]),
			closePop() {
				this.setPopStatus()
			}
		}
	}
</script>