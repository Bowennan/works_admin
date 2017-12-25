<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">权重设置</span>
			<Icon type="close-round" class="pop-close" @click.native="closeWeight"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">
				当前权重设置
			</span>

			<p class="pop-items">
				<span class='c-carbon'>权重值：620 - </span>
				 <Input size='small' v-model="value" placeholder="Enter something..." style="width: 100px"></Input>
				 <span class="c-carbon">= 设置后的偏移量</span>
			</p>

			<p class='pop-items'>
				<span class='c-gris'>
					权重的数值越小位置越靠前，并且随着时间的变化权重数值变大，变化单位（小时）
				</span>
			</p>
		</div>

		<div class="pop-bottom-box">
      
         
            <Button class="pop-confirm-btn" type="ghost" @click="closeWeight">取消</Button>
              <Button class="pop-confirm-btn" type="primary" @click="closeWeight">确认</Button>
    
	   </div>
	</div>
</template>

<script>
	export default {
	  
	  	data() {
          return {
            value:''
          }
	  	},
	  	methods: {
	  		closeWeight() {
	  			this.$emit('close')
	  		}
	  	}
	  
	}
</script>