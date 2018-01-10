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
				<p class="pop-items">
					<span class="pop-item-title">二级参数</span>
					 <Input size="small" v-model="dosclase" placeholder="Enter something..." style="width: 220px"></Input>
				</p>

				<p class="pop-items">
					<span class="pop-item-title">单位</span>
					 <Input size="small" v-model="unidad" placeholder="Enter something..." style="width: 220px"></Input>
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
	   		unidad:'',
	   		unaclase:'',
	   		dosclase:''
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