<template>
	<div class="search-box01">
		    <Input class='id-search' v-model="result">
		        <Select v-model="result_doing" slot="prepend" style="width: 80px">
		            <Option value="id">ID</Option>
		            <Option value="nickname">昵称</Option>
		        </Select>
		        <Button slot="append" icon="ios-search"></Button>
		    </Input>
		<Select class="all-group" v-model="sel">
	        <Option v-for="item in 8" :value="item" :key="item">{{ item }}</Option>
	    </Select>
	</div>
</template>

<script>
	export default {
		data() {
           return {
           	 result:"无",
           	 result_doing:'id',
           	 sel:''
           }
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
		.id-search {
           position:absolute;
           top:20px;
           left:28px;
           width:230px;
		}
		.all-group {
		   width:180px;
           position:absolute;
           left:300px;
           top:20px;
		}
</style>