<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">品牌ID</li>
			<li class="posting-author">品牌名称</li>
			<li class="posting-info">产品数量</li>
			<li class="posting-con">Logo图</li>
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
							<span class="c-carbon">漫步者</span>
						</p>
					</li>
					<li class="posting-info more-line">
					    <p>
					    	<span class="lines c-gris">关联产品：<span class="c-carbon">48</span></span>
					    </p>
					</li>
					<li class="posting-con more-line">
						<p>
							<span class="lines c-carbon">查看</span>
							
						</p>
					</li>
					<li class="posting-action more-line">
						<p>
							<span class="lines c-gris" @click="orderBrand">排序 | 
								<span class="c-carbon">6</span>
							</span>
							
							<span class="lines c-carbon" @click="editBrand">编辑</span>

							<span class="lines c-carbon" @click="removeBrand">删除</span>
							
						</p>
					</li>
				</ul>
			</li>
		</ul>

		<div class="cover-style"
	         v-show="popStatus"
	         :style="{width:coverWidth + 'px', height: coverHeight + 'px'}"
	                
	    >
	      <div class="pop-wrapper">
	        <add-brand v-if="1 === popNum"></add-brand>
	        <brand-order v-if="2 === popNum"></brand-order>
	        <brand-edit v-if="3 === popNum"></brand-edit>
	        <remove-brand v-if="4 === popNum"></remove-brand>
	      </div>
	    </div>
	</div>
</template>

<script>
    import addBrand from '@/components/pop/add-brand-pop'
    import brandOrder from '@/components/pop/brand-order-pop'
    import brandEdit from '@/components/pop/brand-edit-pop'
    import removeBrand from '@/components/pop/remove-brand-pop'
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
               'setRouterId',
               'setPopNum',
               'setPopStatus'
            ]),
          removeBrand() {
            this.setPopNum(4)
            this.setPopStatus()
          },
          editBrand() {
            this.setPopNum(3)
            this.setPopStatus()
          },
          orderBrand(){
            this.setPopNum(2)
            this.setPopStatus()
          }
         },

         components: {
            addBrand,
			brandOrder,
			brandEdit,
            removeBrand
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
		min-width: 240px;
		flex:1;
	}
	.posting-con {
		min-width: 200px;
		flex:1;
	}
	.posting-action {
		min-width: 164px;
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

