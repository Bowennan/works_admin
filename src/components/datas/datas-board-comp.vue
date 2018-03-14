<template>
	<div class="data-router">
		<ul class="item-name">
			<li v-for="item in 9" :key='item'>统计{{item}}</li>
		</ul>
		<ul class="total-num">
			<li v-for="item in 9" :key="'total'+item">{{item*999}}</li>
			<span>↓</span>
		</ul>

	</div>
</template>

<script>
	export default {
		data() {
			return {
			   users: {
			   		itemName:['统计', '用户总量', '新增用户', '体验官', '达人', '社区管理员', '棒客', 'brand', 'master'],
				   	data:[
                           {
                           	
                           }

				   	]
			   }	
			}
		}
	}
</script>