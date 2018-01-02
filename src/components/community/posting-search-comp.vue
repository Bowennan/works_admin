<template>
	<div class="search-box">
	
			    <Input class="id-search" v-model="searchVal">
			        <Select v-model="defaultSelect" slot="prepend" style="width: 80px">
			            <Option value="title">帖子</Option>
			            <Option value="id">ID</Option>
			        </Select>
			        <Button slot="append" icon="search" @click="subData"></Button>
			    </Input>
		

		<div class="range-search">
			<div class="conditions-box">
				<Select class="conditions-width" v-model="sval">
			        <Option v-for="item in specail" :value="item.value" :key="item.value">{{ item.label }}</Option>
			    </Select>
			</div>

			<div class="conditions-box">
				    <Select class="conditions-width" v-model="tval">
				        <Option v-for="item in types" :value="item.value" :key="item.value" :disabled="item.value<0">{{ item.label }}</Option>
				    </Select>
			</div>

			<div class="conditions-box">
				    <Select class="conditions-width" v-model="mval">
				        <Option v-for="item in model" :value="item.value" :key="item.value">{{ item.label }}</Option>
				    </Select>
			</div>

			<div class="conditions-box">
				 <DatePicker type="daterange" placement="bottom-end" placeholder="用户注册时间区间选择" style="width: 200px"></DatePicker>
			</div>

			<div class="conditions-box">
				<Button type="primary" class="confirm-group">确认筛选</Button>
			</div>
		</div>
	</div>
</template>

<script>
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
       }

	}
</script>