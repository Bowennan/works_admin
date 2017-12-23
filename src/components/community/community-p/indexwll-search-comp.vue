<template>
	<div class="search-box">
		    <Input class="id-search" v-model="result">
		        <Select v-model="result_doing" slot="prepend" style="width: 60px">
		            <Option value="id">ID</Option>
		        </Select>
		        <Button slot="append" icon="ios-search"></Button>
		    </Input>

		<div class="range-search">

			<div class="lev-search">
				    <Select class="brand-group" v-model="model1">
				        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
				    </Select>
			</div>

			<div class="lev-search">
				    <Select class="commity-group" v-model="model1">
				        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
				    </Select>
			</div>

			<div class="lev-search">
				<DatePicker type="daterange" placement="bottom-end" placeholder="Select date" ></DatePicker>
			</div>

			<div class="lev-search">
				<Button type="primary">确认筛选</Button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
       data() {
       	return {
       		value13: '',
       		select3: '0',
       		model1: '',
       		result: '无',
       		result_doing:'id'
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