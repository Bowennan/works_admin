<template>
	<div class="search-box">
		<!-- <Input class="id-search" v-model="result">
	        <Select v-model="result_doing" slot="prepend" style="width: 60px">
	            <Option value="id">ID</Option>
	        </Select>
	        <Button slot="append" icon="search"></Button>
	    </Input> -->
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