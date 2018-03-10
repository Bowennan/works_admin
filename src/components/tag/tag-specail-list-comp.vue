<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">ID/专题名/日期</li>
			<li class="posting-author">类型/关键词</li>
			<li class="posting-action">操作</li>
		</ul>

		<ul>
			<li>
				<ul class="list-contents">
					<li class="posting-id more-line">
						<p>
							<span class="lines">13232</span>
							<span class="lines">IPHONE X</span>
							<span class="lines"><span class="c-gris">2017-12-9</span></span>
						</p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="lines c-gris">展示类型：<span class="c-carbon">智能单车</span></span>
							<span class="lines c-gris">关键词：<span class="c-carbon">小米、 打大米、 打打</span></span>
						</p>
					</li>
					
					<li class="posting-action">
						<p class="h-block01">
							<span class="items">
								<span class="c-carbon pointer" @click="editor">编辑专题</span>
							</span>
							<span class="items">
								<span class="c-carbon pointer" @click="setPara">节点管理</span>
							</span>
						</p>
						
						<p class="h-block03">
							<span class="items">
								<span class="c-gris">推首 | </span>
								<span>是</span>
							</span>
							<span class="items">
								<span class="c-gris">状态 | </span>
								<span>正常</span>
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
       padding-top:24px;
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



