<template>
	<div class="list-container">
		<h4 class="list-title">管理员列表</h4>
		<ul class="list-header">
			<li class="check-id more-line first-col">
				<p>
					<span>添加对象</span>
					<span>(ID/昵称)</span>
				</p>
			</li>
			<li class="actor">操作者</li>
			<li class="community-manage">社区管理</li>
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
					<li class="actor">
					    <p>XXx</p>
					</li>
					<li class="community-manage">
						<p>社区1、社区2、社区3...</p>
					</li>
					<li class="action">
						<p>
							<span class="pointer" @click="showEditor">身份编辑</span>
						</p>
					</li>
				</ul>
			</li>
		</ul>

		<div v-show="cover" :style="{width:coverWidth+'px', height:coverHeight+'px'}" class="cover-style">
			<div class="pop-wrapper">
				<identity-editor v-if="showStatus" @close="showEditor"></identity-editor>
			</div>
		</div>	
	</div>
</template>

<script>
   import identityEditor from '@/components/pop/identity-editor-pop'
	export default {
       data() {
       	  return {
       	  	state: 0,
       	  	showStatus:false,
       	  	cover:false,
       	  	coverHeight:0,
       	  	coverWidth:0
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
       	showEditor() {
       		this.cover = !this.cover;
       		this.showStatus = !this.showStatus
       	}
       },
       components: {
       	identityEditor
       }
   }
</script>

<style scoped>
	.first-col {
		line-height: 18px;
	}
	.check-id {
		flex:0 0 173px;
	}
	.actor {
		flex:0 0 152px;
	}
	.action {
		flex:0 0 451px;
	}
	.community-manage {
		min-width:238px;
		flex:1;
	}
	.more-line p > span {
		display: block;
	}
</style>

