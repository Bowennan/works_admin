<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">产品新增</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container pop-scroll-bar" style="height:400px; overflow-y: scroll; overflow-x: hidden">
			<div class="pop-sub-container">
				<span class="pop-sub-title">产品分类选择</span>
				<p class="pop-items">
					<Select size="small" v-model="clasificacion" style="width:130px">
				        <Option v-for="item in 6" :value="item" :key="item">{{ item }}</Option>
				    </Select>
				</p>
				<p class="pop-items">
					<Select size="small" v-model="marca" style="width:130px">
				        <Option v-for="item in 6" :value="item" :key="item">{{ item }}</Option>
				    </Select>
				</p>
			</div>

			<div class="pop-sub-container">
				<span class="pop-sub-title">产品信息填写</span>
				<p class="pop-items">
					<span class="pop-item-title">品名</span>
					 <Input size="small" v-model="nombre" placeholder="Enter something..." style="width: 172px"></Input>
				</p>
				<p class="pop-items">
					<span class="pop-item-title">型号</span>
					 <Input size="small" v-model="modelos" placeholder="Enter something..." style="width: 172px"></Input>
				</p>
				<p class="pop-items">
					<span class="pop-item-title">参考价</span>
					 <Input size="small" v-model="kao" placeholder="Enter something..." style="width: 172px"></Input>
				</p>
				<p class="pop-items">
					<span class="pop-item-title">上市时间</span>
					<DatePicker size="small" type="date" placeholder="Select date" style="width: 172px"></DatePicker>
				</p>
				<p class="pop-items">
					<span class="pop-item-title">产品描述</span>
					 <Input size="small" v-model="descripcion" placeholder="Enter something..." style="width: 362px"></Input>
				</p>
			</div>

			<div class="pop-sub-container">
				<span class="pop-sub-title">产品主图</span>
				<Upload action="//jsonplaceholder.typicode.com/posts/">
			        <div class="pop-small-pic" style="width: 58px;height:58px;line-height: 58px; text-align:center">
			            <Icon type="camera" size="20"></Icon>
			        </div>
			    </Upload>
			</div>

			<div class="pop-sub-container" style="border:none">
				<span class="pop-sub-title">推新机榜</span>
				<p class="pop-items">
					 <Radio v-model="arriba" class="c-carbon" style="margin-bottom:10px">默认推百科首页新机榜产品</Radio>
				</p>
				<Upload action="//jsonplaceholder.typicode.com/posts/">
			        <div class="pop-small-pic" style="width: 58px;height:58px;line-height: 58px; text-align:center">
			            <Icon type="camera" size="20"></Icon>
			        </div>
			    </Upload>
			</div>
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