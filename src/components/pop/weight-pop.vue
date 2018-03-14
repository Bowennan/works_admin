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
				<span class='c-carbon'>权重值：{{weight}} - </span>
				 <Input size='small' :number='true' v-model="value" placeholder="偏移值" style="width: 100px"></Input>
				 <span class="c-carbon">= {{result || "暂无结果"}}</span>
			</p>

			<p class='pop-items'>
				<span class='c-gris'>
					权重的数值越小位置越靠前，并且随着时间的变化权重数值变大，变化单位（小时）
				</span>
			</p>
		</div>

		<div class="pop-bottom-box">
      
         
            <Button class="pop-confirm-btn" style="background: #fff" type="ghost" @click="closePop">取消</Button>
              <Button class="pop-confirm-btn" type="primary" @click="submit">确认</Button>
    
	   </div>
	</div>
</template>

<script>
    import {mapMutations, mapActions} from 'vuex'
	export default {
	    props: {
	    	id: {
	    		type:Number
	    	},
	    	weight: {
	    		type:Number
	    	}
	    },
	  	data() {
          return {
            value:''
          }
	  	},
	  	computed: {
	  		result() {
               return this.weight - this.value 
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
	  				weight: this.result
	  			})

	  			this.$emit('reload')
	  		}
	  	}
	  
	}
</script>