<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">ID</li>
			<li class="posting-author">tag名字</li>
			<li class="posting-info">帖子关联数量</li>
			<li class="posting-con">产品关联数量</li>
			<li class="posting-action">问答关联数量</li>
			<li class="posting-action">跳转默认聚合页操作</li>
		</ul>

		<ul>
			<li>
				<ul class="list-contents">
					<li class="posting-id more-line">
						<p>
							<span class="lines">13232</span>
						</p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="lines c-gris"><span class="c-carbon">智能单车</span></span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p>
							<span class="lines">
								56
							</span>
						</p>
					</li>
					<li class="posting-con more-line">
					    <p>
					    	<span class="lines">59</span>
					    </p>
					</li>
					<li class="posting-action">
						<p>
							<span class="lines">
								88
							</span>
					    </p>
					</li>
					<li class="posting-action">
						<p>
							<span class="lines">
								89
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
	}
	.posting-con {
		min-width: 190px;
		flex:1;
	}
	.posting-action {
		min-width: 250px;
		flex:1;
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
	.list-contents {
		height: 78px;
	}
	.list-contents  p {
		height: 78px
	}
	.list-contents > li {
		height: 78px !important;
	}
</style>



