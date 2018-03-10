<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">用户组ID</li>
			<li class="posting-author">用户组名</li>
			<li class="posting-info">操作权限</li>
			<li class="posting-con">组员</li>
			<li class="posting-action">操作</li>
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
							<span class="lines c-gris"><span class="c-carbon">嘻哈组</span></span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p>
							<span class="lines">
								<span class="c-gris">操作：
                                   <span class="c-carbon">增删改查等你等你雷锋精神克里夫</span>
								</span>
							</span>
						</p>
					</li>
					<li class="posting-con more-line">
					    <p>
					    	<span class="lines c-gris">成员：<span class="c-carbon">将在任命、等数据、是十分、 的集合速度加快分解了、发生的地方、的反倒是、 士大夫</span></span>
					    </p>
					</li>
					<li class="posting-action more-line">
						<p>
							<span class="lines">
								<span class="c-gris">状态 | </span>
								<span>正常</span>
							</span>
							<span class="lines">
								<!-- <span class="c-gris">TAG | </span> -->
								<span>编辑用户组</span>
							</span>
							<span class="lines">
								<!-- <span class="c-gris">TAG | </span> -->
								<span>组成员增减</span>
							</span>
							<span class="lines">
								<!-- <span class="c-gris">TAG | </span> -->
								<span>删除用户组</span>
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
</style>



