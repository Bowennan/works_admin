<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="check-id">审核ID</li>
			<li class="id-nickname">ID/昵称</li>
			<li class="media-info">自媒体信息</li>
			<li class="apply-info">申请信息</li>
			<li class="action-status">操作</li>
		</ul>

		<ul v-for="item in 10">
			<li>
				<ul class="list-contents">
					<li class="check-id">
						<p>
							<span class="c-carbon">1025</span>
						</p>
					</li>
					<li class="id-nickname more-line">
						<p>
						   <span class="c-carbon">1025</span>
						   <span class="c-carbon">开灯的山洞</span>
						</p>
					</li>
					<li class="media-info more-line">
						<p>
							<span class="c-gris">平台信息： <span class="c-carbon">
								微信公众号
							</span></span>
							<span class="c-gris">链接/信息：<span class="c-carbon">
								公众号123
							</span></span>
						</p>
					</li>
					<li class="apply-info more-line">
						<p>
							<span class="c-gris">申请状态：<span class="c-carbon">
								待审核
							</span></span>
							<span class="c-gris">申请时间：<span class="c-carbon">
								201665
							</span></span>
						</p>
					</li>
					<li class="action-status more-line">
						<p>
							<span class="c-carbon pointer" @click="showCheck">审核</span>
							
							    <Poptip trigger="hover" placement="bottom-end" width="420">
							        <span class='font-hidden c-gris'>说明：<span class="c-carbon">
										的jfk简单了领导jfk了简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导
									</span></span>
							        <div style="white-space:normal" slot="content">
							           <span>
							           	的jfk简单了领导jfk了简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导的jfk简单了领导jfk了简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导简单了领导
							           </span>
							        </div>
							    </Poptip>
						</p>
					</li>
				</ul>
			</li>
		</ul>

		<div v-show="cover" :style="{width:coverWidth+'px', height:coverHeight+'px'}" class="cover-style">
			<div class="pop-wrapper">
				<check-or-not @close="showCheck" v-if="showCheckStatus"></check-or-not>
			</div>
		</div>
	</div>
</template>

<script>
    import checkOrNot from '@/components/pop/passing-pop'
	export default {
       data() {
       	  return {
       	  	state: 0,
       	  	bg:false,
       	  	showPicStatus:false,
       	  	showCheckStatus:false,
       	  	coverWidth:0,
       	  	coverHeight:0,
       	  	cover:false
       	  }
       },
       created() {
       	this.getWindowsSize()
       },
       methods: {
       	getWindowsSize() {
	       		this.coverWidth = window.document.body.offsetWidth;
	       		this.coverHeight = window.document.body.offsetHeight;
	       	},
       	showCheck() {
       		this.cover = !this.cover
       		this.showCheckStatus = !this.showCheckStatus
       	}
       },
       components: {
       	 checkOrNot
       }
   }
</script>

<style scoped>
	.apply-info {
		flex:0 0 270px;
	}
	.check-id {
		flex:0 0 128px;
	}
	.id-nickname {
		flex:0 0 176px;
	}
	.media-info {
		flex:0 0 230px;
	}
	.action-status {
		min-width:215px;
		flex:1;
	}
	.more-line p > span {
		display: block;
	}
</style>

