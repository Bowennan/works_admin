<template>
	<div class="search-box">
		<div class="id-name-search">
			<id-search></id-search>
		</div>

		<div class="range-search">
			<div class="lev-search">
				<Select class="level-group" v-model="model1" placeholder="棒客等级(全部)">
			        <Option v-for="item in cityList01" :value="item.value" :key="item.value">{{ item.label }}</Option>
			    </Select>
			</div>

			<div class="lev-search">
				    <Select class="brand-group" v-model="model2">
				        <Option v-for="item in cityList02" :value="item.value" :key="item.value">{{ item.label }}</Option>
				    </Select>
			</div>

			<div class="lev-search">
				    <Select class="commity-group" v-model="model3">
				        <Option v-for="item in cityList03" :value="item.value" :key="item.value">{{ item.label }}</Option>
				    </Select>
			</div>

			<div class="lev-search">
				 <date-to-date></date-to-date>
			</div>

			<div class="lev-search">
				<Button type="primary" @click="checkLevel">确认筛选</Button>
			</div>
		</div>
	</div>
</template>

<script>
   import idSearch from '@/components/base-comp/id-search'
   import dateToDate from '@/components/base-comp/date-to-date'
   import confirmBtn from '@/components/base-comp/confirm-btn'
   import levelSearch from '@/components/base-comp/level-search'
	export default {
       data() {
       	return {
       		value13: '',
       		select3: '0',
       		model2: -1,
       		model3: -1,
       		model1: '',
       		cityList01: [
       		        {
                    	value: '',
                    	label: '棒客等级(全部)'
                    },
                    {
                        value: 0,
                        label: '0级'
                    },
                    {
                        value: 1,
                        label: '1级'
                    },
                    {
                        value: 2,
                        label: '2级'
                    },
                    {
                        value: 3,
                        label: '3级'
                    },
                    {
                        value: 4,
                        label: '4级'
                    },
                    {
                        value: 5,
                        label: '5级'
                    },
                    {
                        value: 6,
                        label: '6级'
                    },
                    {
                        value: 7,
                        label: '7级'
                    },
                    {
                        value: 8,
                        label: '8级'
                    }
                    
                ],
                cityList02: [
       		        {
                    	value: -1,
                    	label: '身份筛选(全部)'
                    },
                    {
                        value: 0,
                        label: '已标记用户'
                    },
                    {
                        value: 1,
                        label: '达人'
                    },
                    {
                        value: 2,
                        label: '体验官'
                    },
                    {
                        value: 3,
                        label: '社区管理员'
                    },
                    {
                        value: 4,
                        label: '品牌官方'
                    },
                    {
                        value: 5,
                        label: '棒客官方'
                    },
                    {
                        value: 6,
                        label: '普通用户'
                    },
                    {
                        value: 7,
                        label: '被禁用户'
                    },
                    {
                        value: 8,
                        label: '待处理用户'
                    }
                    
                ],
                cityList03: [
       		        {
                    	value: -1,
                    	label: '社区筛选(全部)'
                    },
                    {
                        value: 0,
                        label: '按已有社区'
                    },
                    {
                        value: 1,
                        label: '未加入社区用户'
                    },
                    {
                        value: 2,
                        label: '无人机社区'
                    },
                    {
                        value: 3,
                        label: 'VR社区'
                    },
                    {
                        value: 4,
                        label: '手机社区'
                    },
                    {
                        value: 5,
                        label: '智能家具'
                    },
                    {
                        value: 6,
                        label: 'XX社区'
                    },
                    {
                        value: 7,
                        label: 'XX社区'
                    },
                    {
                        value: 8,
                        label: 'XX社区'
                    }
                    
                ]
               
       	}
       },

       methods: {
       	checkLevel() {
       		// console.log(this.model1);
       		this.$emit("findLevel", this.model1);
       	}
       },

       components: {
       	  idSearch,
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

	.level-group, .commity-group, .brand-group {
		width:130px;
	}
    .ivu-select-arrow {
    	color:blue !important;
    }
</style>