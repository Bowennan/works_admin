<template>
	<div class="pop-container">
			<div class="pop-header">
				<span class="pop-title">产品参数设置</span>
				<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
			</div>
			<div class="pop-sub-container pop-scroll-bar" style="height:400px; overflow-y:scroll;">
			    <Tabs value="name1">
			        <TabPane v-for="item in 7" :label="'参数'+item" :name="'name'+item" style="overflow:hidden" :key="item">
			        	
			        	<ul class="para-table">
			        		<li class="para-title">
			        			<span class="name">参数名</span>
			        			<span class="value">数值</span>
			        			<span class="unit">单位</span>
			        		</li>
			        		<li class="para-contents" v-for="item in 5">
			        			<span>品牌01</span>
			        			<span>
			        				<input type="text" value="5966">
			        			</span>
			        			<span>千克</span>
			        		</li>
			        	</ul>
			        
			        </TabPane>
			    </Tabs>
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
          	model11:'啊哈哈',
          	value: 'djfkd',
          	parentHeight:'',
          	model1:'',
          	single:''
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

<style>
	.para-title {
		display: grid;
		grid-template-columns: 24% 46% 30%;
		background: #f5f5f5;
		height: 32px;
		line-height: 32px;
	}
	.para-title span {
		padding:0 10px;
	}
	.para-contents {
		display: grid;
		grid-template-columns: 24% 46% 30%;
		font-size:0;
		box-sizing: border-box;
	}
	.para-contents span{
        padding:0 10px;
        border:1px solid #f5f5f5;
        font-size:12px;
        display: inline-block;
        height: 32px;
        line-height: 32px;
        margin-top:-1px;
	}
	.para-contents span input {
		border:none;
		outline:none;
		width:100%;
	}
</style>