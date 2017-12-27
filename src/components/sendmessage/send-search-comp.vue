<template>
	<div class="search-box">
		<div class="id-search" style="line-height:50px">
			<span class="c-carbon">发布对象:</span>
			<Checkbox v-model="single" class="c-negro">全部用户</Checkbox>
		</div>

		<div class="range-search">
			
		    <div class="conditions-box">
		    	<Select class="conditions-width" v-model="model1">
			        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
			    </Select>
		    </div>
	
		    <div class="conditions-box">
		    	<Select class="conditions-width" v-model="model1">
			        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
			    </Select>
		    </div>

		    <div class="conditions-box">
		    	<Select class="conditions-width" v-model="model1">
			        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
			    </Select>
		    </div>
		       
		  
		    <div class="conditions-box">
		    	<Button type="primary" class="confirm-group">确认筛选</Button>
		    </div>

			<div class="conditions-box" style="line-height:50px">
				<span class="c-gris">
					共<span class="c-naranja">45</span>人被筛选
				</span>
			</div>
		
		</div>
	</div>
</template>

<script>
   
	export default {
       data() {
       	return {
       		single: '',
       		select3: '0',
       		model1: ''
       	}
       }

	}
</script>