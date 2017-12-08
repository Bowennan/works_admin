<template>
	<div class="search-box01">
		<id-search class="id-name-search"></id-search>
	</div>
</template>

<script>
   import idSearch from '@/components/base-comp/id-search'
	export default {
		data() {
           return {
           	 model2:''
           }
		},
      components: {
      	idSearch
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
		.id-name-search {
           position:absolute;
           top:20px;
           left:28px;
		}
</style>