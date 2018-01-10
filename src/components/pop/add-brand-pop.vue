<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">新增产品</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

			<div class="pop-sub-container">
				<span class="pop-sub-title">品牌名字</span>
				<p class="pop-items">
					<span class="pop-item-title">品牌名字</span>
					 <Input size="small" v-model="nombre" placeholder="Enter something..." style="width: 200px"></Input>
				</p>
			</div>

			<div class="pop-sub-container">
				<span class="pop-sub-title">品牌Logo图 (190*48px)</span>
				<Upload action="//jsonplaceholder.typicode.com/posts/">
			        <div class="pop-small-pic" style="width: 58px;height:58px;line-height: 58px; text-align:center">
			            <Icon type="camera" size="20"></Icon>
			        </div>
			    </Upload>
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