<template>
	<div class="tables">
		<pim-search-comp></pim-search-comp>
        <pim-title-comp></pim-title-comp>
        <pim-list-comp class="tables"></pim-list-comp>
	</div>
</template>

<script>
    import pimSearchComp from '@/components/wiki/pim-search-comp'
	import pimTitleComp from '@/components/wiki/pim-title-comp'
	import pimListComp from '@/components/wiki/pim-list-comp'

	export default {
             components: {
			    pimSearchComp,
			    pimTitleComp,
			    pimListComp
			  }
	}
</script>