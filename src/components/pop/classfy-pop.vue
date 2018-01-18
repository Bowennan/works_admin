<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">帖子归类社区</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">文章社区选择（可全选）</span>

			<CheckboxGroup v-model="communityNameChoose">
		        <Checkbox class="c-carbon" style="padding:4px" v-for="(item, index) in communityName" :label="item.id" :key="index">{{item.name}}</Checkbox>
		    </CheckboxGroup>
		</div>

	    <div class="pop-bottom-box">
      
         
            <Button class="pop-confirm-btn" type="ghost" @click="closePop">取消</Button>
              <Button class="pop-confirm-btn" type="primary" @click="sendComm">确认发送</Button>
    
	   </div>

	</div>
</template>

<script>
    import {getCommunityNameId, updateArticleComm} from "@/axios/api"
    import {mapMutations, mapGetters} from 'vuex'
	export default {
		data() {
			return {
				infos:'',
				communityName:[],
				communityNameChoose:[]
				
			}
		},
		computed: {
           ...mapGetters([
               'communities',
               'articleId'
           	])
		},
		created() {
           getCommunityNameId().then(res => {
           	this.communityName = res.data.data
           })
		},
		methods: {
			...mapMutations([
                   'setPopStatus'
				]),
			closePop() {
				this.setPopStatus()
                this.communityNameChoose.length =0
			},
			addComm() {
				console.log("lolo")
				this.communityNameChoose.length = 0
				this.communityName.map((item , index)=> {
					if(item.id === (this.communities)[index][id]) {
                    this.communityNameChoose.push(item.id)
				 }
				})
				console.log("lololo")
			},
			sendComm() {
               this.setPopStatus()
               updateArticleComm({
                 community_ids: this.communityNameChoose,
                 id: this.articleId
               }).then(res => {
               	this.communityNameChoose.length =0
               })
			}
		}
	}
</script>