<template>
	<div class="level-select">
		 <Select class="search-group" v-model="model1">
	        <Option v-for="item in 5" :value="item" :key="item">level{{ item }}</Option>
	    </Select>
	</div>
</template>

<script>
	export default {
       data() {
       	return {
       		model1:''
       	}
       }
	}
</script>

<style scoped>
	
</style>