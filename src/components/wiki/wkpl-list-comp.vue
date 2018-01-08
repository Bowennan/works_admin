<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">
               <Checkbox v-model="single">ID/型号/上市日期</Checkbox>
			</li>
			<li class="posting-author">品类/品牌名</li>
			<li class="posting-info">产品关联内容</li>
			<li class="posting-con">百科精选</li>
			<li class="posting-action">操作</li>
		</ul>

		<ul>
			<li>
				<ul class="list-contents">
					<li class="posting-id more-line">
						<p style="position:relative; padding-left:20px;"> 
							<Checkbox style="position:absolute; top:36px; left:0" v-model="single"></Checkbox>
							<span class="lines">13232</span>
							<span class="lines">IPHONE X</span>
							<span class="lines">上市：<span class="c-gris">2017-12-9</span></span>
						</p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="lines c-gris">类别：<span class="c-carbon">智能单车</span></span>
							<span class="lines c-gris">品牌：<span class="c-carbon">小米</span></span>
							<span class="lines c-gris">品名：<span class="c-carbon">asdv</span></span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p class="h-block01">
							<span class="items">
								<span class="c-gris">编辑：
                                   <span class="c-carbon">565</span>
								</span>
							</span>
							<span class="items">
								<span class="c-gris">参数：
                                   <span class="c-carbon">565</span>
								</span>
							</span>
							<span class="items">
								<span class="c-gris">图集：
                                   <span class="c-carbon">565</span>
								</span>
							</span>
						</p>
						<p class="h-block02">
							<span class="items">
								<span class="c-gris">内容：
                                   <span class="c-carbon">565</span>
								</span>
							</span>
							<span class="items">
								<span class="c-gris">人物：
                                   <span class="c-carbon">565</span>
								</span>
							</span>
							<span class="items">
								<span class="c-gris">渠道：
                                   <span class="c-carbon">565</span>
								</span>
							</span>
						</p>
					</li>
					<li class="posting-con more-line">
					    <p>
					    	<span class="lines c-gris">精选帖子：<span class="c-carbon">10</span></span>
					    	<span class="lines c-gris">精选回答：<span class="c-carbon">5</span></span>
					    	<span class="lines c-gris">视频：<span class="c-carbon">PC | 5</span></span>
					    </p>
					</li>
					<li class="posting-action">
						<p class="h-block01">
							<span class="items">
								<span class="c-carbon">编辑产品</span>
							</span>
							<span class="items">
								<span class="c-carbon">参数设置</span>
							</span>
							<span class="items">
								<span class="c-carbon" @click="openPop">图集编辑</span>
							</span>
						</p>
						<p class="h-block02">
							<span class="items">
								<span class="c-carbon">
									<router-link to="/connect_contents"
									              target="_blank" 

									   @click.native="changeId(test.id)"                                      
									>
										内容关联
									</router-link>
								</span>
							</span>
							<span class="items">
								<span class="c-carbon">
                                  <router-link to="/connect_persons"
									              target="_blank" 

									   @click.native="changeId(test.id)"                                      
									>
										人物联系
									</router-link>
								</span>
							</span>
							<span class="items">
								<span class="c-carbon">
									<router-link to="/manage_ways"
                                                 target="_blank"
                                                 @click.native="changeId(test.id)"
									>渠道管理</router-link>
								</span>
							</span>
						</p>
						<p class="h-block03">
							<span class="items">
								<span class="c-gris">付费 | </span>
								<span>设置</span>
							</span>
							<span class="items">
								<span class="c-gris">TAG | </span>
								<span>设置</span>
							</span>
							<span class="items">
								<span class="c-carbon">删除{{routerId}}</span>
							</span>
						</p>
					</li>
				</ul>
			</li>
		</ul>

		<!-- 弹窗 -->
		<div class="cover-style"
		     v-show='popStatus' 
		     :style="{width:coverWidth + 'px', height:coverHeight + 'px'}"
		>
			<div class="pop-wrapper">
				<add-products v-if="1 === popNum"></add-products>
				<edit-imgs v-if="2 === popNum"></edit-imgs>
			</div>
		</div>
	</div>
</template>

<script>
    import addProducts from '@/components/pop/add-products-pop'
    import editImgs from '@/components/pop/edit-imgs-pop'
    import {mapGetters, mapMutations} from 'vuex'
	export default {
       data() {
       	 return {
       	 	test: {
       	 		name: "男孩波",
       	 		age: 28,
                id: 168
       	 	},
       	 	single:false
       	 }
       },
       computed: {
       	...mapGetters([
               'routerId',
               'popStatus',
               'popNum'
       		])
       },
       created() {
       	this.getWindowsSize()
       },
       methods: {
       	getWindowsSize() {
       		this.coverWidth = window.document.body.offsetWidth;
       		this.coverHeight = window.document.body.offsetHeight;
       	},
       	...mapMutations([
              'setRouterId',
              'setPopNum',
              'setPopStatus'
       		]),
       	changeId (num){
       		 console.log("就看")
       		this.setRouterId(num)
       	},
       	openPop() {
           this.setPopNum(2)
           this.setPopStatus()
       	}
       },
       components: {
       	addProducts,
       	editImgs
       }
   }
</script>

<style scoped>
    span {
    	padding:2px 0;
    }
	.col {
		line-height: 18px;
	}
	.posting-author {
		flex:0 0 220px;
	}
	.posting-info {
		min-width: 214px;
		flex:1;
		display: flex;
	}
	.posting-con {
		min-width: 190px;
		flex:1;
	}
	.posting-action {
		min-width: 250px;
		flex:1;
		display: flex;
	}
	.posting-action p, .posting-info p {
       padding-top:16px;
	}
    .h-block01 {
		flex:0 0 80px;
	}
    .h-block02 {
		flex:0 0 80px;
	}
    .h-block03 {
		flex:0 0 80px;
	}
	.items {
		display: block;
		padding:2px 0;
	}
	.posting-id{
		min-width:200px;
		flex:1;
	}
	.more-line p .lines {
		display: block;
	}
	.con-pop .poptip-box p {
		display: block;
		height: 25px;
		line-height: 25px;
		padding:5px;
		font-size: 12px;
		font-weight: 400;
		color:#bbbec4;
	}
</style>



