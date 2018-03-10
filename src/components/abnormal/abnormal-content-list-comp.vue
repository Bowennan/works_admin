<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">举报ID</li>
			<li class="posting-author">标题/类型/日期</li>
			<li class="posting-info">作者信息</li>
			<li class="posting-con">举报信息</li>
			<li class="posting-action">操作</li>
		</ul>

		<ul>
			<li>
				<ul class="list-contents">
					<li class="posting-id more-line">
						<p style="position:relative;"> 
							<span class="lines">13232</span>
						</p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="lines c-gris"><span class="c-carbon">智能单车</span></span>
							<span class="lines c-gris">类型：<span class="c-carbon">小米</span></span>
							<span class="lines c-gris"><span class="c-carbon">2018-03-10</span></span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p>
							<span class="lines">
								<span class="c-gris">
                                   <span class="c-carbon">565</span>
								</span>
							</span>
							<span class="lines">
								<span class="c-gris">
                                   <span class="c-carbon">跳舞的车子</span>
								</span>
							</span>
							<span class="lines">
								<span class="c-gris">被举报：
                                   <span class="c-carbon">26</span>
								</span>
							</span>
						</p>
					</li>
					<li class="posting-con more-line">
					    <p>
					    	<span class="lines c-gris">理由：<span class="c-carbon">10</span></span>
					    	<span class="lines c-gris">说明：<span class="c-carbon">的雷锋精神多了受到警方立即受到分手的借口浪费是反对法士大夫发生的 </span></span>
					    </p>
					</li>
					<li class="posting-action more-line">
						<p>
							<span class="lines">处理情况 |
								<span class="c-rojo pointer" @click="editor"> 待处理</span>
							</span>
							<span class="lines">状态 |
								<span class="c-carbon pointer" @click="setPara"> 正常</span>
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
				<add-products ref="add" v-if="1 === popNum"></add-products>
				<edit-imgs v-if="2 === popNum"></edit-imgs>
				<removed v-if="3 === popNum"></removed>
				<para-set v-if="4 === popNum"></para-set>
			</div>
		</div>
	</div>
</template>

<script>
    import addProducts from '@/components/pop/add-products-pop'
    import editImgs from '@/components/pop/edit-imgs-pop'
    import removed from '@/components/pop/removed-pop'
    import paraSet from '@/components/pop/para-set-pop'
    import {mapGetters, mapMutations} from 'vuex'
	export default {
       data() {
       	 return {
       	 	test: {
       	 		name: "男孩波",
       	 		age: 28,
                id: 168
       	 	},
       	 	single:false,
       	 	title: null
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
       	editor() {
            this.setPopNum(1)
            this.setPopStatus()
            this.$nextTick(() => {
            	this.$refs.add.changeTitle("编辑产品")
            })
       	},
       	openPop() {
           this.setPopNum(2)
           this.setPopStatus()
       	},
       	removing() {
       		this.setPopNum(3)
       		this.setPopStatus()
       	},
       	setPara() {
       		this.setPopNum(4)
       		this.setPopStatus()
       	}
       },
       components: {
       	addProducts,
       	editImgs,
       	removed,
       	paraSet
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



