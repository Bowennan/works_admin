<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">
				品类价格区间编辑
			</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">
				品类价格区间编辑
			</span>
			<p class="pop-items">
				<span class="pop-item-title">价格小于</span>
				 <Input size="small" v-model="value" placeholder="Enter something..." style="width: 200px"></Input>
			</p>
		</div>

		<div class="pop-sub-container">
			<p class="pop-items" style="margin:8px 0">
				<span class="pop-item-title">价格区间1</span>
				 <Input size="small" v-model="value" placeholder="Enter something..." style="width: 150px"></Input>
				 -------
				  <Input size="small" v-model="value" placeholder="Enter something..." style="width: 150px"></Input>
			</p>
			<p class="pop-items" style="margin:8px 0">
				<span class="pop-item-title">价格区间1</span>
				<Input size="small" v-model="value" placeholder="Enter something..." style="width: 150px"></Input>
				 -------
				  <Input size="small" v-model="value" placeholder="Enter something..." style="width: 150px"></Input>
			</p>
			<p class="pop-items" style="margin:8px 0">
				<span class="pop-item-title">价格区间1</span>
				<Input size="small" v-model="value" placeholder="Enter something..." style="width: 150px"></Input>
				 -------
				  <Input size="small" v-model="value" placeholder="Enter something..." style="width: 150px"></Input>
			</p>
		</div>

		<div class="pop-sub-container">
			<p class="pop-items">
				<span class="pop-item-title">价格大于</span>
				<Input size="small" v-model="value" placeholder="Enter something..." style="width: 200px"></Input>
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
				value:''
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