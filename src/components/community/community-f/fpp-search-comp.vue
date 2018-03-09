<template>
	<div class="search-box">
		    <Input class="id-search" v-model="searchVal" @on-enter="search">
		        <Select v-model="fpp_id" slot="prepend" style="width: 80px">
		            <Option value="id">精选ID</Option>
		        </Select>
		        <Button slot="append" icon="ios-search" @click="search"></Button>
		    </Input>

		    <span v-show="status" class="c-naranja" style='position: absolute; bottom: 5px; left: 106px;'>输入正确精选帖子ID号</span>

		<div class="range-search">

			<div class="lev-search">
				    <Select class="brand-group" v-model="tval">
				        <Option v-for="item in types" :value="item.value" :key="item.value" :disabled="item.value<0">{{ item.label }}</Option>
				    </Select>
			</div>

			<div class="lev-search">
				    <Select class="commity-group" v-model="mval">
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
    import {mapMutations, mapGetters, mapActions} from 'vuex'
	export default {
       data() {
       	return {
       		 status:false,
       		searchVal: '',
            fpp_id: 'id',
       		types:[
                      {
                      	label:"帖子种类",
                      	value:0
                      },
                      {
                      	label:"--帖子分类--",
                      	value:-1
                      },
                      {
                      	label:"测评帖子",
                      	value:'evaluate'
                      },
                      {
                      	label:"攻略帖子",
                      	value:'strategy'
                      },
                      {
                      	label:"资讯帖子",
                      	value:'message'
                      },
                      {
                      	label:"体验帖子",
                      	value:'experience'
                      },
                      {
                      	label:"--帖子类型--",
                      	value:-2
                      },
                      {
                      	label:"纯图帖子",
                      	value:'image'
                      },
                      {
                      	label:"视频帖子",
                      	value:'video'
                      },
                      {
                      	label:"图文帖子",
                      	value:'mix'
                      }
       		],
       		model:[
                      {
                      	label:"帖子所属模块",
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
       		tval:0,
       		mval:0
       	}
       },

       methods: {
       	...mapActions('choosePostingData', [
               'getChoosePostingData'
       		]),
       	search() {
       		if(this.fpp_id == "id" && /^[0-9]*$/.test(this.searchVal) && this.searchVal !== '') {
       			this.status = false,
       			this.getChoosePostingData({
       				id: this.searchVal
       			})
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