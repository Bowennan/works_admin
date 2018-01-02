<template>
	<div class="search-box">
		<!-- <Input class="id-search" v-model="result">
	        <Select v-model="result_doing" slot="prepend" style="width: 60px">
	            <Option value="id">ID</Option>
	        </Select>
	        <Button slot="append" icon="search"></Button>
	    </Input> -->

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
				result_doing:"id"
			}
		}
	}
</script>