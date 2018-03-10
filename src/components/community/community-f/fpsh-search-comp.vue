<template>
	<div class="search-box">
		    <Input class="id-search" v-model="searchVal" @on-enter="search">
		        <Select v-model="fpsh_id" slot="prepend" style="width: 80px">
		            <Option value="id">二手ID</Option>
		        </Select>
		        <Button slot="append" icon="ios-search" @click="search"></Button>
		    </Input>

		    <span v-show="status" class="c-naranja" style='position: absolute; bottom: 5px; left: 106px;'>输入正确的二手ID号</span>

		<div class="range-search">

			<div class="lev-search">
				    <Select class="brand-group" v-model="mval">
				        <Option v-for="item in model" :value="item.value" :key="item.value">{{ item.label }}</Option>
				    </Select>
			</div>

			<div class="lev-search">
				<Button type="primary" class="confirm-group">确认筛选</Button>
			</div>
		</div>
	</div>
</template>

<script>
    import {mapGetters, mapMutations, mapActions} from 'vuex'
	export default {
       data() {
       	return {
				searchVal:"",
				fpsh_id:"id",
				status:false,
				mval:0,
				model:[
                      {
                      	label:"二手所属模块",
                      	value:0
                      },
                      {
                      	label:"已有社区",
                      	value:'1'
                      },
                      {
                      	label:"实验室",
                      	value:'2'
                      },
                      {
                      	label:"其他",
                      	value:'3'
                      }
       		  ],
       	}
       },

       methods: {
       	...mapActions('chooseIdleData', [
                'getChooseIdleData',
       		]),

       	search() {
				if(this.fpsh_id == "id" && /^[0-9]*$/.test(this.searchVal) && this.searchVal !== '') {
					this.status = false
					this.getChooseIdleData({
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
       width:230px;
	}

	.range-search {
		position: absolute;
		right: 0;
		top:18px;
	}

	.lev-search {
		float:left;
		margin-right:38px;
	}

	.level-group, .commity-group, .brand-group {
		width:115px;
	}
    .ivu-select-arrow {
    	color:blue !important;
    }
</style>