<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">
               <Checkbox v-model="single">ID</Checkbox>
			</li>
			<li class="posting-author">品类/品牌名</li>
			<li class="posting-info">型号</li>
			<!-- <li class="posting-con">视频信息</li> -->
			<li class="posting-action">操作</li>
		</ul>

		<ul>
			<li>
				<ul class="list-contents">
					<li class="posting-id more-line">
						<p style="position:relative; padding-left:20px;"> 
							<Checkbox style="position:absolute; top:36px; left:0" v-model="single"></Checkbox>
							<span class="lines">13232</span>
						</p>
					</li>
					<li class="posting-author more-line">
						<p>
							<span class="lines c-gris">类别：<span class="c-carbon">智能单车</span></span>
							<span class="lines c-gris">品名：<span class="c-carbon">asdv</span></span>
						</p>
					</li>
					<li class="posting-info more-line">
					    <p>
					    	<span class="lines c-gris"><span class="c-carbon">IPHONE X</span></span>
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
							<span class="lines c-gris" @click="setOrder">排序 | 
								<span class="c-carbon">6</span>
							</span>
							<span class="lines c-gris" @click="setStatus">状态 | 
								<span class="c-carbon">隐藏</span>
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
	        <recommend-homepage v-if="1 === popNum"></recommend-homepage>
	        <hpvm-order v-if="2 === popNum"></hpvm-order>
	        <hidden v-if="3 === popNum"></hidden>
	      </div>
	    </div>
	</div>
</template>

<script>
    import recommendHomepage from '@/components/pop/recommend-homepage-pop'
    import hpvmOrder from '@/components/pop/hpvm-order-pop'
    import hidden from '@/components/pop/hidden-pop'
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
          ...mapMutations([
              'setRouterId',
              'setPopNum',
              'setPopStatus'
          ]),
          getWindowsSize() {
            this.coverWidth = window.document.body.offsetWidth;
            this.coverHeight = window.document.body.offsetHeight;
          },
          setOrder() {
          	this.setPopNum(2)
          	this.setPopStatus()
          },
          setStatus() {
          	this.setPopNum(3)
          	this.setPopStatus()
          }
         },

         components: {
            recommendHomepage,
			hpvmOrder,
			hidden
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
		min-width: 287px;
		flex:1;
	}
/*	.posting-con {
		min-width: 216px;
		flex:1;
	}*/
	.posting-action {
		min-width: 250px;
		flex:1;
	}
	.posting-id{
		min-width:230px;
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

