<template>
	<div class="list-container">
		<ul class="list-header">
			<li class="posting-id">
               <Checkbox v-model="single">视频ID</Checkbox>
			</li>
			<li class="posting-author">品类/品牌名</li>
			<li class="posting-con">型号</li>
			<li class="posting-action">视频操作</li>
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
							<span class="lines c-gris">品牌：<span class="c-carbon">小米</span></span>
						</p>
					</li>
					<li class="posting-con more-line">
					    <p>
					    	<span class="c-carbon">IPHONE X</span>
					    </p>
					</li>
					<li class="posting-action">
						<p class="h-block01">
							<span class="items c-gris">视频图 | 
								<span class="c-carbon" @click="uploadImg">查看</span>
							</span>
							<span class="items c-gris">PC &nbsp端 | 
								<span class="c-carbon" @click="uploadPcVideo">上传</span>
							</span>
							<span class="items c-gris">移动端 | 
								<span class="c-carbon" @click="uploadMbVideo">查看</span>
							</span>
						</p>
						<p class="h-block02">
							<span class="items c-gris">首推 | 
								<span class="c-carbon">是/否</span>
							</span>
							<span class="items">
								<span class="c-carbon" @click="removed">删除</span>
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
	        <add-new-video v-if="1 === popNum"></add-new-video>
	        <upload-video-img v-if="2 === popNum"></upload-video-img>
	        <upload-pc-video v-if="3 === popNum"></upload-pc-video>
	        <upload-mb-video v-if="4 === popNum"></upload-mb-video>
	        <remove-video v-if="5 === popNum"></remove-video>
	      </div>
	    </div>
	</div>
</template>

<script>
    import addNewVideo from "@/components/pop/add-new-video-pop"
    import uploadVideoImg from "@/components/pop/upload-video-img-pop"
    import uploadPcVideo from "@/components/pop/upload-pc-video-pop"
    import uploadMbVideo from "@/components/pop/upload-mb-video-pop"
    import removeVideo from "@/components/pop/remove-video-pop"
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
          uploadImg() {
          	this.setPopNum(2)
          	this.setPopStatus()
          },
          uploadPcVideo() {
          	this.setPopNum(3)
          	this.setPopStatus()
          },
          uploadMbVideo() {
          	this.setPopNum(4)
          	this.setPopStatus()
          },
          removed() {
          	this.setPopNum(5)
          	this.setPopStatus()
          }
         },

         components: {
            addNewVideo,
			uploadVideoImg,
			uploadPcVideo,
			uploadMbVideo,
			removeVideo
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
		min-width:290px;
		flex:1;
	}
	.posting-con {
		min-width: 282px;
		flex:1;
	}
	.posting-action {
		min-width: 240px;
		flex:1;
		display: flex;
	}
	.posting-action p, .posting-info p {
       padding-top:16px;
	}
    .h-block01 {
		flex:0 0 120px;
	}
    .h-block02 {
		flex:0 0 100px;
	}
	.items {
		display: block;
		padding:2px 0;
	}
	.posting-id{
		min-width:200px;
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

