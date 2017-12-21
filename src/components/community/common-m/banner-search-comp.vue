<template>
	<div class="search-box">
		    <Input class="id-search" v-model="result">
		        <Select v-model="result_doing" slot="prepend" style="width: 60px">
		            <Option value="id">ID</Option>
		            <Option value="nickname">昵称</Option>
		        </Select>
		        <Button slot="append" icon="ios-search"></Button>
		    </Input>

		<div class="range-search">
			 <Select v-model="sel" style="width:150px">
		        <Option v-for="item in bannerList" :value="item.value" :key="item.value" :disabled="item.value<0">{{ item.label }}</Option>
		    </Select>
		</div>
	</div>
</template>

<script>
   import dateToDate from '@/components/base-comp/date-to-date'
   import confirmBtn from '@/components/base-comp/confirm-btn'
   import levelSearch from '@/components/base-comp/level-search'
	export default {
       data() {
       	return {
       		result_doing: 'id',
       		result: '无',
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