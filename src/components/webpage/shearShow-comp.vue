<template>
	<div class="tables">
		<shear-search-comp></shear-search-comp>
        <shear-title-comp></shear-title-comp>
        <shear-list-comp></shear-list-comp>
	</div>
</template>

<script>
    import shearSearchComp from '@/components/webpage/shearShow-search-comp'
	import shearTitleComp from '@/components/webpage/shearShow-title-comp'
	import shearListComp from '@/components/webpage/shearShow-list-comp'

	export default {
             components: {
			    shearSearchComp,
			    shearTitleComp,
			    shearListComp
			  }
	}
</script>