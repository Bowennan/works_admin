<template>
	<div class="list-container">
		<h4 class="list-title">棒客官方列表</h4>
		<ul class="list-header">
			<li class="check-id more-line col">
				<p>
					<span>添加对象</span>
					<span>(ID/昵称)</span>
				</p>
			</li>
			<li class="name-post more-line col">
				<p>
					<span>真实姓名</span>
					<span>职位</span>
				</p>
			</li>
			<li class="actor">操作者</li>
			<li class="action">操作</li>
		</ul>

		<ul>
			<li>
				<ul class="list-contents">
					<li class="check-id more-line">
						<p>
						   <span>1025</span>
						   <span>开灯的山洞</span>
						</p>
					</li>
					<li class="name-post  more-line">
						<p>
						   <span>大狸子</span>
						   <span>项目经理</span>
						</p>
					</li>
					<li class="actor">
					    <p>XXx</p>
					</li>
					<li class="action">
						<p>
							<span class="pointer" @click="cancelBest">
								取消官方身份
							</span>
						</p>
					</li>
				</ul>
			</li>
		</ul>

		<div v-show="cover" :style="{width:coverWidth+'px', height:coverHeight+'px'}" class="cover-style">
			<div class="pop-wrapper">
				<cancel-identity v-if="cancelStatus01" @close="cancelBest"></cancel-identity>
			</div>
		</div>
	</div>
</template>

<script>
   import cancelIdentity from '@/components/pop/cancel-identity-pop'
	export default {
       data() {
       	  return {
       	  	state: 0,
       	  	cancelStatus01:false,
       	  	coverWidth:0,
    		coverHeight:0,
    		cover:false
       	  }
       },
        created() {
       	this.getWindowsSize();
       },
       methods: {
       	getWindowsSize() {
	       		this.coverWidth = window.document.body.offsetWidth;
	       		this.coverHeight = window.document.body.offsetHeight;
	       	},
       	cancelBest() {
       		this.cover = !this.cover;
       		this.cancelStatus01 = !this.cancelStatus01;
       	}
       },
       components: {
       	cancelIdentity
       }
   }
</script>

<style scoped>
	.col {
		line-height: 18px;
	}
	.check-id {
		flex:0 0 168px;
	}
	.name-post {
		flex:0 0 168px;
	}
	.actor {
		min-width: 163px;
		flex:1;
	}
	.action {
		flex:0 0 513px;
	}
	.more-line p > span {
		display: block;
	}
</style>

