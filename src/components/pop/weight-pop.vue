<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">权重设置</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
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
      
         
            <Button class="pop-confirm-btn" style="background: #fff" type="ghost" @click="closePop">取消</Button>
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
	  		...mapMutations([
                    'setPopStatus'
	  			]),
	  		closePop() {
	  			this.setPopStatus()
	  		}
	  	}
	  
	}
</script>