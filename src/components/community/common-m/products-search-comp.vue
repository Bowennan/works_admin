<template>
	<div class="search-box">

		    <Input class="id-search" v-model="searchVal" @on-enter='search'>
		        <Select v-model="hotproducts_id" slot="prepend" style="width: 100px">
		            <Option value="id">产品榜ID</Option>
		        </Select>
		        <Button slot="append" icon="ios-search" @click="search"></Button>
		    </Input>

		     <span v-show="status" class="c-naranja" style='position: absolute; bottom: 5px; left: 106px;'>输入正确的产品榜ID号</span>

		<div class="range-search">
			    <Select v-model="sel" style="width:200px" @on-change="filterCommunity">
				    <Option v-for="item in hotList" :value="item.id" :key="item.id" :disabled="item.id<0">{{ item.name }}</Option>
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

       computed: {
          ...mapGetters('hotproductsData', [
               'communityList',
               'community_id'
            ]),
           
           hotList() {
            let catalogArr = this.filterArr(this.communityList, 'relation_type', 'catalog')
            let brandArr = this.filterArr(this.communityList, 'relation_type', 'brand')
            let productArr = this.filterArr(this.communityList, 'relation_type', 'product')
            catalogArr.unshift({
              id: -1,
              name: "--品类社区--"
            })
            brandArr.unshift({
              id: -1,
              name: "--品牌社区--"
            })
            productArr.unshift({
              id: -1,
              name: "--产品社区--"
            })

            return [].concat(catalogArr, brandArr, productArr)
          }

       },

       created() {
        this.getCommunityListData()
       },

       methods: {
       	filterArr(arr, key, value) {
          return arr.filter((item) => {
              return item[key] == value
          })
        },
        ...mapMutations('hotproductsData', [
              'setCommunityId'
          ]),
       	...mapActions('hotproductsData', [
               'getHotProduct',
               'getCommunityListData'
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

			 filterCommunity(val) {
	            this.setCommunityId(val)
	            this.getHotProduct({
	              community_id: this.community_id
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
       width: 230px;
	}

	.range-search {
		position: absolute;
		right: 20px;
		top:18px;
	}
</style>