<template>
	<div class="search-box">
            <Input class="id-search" v-model="result">
		        <Select v-model="resultz_doing" slot="prepend" style="width: 60px">
		            <Option value="id">ID</Option>
		        </Select>
		        <Button slot="append" icon="ios-search"></Button>
		    </Input>

		<div class="range-search">
			  <Select v-model="model1" style="width:200px">
			        <Option v-for="item in 8" :value="item" :key="item">{{ item }}</Option>
			   </Select>

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
       		result: '无',
       		resultz_doing: 'id',
       		model1: ''
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