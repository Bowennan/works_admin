<template>
	<div class="search-box">
		

		
			
		    <Select class="brand-group" v-model="model1">
		        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
		    </Select>
		
			<confirm-btn class="confirm-group"></confirm-btn>
		
	
	</div>
</template>

<script>
   import confirmBtn from '@/components/base-comp/confirm-btn'
	export default {
       data() {
       	return {
       		single: '',
       		select3: '0',
       		model1: ''
       	}
       },

       components: {
       	  confirmBtn
       }

	}
</script>

<style scoped>
	.search-box {
		box-sizing:border-box;
		width:100%;
		height:78px;
		border-right:1px solid #dddee1;
		border-bottom:1px solid #dddee1;
		position:relative;
	}

    .brand-group{

		width:180px;
	}

	.brand-group, .confirm-group{
		float:left;
		margin-left:20px;
		margin-top:22px;
	}
</style>