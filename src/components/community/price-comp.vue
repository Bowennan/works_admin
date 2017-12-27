<template>
	<div class="tables">
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