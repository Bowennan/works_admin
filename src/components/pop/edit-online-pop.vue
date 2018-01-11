<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">产品线上渠道编辑</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

			<div class="pop-sub-container">
				<span class="pop-sub-title">线上渠道选择</span>
				<p class="pop-items">
					<Select size="small" v-model="clasificacion" style="width:130px">
				        <Option v-for="item in 6" :value="item" :key="item">{{ item }}</Option>
				    </Select>
				</p>
			</div>

			<div class="pop-sub-container">
				<span class="pop-sub-title">线上渠道信息编辑</span>
				<p class="pop-items">
					<span class="pop-item-title">店铺名</span>
					 <Input size="small" v-model="nombre" placeholder="Enter something..." style="width: 172px"></Input>
				</p>
				<p class="pop-items">
					<span class="pop-item-title">商品编号</span>
					 <Input size="small" v-model="modelos" placeholder="Enter something..." style="width: 172px"></Input>
				</p>
				<p class="pop-items">
					<span class="pop-item-title">商品链接</span>
					 <Input size="small" v-model="kao" placeholder="Enter something..." style="width: 172px"></Input>
				</p>
				<p class="pop-items">
					<span class="pop-item-title">参考价格</span>
					 <Input size="small" v-model="descripcion" placeholder="Enter something..." style="width: 172px"></Input>
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
              clasificacion:'',            //类别
              marca:'',                    //品牌
              nombre:'',                   //品名
              modelos:'',                  //型号
              kao:'',                      //参考价
              descripcion:'',              //描述
              arriba:''                    //推首
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