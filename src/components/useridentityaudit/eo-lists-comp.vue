<template>
	<div class="lists">
		<ul class="header">
			<li class="check-id">审核ID</li>
			<li class="id-nickname">ID/昵称</li>
			<li class="media-info">自媒体信息</li>
			<li class="works">领域和作品</li>
			<li class="apply-info">申请信息</li>
			<li class="action-status">操作</li>
		</ul>

		<ul>
			<li>
				<ul class="con-header">
					<li class="check-id">
						<p><span class="values">
							1025
						</span></p>
					</li>
					<li class="id-nickname more-line">
						<p>
						   <span class="values">1025</span>
						   <span class="values">开灯的山洞</span>
						</p>
					</li>
					<li class="media-info more-line">
						<p>
                          
                          <Poptip trigger="hover" placement="bottom" width="300">
						       <span>平台个数：<span class="values pointer">
									6
								</span></span>
						        <div style="white-space:normal" slot="content">
						           <span>
						           	暂无信息
						           </span>
						        </div>
						    </Poptip>
					    </p>
					</li>
					<li class="works more-line">
					    <p>
					    	<span>领域：<span class="values">
					    		影视，娱乐，体育
					    	</span></span>
					    	<span>作品：<span class="values">
					    		作品1，作品2
					    	</span></span>
					    </p>
					</li>
					<li class="apply-info more-line">
						<p>
							<span>申请状态：<span class="values">
								待审核
							</span></span>
							<span>申请时间：<span class="values">
								201665
							</span></span>
						</p>
					</li>
					<li class="action-status more-line">
						<p>
							<span class="values pointer"  @click="showCheck">审核</span>
							<Poptip trigger="hover" placement="bottom-end" width="420">
						        <span class='con'>说明：<span class="values">
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

		<div :class="bg? 'container' : ''">
			
		</div>
		
		<check-or-not @close="showCheck" v-show="showCheckStatus"></check-or-not>
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
       	  	showCheckStatus:false
       	  }
       },
       methods: {
       	showCheck() {
       		this.bg = !this.bg
       		this.showCheckStatus = !this.showCheckStatus
       	}
       },
       components: {
       	 checkOrNot
       }
   }
</script>

<style scoped>
	.lists {
		position: relative;
		width:96%;
		height: 100%;
		margin-left:28px;
		margin-top:20px;
	}
	.container {
		position: absolute;
		top:-216px;
		bottom:0;
		left:-28px;
		right:-32px;
		background: #e9eaec9c;
	}
	.header {
		box-sizing: border-box;
		width:100%;
		height: 42px;
		line-height: 42px;
		border-top:1px solid #ccc;
		border-bottom:1px solid #ccc;
		display:flex;
		color:#1c2438;
		font-weight: bold;
	}
	.con-header {
		box-sizing: border-box;
		width:100%;
		height: 96px;
		display: flex;
		border-bottom:1px solid #ccc;
		color:#bbbec4;
		font-weight: 400;
	}
	.apply-info {
		flex:0 0 178px;
	}
	.check-id {
		flex:0 0 128px;
	}
	.id-nickname {
		flex:0 0 118px;
	}
	.media-info {
		flex:0 0 135px;
	}
	.works {
		flex:0 0 254px;
	}
	.action-status {
		min-width:210px;
		flex:1;
	}
	.header li, .con-header li {
        box-sizing: border-box;
        padding:0 18px;
	}
	.con-header li p {
		height: 95px;
		display: table-cell;
		vertical-align: middle;
	}
	.more-line p > span {
		display: block;
	}
	.con-box {
		display: block;
        width:100%;
        max-height:54px; 
        overflow: hidden;
        position: relative;
	}
	.points {
		display:block;
		width:36px;
		height: 18px;
        position:absolute;
        bottom:0;
        right:0;
        background: -webkit-linear-gradient(left, transparent, #fff 55%);
		background: -o-linear-gradient(right, transparent, #fff 55%);
		background: -moz-linear-gradient(right, transparent, #fff 55%);
		background: linear-gradient(to right, transparent, #fff 55%);
		font-size:14px;
		font-weight: bold;
		text-align: right;
		padding-left:20px;
	}
	.action-status p span.con {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 3;
		overflow: hidden;
	}
	.values {
		color:#80848f;
	}
	.pointer {
		cursor:pointer;
	}
</style>

