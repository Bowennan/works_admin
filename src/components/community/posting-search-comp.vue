<template>
	<div class="search-box">
		<div class="id-name-search">
			    <Input v-model="searchVal">
			        <Select v-model="defaultSelect" slot="prepend" style="width: 80px">
			            <Option value="title">帖子</Option>
			            <Option value="id">ID</Option>
			        </Select>
			        <Button slot="append" icon="ios-search" @click="subData"></Button>
			    </Input>
		</div>

		<div class="range-search">
			<div class="lev-search">
				<Select class="specail-select" v-model="sval">
			        <Option v-for="item in specail" :value="item.value" :key="item.value">{{ item.label }}</Option>
			    </Select>
			</div>

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
				 <date-to-date></date-to-date>
			</div>

			<div class="lev-search">
				<confirm-btn></confirm-btn>
			</div>
		</div>
	</div>
</template>

<script>
   import dateToDate from '@/components/base-comp/date-to-date01'
   import confirmBtn from '@/components/base-comp/confirm-btn'
   import levelSearch from '@/components/base-comp/level-search'
	export default {
       data() {
       	return {
       		searchVal: '',
       		defaultSelect: 'title',
       		specail:[
                      {
                      	label:"特殊筛选",
                      	value:0
                      },
                      {
                      	label:"签约用户",
                      	value:'用户信息'
                      }
       		],
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
                      	value:'1'
                      },
                      {
                      	label:"教程帖子",
                      	value:'2'
                      },
                      {
                      	label:"攻略帖子",
                      	value:'3'
                      },
                      {
                      	label:"资讯帖子",
                      	value:'4'
                      },
                      {
                      	label:"体验帖子",
                      	value:'5'
                      },
                      {
                      	label:"--帖子类型--",
                      	value:-2
                      },
                      {
                      	label:"纯图帖子",
                      	value:'6'
                      },
                      {
                      	label:"视频帖子",
                      	value:'7'
                      },
                      {
                      	label:"图文帖子",
                      	value:'8'
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
       		sval:0,
       		tval:0,
       		mval:0
       	}
       },
       methods: {
       	 subData() {
       	 	let paras = {};
       	 	if(this.defaultSelect === 'title'){
       	 		paras.title = this.searchVal;
       	 	}else {
       	 		paras.id = parseInt(this.searchVal);
       	 	}

       	 	this.$emit("searchResult", paras);
       	 }
       },
       components: {
       	  dateToDate,
       	  confirmBtn,
       	  levelSearch
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
	.id-name-search {
       position: absolute;
       top:20px;
       left:28px;
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

	.specail-select, .commity-group, .brand-group {
		width:115px;
	}
    .ivu-select-arrow {
    	color:blue !important;
    }
</style>