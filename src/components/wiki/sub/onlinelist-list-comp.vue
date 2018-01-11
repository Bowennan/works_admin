<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">ID</li>
			<li class="posting-author">平台/店铺名</li>
			<li class="posting-info">产品信息</li>
			<!-- <li class="posting-con">视频信息</li> -->
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
							<span class="lines c-carbon">京东</span>
							<span class="lines c-carbon">嘻哈包子铺</span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p>
							
							<span class="lines c-gris">商品链接：<span class="c-azul">查看</span></span>
							<span class="lines c-gris">商品编号：<span class="c-carbon">443461321651</span></span>
							<span class="lines c-gris">参考价格：<span class="c-carbon">5462.36元</span></span>
					
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
							<span class="lines c-carbon pointer" @click="editOnline">编辑 </span>
							<span class="lines c-carbon pointer" @click="remove">删除 </span>
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
	      	<add-online v-if="1 === popNum"></add-online>
	        <edit-online v-if="2 === popNum"></edit-online>
	        <remove-online v-if="3 === popNum"></remove-online>
	      </div>
	    </div>
	</div>
</template>

<script>
    import addOnline from '@/components/pop/add-online-pop'
    import editOnline from '@/components/pop/edit-online-pop'
    import removeOnline from '@/components/pop/remove-online-pop'
    import {mapGetters, mapMutations} from 'vuex'
	export default {
         computed: {
          ...mapGetters([
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
              'setPopStatus',
              'setPopNum'
          ]),
          editOnline() {
          	this.setPopNum(2)
            this.setPopStatus()
          },
          remove() {
          	this.setPopNum(3)
          	this.setPopStatus()
          }
         },

         components: {
            addOnline,
			editOnline,
			removeOnline
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
		min-width:200px;
		flex:1;
	}
	.posting-info {
		min-width: 440px;
		flex:1;
	}
/*	.posting-con {
		min-width: 216px;
		flex:1;
	}*/
	.posting-action {
		min-width: 180px;
		flex:1;
	}
	.posting-id{
		min-width:200px;
		flex:1;
	}
	.more-line p .lines {
		display: block;
		padding:2px 0;
	}
	.pop-cons {
		width:100%;
		height: 140px;
        color:#80848f;
	}
	.pop-cons .posting-pop{
		width:100%;
		display: block;
		color:#bbbec4;
		min-height: 24px;
		line-height: 24px;
		white-space: normal;
	}
</style>

