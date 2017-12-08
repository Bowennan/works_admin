<template>
	<div class="search-box01">
		<id-search class="id-name-search"></id-search>
		<Select class="time-group" v-model="model2">
	        <Option v-for="item in 8" :value="item" :key="item">{{ item }}</Option>
	    </Select>
	</div>
</template>

<script>
   import idSearch from '@/components/base-comp/id-search'
   import dateToDate from '@/components/base-comp/date-to-date'
	export default {
		data() {
           return {
           	 model2:''
           }
		},
      components: {
      	idSearch,
      	dateToDate
      }
	}
</script>

<style scoped>
		.search-box01 {
			box-sizing:border-box;
			width:100%;
			height:78px;
			border-right:1px solid #dddee1;
			border-bottom:1px solid #dddee1;
			position:relative;
		}
		.id-name-search {
           position:absolute;
           top:20px;
           left:28px;
		}
		.time-group {
		   width:115px;
           position:absolute;
           right:38px;
           top:20px;
		}
</style>