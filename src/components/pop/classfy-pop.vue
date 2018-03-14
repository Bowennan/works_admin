<template>
	<div class="pop-container">
		<div class="pop-header">
			<span class="pop-title">社区归类</span>
			<Icon type="close-round" class="pop-close" @click.native="closePop"></Icon>
		</div>

		<div class="pop-sub-container">
			<span class="pop-sub-title">
				<Checkbox
	            :indeterminate="indeterminate"
	            :value="checkAll"
	            @click.prevent.native="handleCheckAll">社区全选</Checkbox>
			</span>

			<CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
		        <Checkbox class="c-carbon" style="padding:4px" v-for="(item, index) in communityCol" :label="item.id" :key="index">{{item.name}}</Checkbox>
		    </CheckboxGroup>
		</div>

	    <div class="pop-bottom-box">
      
         
            <Button class="pop-confirm-btn" type="ghost" @click="closePop">取消</Button>
              <Button class="pop-confirm-btn" type="primary" @click="sendComm">确认发送</Button>
    
	   </div>

	</div>
</template>

<script>
    import {mapMutations, mapGetters, mapActions} from 'vuex'
	export default {
		props: {
			id: {
				type: Number
			}
		},

		data() {
			return {
				indeterminate: true,
				checkAll: false,
				checkAllGroup: []
			}
		},

		computed: {
           ...mapGetters([
               'communityCol'
           	])
		},
		created() {
           this.getAllCommunity()
           console.log(this.communityCol)
		},
		methods: {
			...mapMutations([
                   'setPopStatus'
				]),
			...mapActions([
                   'getAllCommunity',
                   'updateCommunity'
				]),
			handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.communityCol.forEach((item) => {
                    	this.checkAllGroup.push(item.id)
                    })
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                if (data.length == (this.communityCol).length) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
                console.log(this.checkAllGroup)
            },

			closePop() {
				this.setPopStatus()
			},
		//貌似后数据有问题
			sendComm() {
               this.updateCommunity({
               	path: this.$route.params.path,
               	id: this.id,
               	community_ids: this.checkAllGroup
               })
			}
		}
	}
</script>