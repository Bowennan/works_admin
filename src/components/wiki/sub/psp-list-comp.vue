<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">ID/标题/日期</li>
			<li class="posting-author">帖子信息</li>
			<!-- <li class="posting-info">型号</li>
			<li class="posting-con">视频信息</li> -->
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
					<li class="posting-author more-line">
						<p>
							<span class="lines c-gris">来源：<span class="c-carbon">站内</span></span>
							<span class="lines c-gris">网站：<span class="c-carbon">无</span></span>
							<span class="lines c-gris">类别：<span class="c-carbon">攻略 | 图文</span></span>
						</p>
					</li>
					<!-- <li class="posting-info more-line">
					    <p>
					    	<span class="lines c-gris"><span class="c-carbon">IPHONE X</span></span>
					    </p>
					</li> -->
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
							<span class="lines c-gris">排序 | 
								<span class="c-carbon pointer" @click="setOrder">6</span>
							</span>
							<span class="lines c-carbon pointer" @click="remove">删除
							</span>
						</p>
					</li>
				</ul>
			</li>
		</ul>

		<div class="cover-style"
		     v-show="popStatus"
		     :style="{width:coverWidth + 'px', height:coverHeight + 'px'}"
		>
			<div class="pop-wrapper">
				<psp-order v-if="1 === popNum"></psp-order>
				<psp-remove v-if="2 === popNum"></psp-remove>
				<psp-add v-if="3 === popNum"></psp-add>
			</div>
		</div>
	</div>
</template>

<script>
    import pspOrder from "@/components/pop/psp-order-pop"
    import pspRemove from "@/components/pop/psp-remove-pop"
    import pspAdd from "@/components/pop/psp-add-pop"
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
              'setPopNum',
              'setPopStatus'
          ]),
          setOrder() {
            this.setPopNum(1)
            this.setPopStatus()
          },
          remove() {
            this.setPopNum(2)
            this.setPopStatus()
          }
         },

         components: {
            pspOrder,
			pspRemove,
			pspAdd
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

