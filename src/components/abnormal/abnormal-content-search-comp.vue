<template>
	<div class="search-box">

		 <div class="range-search">
		 	<div class="conditions-box">
		    	<Select class="conditions-width" v-model="model1">
			        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
			    </Select>
		    </div>
		 </div>
	 </div>
</template>

<script>
	export default {
		data() {
			return {
				result:"无",
				result_doing:"id",
				model1:''
			}
		}
	}
</script>