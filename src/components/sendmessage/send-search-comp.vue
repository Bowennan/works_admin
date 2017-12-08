<template>
	<div class="search-box">
		<div class="all">
			<span class="title">发布对象:</span>
			<Checkbox v-model="single" class="content">全部用户</Checkbox>
		</div>

		<div class="range-search">
			
		    <Select class="brand-group" v-model="model1">
		        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
		    </Select>
	
		    <Select class="commity-group" v-model="model1">
		        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
		    </Select>

		    <level-search class="level-group"></level-search>

		    <date-to-date class="date-range"></date-to-date>
		
			<confirm-btn class="confirm-group"></confirm-btn>

			<div class="num">
				<span class="result">
					共<span class="result-num">45</span>人被筛选
				</span>
			</div>
		
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
       		single: '',
       		select3: '0',
       		model1: ''
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
		height:78px;
		border-right:1px solid #dddee1;
		border-bottom:1px solid #dddee1;
		position:relative;
	}
    .all {
    	position:absolute;
    	top:28px;
    	left:28px;
    }
    .title {
    	margin-right: 12px;
    	font-size:12px;
    	color:#bbbec4;
    	font-weight: bold;
    }
    .content {
    	font-size:12px;
    	color:#1c2438;
    	font-weight: bold;
    }
    .num {
    	height:32px;
    	line-height: 32px;
    }
    .result {
    	font-size:12px;
    	color:#bbbec4;
    	font-weight: bold;
    }
    .result-num {
    	color: #2d8cf0;
    }
	.range-search {
		position: absolute;
		right: 38px;
		top:28px;
	}

	.level-group, .commity-group, .brand-group{

		width:115px;
	}

	.level-group, .commity-group, .brand-group, .confirm-group, .date-range, .num {
		float:left;
		margin-left:20px;
	}
</style>