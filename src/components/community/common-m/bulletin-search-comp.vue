<template>
	<div class="search-box">
            <Input class="id-search" v-model="searchVal" @on-enter="search">
		        <Select v-model="bulletin_id" slot="prepend" style="width: 80px">
		            <Option value="id">公告ID</Option>
		        </Select>
		        <Button slot="append" icon="ios-search" @click="search"></Button>
		    </Input>

		    <span v-show="status" class="c-naranja" style='position: absolute; bottom: 5px; left: 106px;'>输入正确的公告ID号</span>

		<div class="range-search">
			  <Select v-model="sel" style="width:200px" @on-change="filterTypes">
			        <Option v-for="item in types" :value="item.value" :key="item.value">{{ item.label }}</Option>
			   </Select>

		</div>
	</div>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
	export default {
       data() {
       	return {
       		searchVal:"",
			bulletin_id:"id",
			status: false,
       		types: [
               {
               	value:'coupons',
               	label: '好价'
               },
               {
               	value: 'idle',
               	label: '二手'
               }
       		],
       		sel:''
       	}
       },

       methods: {
       	...mapActions('bulletinsData', [
              'getBulletinListData'
       		]),
       	...mapMutations('bulletinsData', [
              'setType'
       		]),

       	search() {
				if(this.bulletin_id == "id" && /^[0-9]*$/.test(this.searchVal) && this.searchVal !== '') {
					this.status = false
					this.getBulletinListData({
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

			filterTypes(val) {
               this.setType(val)
               this.getBulletinListData({
               	 type: this.sel
               })
			}
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
       width:230px;
	}

	.range-search {
		position: absolute;
		right: 20px;
		top:18px;
	}
</style>