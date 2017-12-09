<template>
	<div>
		<Input class="input-box" v-model="value13" placeholder="搜索结果">
	        <Select v-model="select3" slot="prepend" style="width: 80px">
	        	<Option value="0" style="display:none">帖子</Option>
	            <Option value="day">帖子</Option>
	            <Option value="month">ID</Option>
	        </Select>
	        <Button slot="append" icon="ios-search"></Button>
	    </Input>
	</div>
</template>

<script>
	export default {
       data() {
       	return {
       		value13: '',
       		select3: '0',
       		model1: ''
       	}
       }
	}
</script>

<style scoped>
	.input-box {
		width:225px;
	}
</style>