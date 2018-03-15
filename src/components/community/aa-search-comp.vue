<template>
	<div class="search-box">
		<Input class="id-search" v-model="searchVal" @on-enter="search">
	        <Select v-model="abnormal_reply_id" slot="prepend" style="width: 80px">
	            <Option value="id">回复ID</Option>
	        </Select>
	        <Button slot="append" icon="search" @click="search"></Button>
	    </Input>

	    <span v-show="status" class="c-naranja" style='position: absolute; bottom: 5px; left: 106px;'>输入正确回复ID号</span>
	 </div>
</template>

<script>

    import {mapMutations,  mapActions, mapGetters} from "vuex"
	export default {
		data() {
			return {
				searchVal: '',
				abnormal_reply_id: 'id',
				status: false
			}
		},

		computed: {
			...mapGetters('replysData', [
                   'summary_catalog'
				])
		},

        methods: {
        	...mapActions('replysData', [
                   'abnormalCommunityReply'
        		]),
			search() {
			              if(this.abnormal_reply_id == "id" && /^[0-9]*$/.test(this.searchVal) && this.searchVal !== '' ){
			              this.status = false
			              this.abnormalCommunityReply({
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