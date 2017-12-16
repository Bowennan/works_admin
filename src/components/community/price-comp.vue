<template>
	<div class="um">
		<price-search-comp></price-search-comp>
        <price-title-comp></price-title-comp>
        <price-list-comp class="tables"></price-list-comp>
	</div>
</template>

<script>
    import priceSearchComp from '@/components/community/price-search-comp'
	import priceTitleComp from '@/components/community/price-title-comp'
	import priceListComp from '@/components/community/price-list-comp'

	export default {
             components: {
			    priceSearchComp,
			    priceTitleComp,
			    priceListComp
			  }
	}
</script>

<style scoped>
	  .tables {
	  	height: 100%;
	    width:96%;
	    min-width:1052px;
	    margin:0 10px;
	  }
</style>