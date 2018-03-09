<template>
	<div class="search-box">

		    <Input class="id-search" v-model="searchVal">
		        <Select v-model="hotproducts_id" slot="prepend" style="width: 100px">
		            <Option value="id">产品榜ID</Option>
		        </Select>
		        <Button slot="append" icon="ios-search" @click="search"></Button>
		    </Input>

		     <span v-show="status" class="c-naranja" style='position: absolute; bottom: 5px; left: 106px;'>输入正确的产品榜ID号</span>

		<div class="range-search">
			    <Select v-model="sel" style="width:200px">
				    <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
				</Select>
		</div>
	</div>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
	export default {
       data() {
       	return {
       		searchVal:'',
       		hotproducts_id: 'id',
       		status:false,
       		sel:''
       	}
       },

       methods: {
       	...mapActions('hotproductsData', [
               'getHotProduct'
       		]),

       	search() {
				if(this.hotproducts_id == "id" && /^[0-9]*$/.test(this.searchVal) && this.searchVal !== '') {
					this.status = false
					this.getHotProduct({
						id: this.searchVal
					})
				}else {
					this.status = true
					setTimeout(() => {
						this.status = false
					}, 1500)
				}

				this.searchVal = ''
			},


       }

	}
</script>

<style scoped>
	.search-box {
		box-sizing:border-box;
		width:100%;
		min-width:1250px;
		height:78px;
		border-right:1px solid #dddee1;
		border-bottom:1px solid #dddee1;
		position:relative;
	}
	.id-search {
       position: absolute;
       top:20px;
       left:28px;
       width: 230px;
	}

	.range-search {
		position: absolute;
		right: 20px;
		top:18px;
	}
</style>