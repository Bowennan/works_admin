<template>
	<div class="search-box">
		<Input class="id-search" v-model="searchVal" @on-enter="search">
	        <Select v-model="abnormal_comment_id" slot="prepend" style="width: 80px">
	            <Option value="id">评论ID</Option>
	        </Select>
	        <Button slot="append" icon="search" @click="search"></Button>
	    </Input>

	    <span v-show="status" class="c-naranja" style='position: absolute; bottom: 5px; left: 106px;'>输入正确评论ID号</span>
	 </div>
</template>

<script>

    import {mapMutations,  mapActions, mapGetters} from "vuex"
	export default {
		data() {
			return {
				searchVal: '',
				abnormal_comment_id: 'id',
				status: false
			}
		},

		computed: {
			...mapGetters('commentsData', [
                   'summary_catalog'
				])
		},

        methods: {
        	...mapActions('commentsData', [
                   'abnormalCommunityComment'
        		]),
			search() {
			              if(this.abnormal_comment_id == "id" && /^[0-9]*$/.test(this.searchVal) && this.searchVal !== '' ){
			              this.status = false
			              this.abnormalCommunityComment({
			                 id: this.searchVal,
			                 summary_catalog: this.summary_catalog
			               })
			            }else {
			              this.status = true
			              setTimeout(()=>{
			                this.status = false
			              },1500)
			            }

			             this.searchVal=''
			          },
        }
	}
</script>