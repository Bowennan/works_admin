<template>
	<div class="search-box">
		<Input class="id-search" v-model="searchVal" @on-enter="search">
	        <Select v-model="abnomal_posting_id" slot="prepend" style="width: 80px">
	            <Option value="id">帖子ID</Option>
	        </Select>
	        <Button slot="append" icon="search" @click="search"></Button>
	    </Input>

	    <span v-show="status" class="c-naranja" style='position: absolute; bottom: 5px; left: 106px;'>输入正确帖子ID号</span>
	 </div>
</template>

<script>
    import {mapMutations, mapGetters, mapActions} from "vuex"
	export default {
		data() {
			return {
				status:false,
				searchVal: '',
				abnomal_posting_id: 'id'
			}
		},

         methods: {

         	...mapActions('postingsData', [
                     'getPostingAbnormalData'
         		]),



         	search() {
       	 	  if(this.abnomal_posting_id == "id" && /^[0-9]*$/.test(this.searchVal) && this.searchVal !== '' ){
              this.status = false
              this.getPostingAbnormalData({
                 id: this.searchVal
               })
            }else {
              this.status = true
              setTimeout(()=>{
                this.status = false
              },1500)
            }

             this.searchVal=''

             
       	  }


         }
	}
</script>