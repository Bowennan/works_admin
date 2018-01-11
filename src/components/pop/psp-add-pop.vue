<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">产品精选站外帖子添加</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container pop-scroll-bar" style="height:400px; overflow-y: scroll; overflow-x: hidden">
			<div class="pop-sub-container">
				<span class="pop-sub-title">帖子分类与类型选择</span>
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
				<span class="pop-sub-title">帖子信息</span>
				<p class="pop-items">
					<span class="pop-item-title">文章链接</span>
					 <Input size="small" v-model="nombre" placeholder="Enter something..." style="width: 172px"></Input>
				</p>
				<p class="pop-items">
					<span class="pop-item-title">来源网站名</span>
					 <Input size="small" v-model="modelos" placeholder="Enter something..." style="width: 172px"></Input>
				</p>
				<p class="pop-items">
					<span class="pop-item-title">文章标题</span>
					 <Input size="small" v-model="kao" placeholder="Enter something..." style="width: 172px"></Input>
				</p>
				<p class="pop-items">
					<span class="pop-item-title">文章简介</span>
					<Input v-model="value5" type="textarea" placeholder="Enter something..."></Input>
				</p>
			</div>

			<div class="pop-sub-container">
				<span class="pop-sub-title">文章头图 (大小238*160px)</span>
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