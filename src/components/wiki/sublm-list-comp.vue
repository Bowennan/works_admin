<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">ID</li>
			<li class="posting-author">店名</li>
			<li class="posting-info">详细地址</li>
			<li class="posting-con">其他信息</li>
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
							<span class="c-carbon">米密码呀</span>
						</p>
					</li>
					<li class="posting-info more-line">
						<p>
							<span class="items">
								<span class="c-gris">地区：
                                   <span class="c-carbon">广东省 深圳市</span>
								</span>
							</span>
							<span class="items">
								<span class="c-gris">详细地址：
                                   <span class="c-carbon"> 广东省深圳市华强北九方购物中心L443（不够长两行）</span>
								</span>
							</span>
						</p>
					</li>
					<li class="posting-con more-line">
					    <p>
					    	<span class="lines c-gris">联系电话：<span class="c-carbon">131324644654</span></span>
					    	<span class="lines c-gris">营业时间：<span class="c-carbon">10:00--24:00</span></span>
					    </p>
					</li>
					<li class="posting-action">
						<p>
							<span class="items">
								<span class="c-carbon" @click="editSubline">编辑</span>
							</span>
							<span class="items">
								<span class="c-carbon" @click="removeSubline">删除</span>
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
	        <add-subline v-if="1 === popNum"></add-subline>
	        <edit-subline v-if="2 === popNum"></edit-subline>
	        <remove-subline v-if="3 === popNum"></remove-subline>
	      </div>
	    </div>
       
	</div>
</template>

<script>
    import addSubline from "@/components/pop/add-subline-pop"
    import editSubline from "@/components/pop/edit-subline-pop"
    import removeSubline from '@/components/pop/remove-subline-pop'
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
          editSubline() {
          	this.setPopNum(2)
          	this.setPopStatus()
          },
          removeSubline() {
          	this.setPopNum(3)
          	this.setPopStatus()
          }
         },

         components: {
            addSubline,
			editSubline,
			removeSubline
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
		min-width: 180px;
		flex:1;
	}
	.posting-info {
		min-width: 422px;
		flex:1;
	}
	.posting-con {
		min-width: 262px;
		flex:1;
	}
	.posting-action {
		min-width: 80px;
		flex:1;
	}
	.items {
		display: block;
		padding:2px 0;
	}
	.posting-id{
		min-width:100px;
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

