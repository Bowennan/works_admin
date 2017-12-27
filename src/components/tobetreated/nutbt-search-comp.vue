<template>
	<div class="search-box">
		<Input class="id-search" v-model="result">
	        <Select v-model="result_doing" slot="prepend" style="width: 60px">
	            <Option value="id">ID</Option>
	            <Option value="nickname">昵称</Option>
	        </Select>
	        <Button slot="append" icon="search"></Button>
	    </Input>
	

		 <div class="range-search">
		 	<div class="conditions-box">
		 		<DatePicker type="daterange" placement="bottom-end" placeholder="用户注册时间区间选择" style="width: 200px"></DatePicker>
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