<template>
	<div class="search-box">
		<Input class="id-search" v-model="searchVal" @on-enter="search">
	        <Select v-model="abnormal_piece_id" slot="prepend" style="width: 80px">
	            <Option value="id">作品ID</Option>
	        </Select>
	        <Button slot="append" icon="search" @click="search"></Button>
	    </Input>

	    <span v-show="status" class="c-naranja" style='position: absolute; bottom: 5px; left: 106px;'>输入正确作品ID号</span>
	 </div>
</template>

<script>
    import {mapMutations, mapGetters, mapActions} from "vuex"
	export default {
		data() {
			return {
				searchVal: '',
				abnormal_piece_id: 'id',
				status:false
			}
		},


		 methods: {

         	...mapActions('masterpieceData', [
                     'getAbnormalMasterpiece'
         		]),



         	search() {
       	 	  if(this.abnormal_piece_id == "id" && /^[0-9]*$/.test(this.searchVal) && this.searchVal !== '' ){
              this.status = false
              this.getAbnormalMasterpiece({
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