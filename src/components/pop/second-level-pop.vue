<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">
				新增二级参数
			</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">
				产品二级参数添加
			</span>
				<div class="s-lev-para" v-if="paraCol.length" v-for="(item, index) in paraCol">
					<p class="pop-items">
						<span class="pop-item-title">二级参数</span>
						 <Input size="small" v-model="item.paraName" placeholder="Enter something..." style="width: 220px"></Input>
					</p>

					<p class="pop-items">
						<span class="pop-item-title">单位</span>
						 <Input size="small" v-model="item.paraUnit" placeholder="Enter something..." style="width: 220px"></Input>
					</p>
				</div>

				<p class="pop-items">
					<span class="pop-item-title c-azul pointer" @click="addSpara">添加二级</span>
				</p>
			
		</div>


		<div class="pop-bottom-box">
			 <Button class="pop-confirm-btn" type="ghost" style="background:#fff" @click="closePop">取消</Button>
			 <Button class="pop-confirm-btn" type="primary" @click="checkOutPara">确认</Button>
		</div>
	</div>
</template>

<script>
    import {mapMutations} from 'vuex'
	export default {
	   data() {
	   	return {
	   		unidad:'',
	   		unaclase:'',
	   		dosclase:'',
	   		paraCol:[{
	   			paraName:'',
	   			paraUnit:''
	   		}]
	   	}
	   },
       methods: {
        	...mapMutations({
        		setPopStatus: 'setPopStatus'
        	}),

        	addSpara() {
        		this.paraCol.push({
        			paraName:'',
        			paraUnit:''
        		})
        	},
            
            closePop() {
            	this.setPopStatus()
            },

            checkOutPara() {
            	console.log(this.paraCol)
            }
        }
	}
</script>

<style scoped>
	.s-lev-para {
		border-bottom:1px solid #e9eaec;
		padding:10px 12px;
	}
</style>