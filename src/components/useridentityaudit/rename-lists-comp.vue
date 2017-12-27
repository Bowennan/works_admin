<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="check-id">审核ID</li>
			<li class="id-nickname">ID/昵称</li>
			<li class="identity-info">身份信息</li>
			<li class="identity-pic">身份证照片</li>
			<li class="apply-info">申请信息</li>
			<li class="action-status">操作</li>
		</ul>

		<ul v-for="item in 10">
			<li>
				<ul class="list-contents">
					<li class="check-id">
						<p>
							<span>1025</span>
						</p>
					</li>
					<li class="id-nickname more-line">
						<p>
						   <span>1025</span>
						   <span>开灯的山洞</span>
						</p>
					</li>
					<li class="identity-info more-line">
						<p>
							<span class="c-gris">真是姓名：<span class="c-carbon">张三</span></span>
							<span class="c-gris">身份证号：<span class="c-carbon">130205456899657820</span></span>
							<span class="c-gris">联系电话：<span class="c-carbon">1526654955544</span></span>
						</p>
					</li>
					<li class="identity-pic">
					    <p @click="showPic">
					    	<span class="values pointer">身份照片</span>
					    </p>
					</li>
					<li class="apply-info more-line">
						<p>
							<span class="c-gris">申请状态：<span class="c-carbon">待审核</span></span>
							<span class="c-gris">申请时间：<span class="c-carbon">201665</span></span>
						</p>
					</li>
					<li class="action-status more-line">
						<p>
							<span class="pointer" @click="showCheck">审核</span>

							    <Poptip trigger="hover" placement="bottom-end" width="300">
								    <span class="font-hidden">说明：<span>
										的jfk简实名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了
									</span></span>
								    <div  style="white-space: normal;" slot="content">
								        <span>
								        	的jfk简实名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核f名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了名审核fk了
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
				<look-pic v-if="showPicStatus" @close="showPic"></look-pic>
			    <check-or-not v-if="showCheckStatus" @close="showCheck" ></check-or-not>
			</div>
		</div>
		
	</div>
</template>

<script>
    import lookPic from '@/components/pop/lookPic'
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
       	showPic() {
       		this.cover = !this.cover
       		this.showPicStatus = !this.showPicStatus
       	},
       	showCheck() {
       		this.cover = !this.cover
       		this.showCheckStatus = !this.showCheckStatus
       	}
       },
       components: {
       	lookPic,
       	checkOrNot
       }
   }
</script>

<style scoped>
	.apply-info {
		flex:0 0 180px;
	}
	.check-id {
		flex:0 0 124px;
	}
	.id-nickname {
		flex:0 0 118px;
	}
	.identity-info {
		flex:0 0 246px;
	}
	.identity-pic {
		flex:0 0 132px;
	}
	.action-status {
		min-width:218px;
		flex:1;
	}
	.more-line p > span {
		display: block;
	}
</style>

