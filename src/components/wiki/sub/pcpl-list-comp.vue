<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">ID/标题/日期</li>
			<li class="posting-info">作者信息</li>
			<li class="posting-author">帖子信息</li>
			<!-- <li class="posting-con">视频信息</li> -->
			<li class="posting-action">操作</li>
		</ul>

		<ul>
			<li>
				<ul class="list-contents">
					<li class="posting-id more-line">
						<p>
							<span class="lines">13232</span>
							<span class="lines">亏大发了水立方</span>
							<span class="lines">2018-01-06</span>
						</p>
					</li>
					<li class="posting-info more-line">
					    <p>
					    	<span class="lines c-gris"><span class="c-carbon">IPHONE X</span></span>
					    </p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="lines c-gris">评论：<span class="c-carbon">5</span></span>
							<span class="lines c-gris">类别：<span class="c-carbon">攻略 | 图文</span></span>
						</p>
					</li>
					
					<!-- <li class="posting-con more-line">
						<p>
						
								<span class="lines c-gris">编辑 | 
                                   <span class="c-carbon">查看</span>
								</span>
							
						
								<span class="lines c-gris">参数 | 
                                   <span class="c-carbon">查看</span>
								</span>
							
						
								<span class="lines c-gris">图集 | 
                                   <span class="c-carbon">查看</span>
								</span>
							
						</p>
					</li> -->
					<li class="posting-action more-line">
						<p>
							<span class="lines c-gris">百科精选 | 
								<span class="c-carbon pointer" @click="setBest">是</span>
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
	        <pcpl-to-best></pcpl-to-best>
	      </div>
	    </div>
	</div>
</template>

 <script>
    import pcplToBest from '@/components/pop/pcpl-to-best-pop'
    import {mapGetters, mapMutations} from 'vuex'
	export default {
         computed: {
          ...mapGetters([
               'popStatus'
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
              'setPopStatus'
          ]),
          setBest() {
            this.setPopStatus()
          }
         },

         components: {
            pcplToBest
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
		min-width:260px;
		flex:1;
	}
	.posting-info {
		min-width: 240px;
		flex:1;
	}
/*	.posting-con {
		min-width: 216px;
		flex:1;
	}*/
	.posting-action {
		min-width: 200px;
		flex:1;
	}
	.posting-id{
		min-width:342px;
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

