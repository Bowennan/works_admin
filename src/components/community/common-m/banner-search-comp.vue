<template>
	<div class="search-box">
		    <Input class="id-search" v-model="searchVal" @keyup.enter="search">
		        <Select v-model="banner_id" slot="prepend" style="width: 90px">
		            <Option value="id">BannerID</Option>
		        </Select>
		        <Button slot="append" icon="ios-search" @click="search"></Button>
		    </Input>

        <span v-show="status" class="c-naranja" style='position: absolute; bottom: 5px; left: 106px;'>输入正确的BannerID</span>

		<div class="range-search">
			 <Select v-model="sel" style="width:150px">
		        <Option v-for="item in bannerList" :value="item.value" :key="item.value" :disabled="item.value<0">{{ item.label }}</Option>
		    </Select>
		</div>
	</div>
</template>

<script>
  import {mapMutations, mapGetters, mapActions} from "vuex"
	export default {
       data() {
       	return {
       		searchVal:"",
          banner_id:"id",
          status:false,
       		sel: 0,
       		bannerList:[
                {
                	label:"Banner社区选择",
                	value:0
                },
                {
                	label:"社区主首页",
                	value:1
                },
                {
                	label:"--品类社区--",
                	value:-1
                },
                {
                	label:"手机社区",
                	value:2
                },
                {
                	label:"VR社区",
                	value:3
                },
                {
                	label:"无人机社区",
                	value:4
                },
                {
                	label:"--品牌社区--",
                	value:-2
                },
                {
                	label:"品牌社区1",
                	value:5
                },
                {
                	label:"品牌社区2",
                	value:6
                }
       		]
       	}
       },

       methods: {
        ...mapActions('bannerListsData', [
              'getSingleBannerData'
          ]),

         search() {
            if(this.banner_id == "id" && /^[0-9]*$/.test(this.searchVal) && this.searchVal !== '') {
              this.status = false
              this.getSingleBannerData(this.searchVal)
            }else {
              this.status = true
              setTimeout(() => {
                this.status = false
              }, 1500)
            }

            this.searchVal = ''
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