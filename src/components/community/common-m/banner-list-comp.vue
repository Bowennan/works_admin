<template>
	<div class="lists">
		<ul class="header">
			<li class="id-title">
                 <Checkbox v-model="single"></Checkbox>
			ID/标题/日期</li>
			<li class="url-img">链接/图片</li>
			<li class="do-or-not">生效/失效</li>
			<li class="location-important">权重/位置</li>
			<li class="action-status">操作</li>
		</ul>

		<ul v-for="(item, index) in datas" :key="index">
			<li>
				<ul class="con-header">
					<li class="id-title more-line">
						<p class="f-col">
						   <Checkbox class="checkbox" v-model="single"></Checkbox>
						   <span class="values">{{item.id}}</span>
						   <span class="values">{{item.title}}</span>
						   <span>{{item.updated_at | sliceStr}}</span>
						</p>
					</li>
					<li class="url-img more-line">
						<p style="color:#2d8cf0; cursor:pointer"><a :href="item.link">链接</a> | <a :href="item.avatar">图片</a></p>
					</li>
					<li class="do-or-not more-line">
					    <p>
					    	<span>生效时间：<span class="values">{{item.began_at}}</span></span>
					    	<span>失效时间：<span class="values">{{item.ended_at}}</span></span>
					    </p>
					</li>
					<li class="location-important more-line">
						<p>
							<span>权重：<span class="values">{{item.weight}}</span></span>
							<span>位置：<span class="values">{{item.type == 0 ? "轮播区域" : item.type == 1 ? "左上" : item.type == 2 ? "左下" : item.type == 3 ? "右上" : "右下"}}</span></span>
						</p>
					</li>
					<li class="action-status more-line">
						<p>
							<span>操作 | <span class="values pointer" @click="setEditor">编辑</span></span>
							<span>状态 | <span class="values pointer" @click="setStatus">隐藏</span></span>
						</p>
					</li>
				</ul>
			</li>
		</ul>

		<transition name="slide-fade">
		<div class="cover-style"
             v-if="popStatus"
             :style="{width:coverWidth + 'px', height:coverHeight + 'px'}"
		>
				<div class="pop-wrapper">
					<banner-status v-if="1 === popNum"></banner-status>
					<new-banner :item="itemObj" v-if="2 === popNum"></new-banner>
				</div>
		</div>
		</transition>
	</div>
</template>

<script>
    import {mapActions, mapGetters, mapMutations} from 'vuex'
    import bannerStatus from '@/components/pop/banner-status-pop'
    import newBanner from '@/components/pop/newbanner-pop'
	export default {
		created() {
		   this.getBannersListData()
		   this.$bus.$on('openCover', this.getWindowsSize)
		},
       data() {
       	  return {
       	  	single:'',
       	  	coverHeight:0,
       	  	coverWidth:0,
       	  	itemObj:null
       	  }
       },
       computed: {
       	...mapGetters('bannerListsData', [
                'datas',
                 'popNum',
                 'popStatus'
       		])
       },
       methods: {
       	...mapActions('bannerListsData', [
                'getBannersListData',
                'setPop'
       		]),
       	getWindowsSize() {
       		this.coverWidth = window.document.body.offsetWidth;
       		this.coverHeight = window.document.body.offsetHeight;
       	},
       	postingData(item) {
          	this.getWindowsSize()
          	this.itemObj = item
          },

          setStatus() {
          	this.postingData()
          	this.setPop(1)
          },

          setEditor(item) {
          	this.postingData(item)
          	this.setPop(2)
          }
       },
       components: {
       	bannerStatus,
       	newBanner
       }
   }
</script>

<style scoped>
	.lists {
		width:96%;
		margin-left:28px;
		margin-top:20px;
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
		color:#80848f;
		font-weight: 400;
	}
	.id-title {
		flex:1;
		min-width:320px;
	}
	.url-img {
		flex:0 0 148px;
	}
	.location-important {
		flex:0 0 148px;
	}
	.do-or-not {
		flex:0 0 305px;
	}
	.action-status {
		flex:0 0 130px;
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
	.con-header li p .values {
		color:#80848f;
	}
	.more-line p > span {
		display: block;
		color:#bbbec4;
		padding:2px 0;
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
	.f-col {
		position: relative;
		padding-left:20px;
	}
	.checkbox {
		    position: absolute;
		    left: 0;
		    top: 36px;
	}
	.show-detaile {
		width:100%;
		min-height: 330px;
		border:1px solid #ccc;
		margin-bottom:10px;
		position: relative;
		box-sizing: border-box;
		padding:10px;
	}
	.de-action {
       position: absolute;
       bottom:0px;
       left:0px;
       width:100%;
       height: 30px;
       line-height: 30px;
       font-size: 12px;
       background: #f8f8f9;
       box-sizing: border-box;
       padding:0 20px;
       color:#bbbec4;
	}
	.drection {
		display: inline-block;
		padding:5px;
		cursor:pointer;
		font-weight: bold;
		margin:0 10px;
		color:#495060;
	}
	.operator {
		position: absolute;
		right:20px;
		top:0;
	}
	.value-font {
		color:#80848f;
	}
	.de-font {
		width:100%;
		margin-bottom:12px;
	}
	.de-img {
		width:100%;
		margin-bottom: 40px;
	}
	.de-img img {
		border:5px solid #ccc;
	}
	.tips {
		margin-right: 20px;
		margin-top:6px;
	}
	.values {
		color:#80848f;
	}
</style>

