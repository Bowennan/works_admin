<template>
	<div class="tables">
		<pcc-search-comp></pcc-search-comp>
        <pcc-title-comp></pcc-title-comp>
        <pcc-list-comp class="tables"></pcc-list-comp>
	</div>
</template>

<script>
    import pccSearchComp from '@/components/wiki/pcc-search-comp'
	import pccTitleComp from '@/components/wiki/pcc-title-comp'
	import pccListComp from '@/components/wiki/pcc-list-comp'

	export default {
             components: {
			    pccSearchComp,
			    pccTitleComp,
			    pccListComp
			  }
	}
</script>