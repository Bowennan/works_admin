<template>
	<div class="tables">
		<pcdisclose-search-comp></pcdisclose-search-comp>
        <pcdisclose-title-comp></pcdisclose-title-comp>
        <pcdisclose-list-comp class="tables"></pcdisclose-list-comp>
	</div>
</template>

<script>
    import pcdiscloseSearchComp from '@/components/wiki/sub/pcdisclose-search-comp'
	import pcdiscloseTitleComp from '@/components/wiki/sub/pcdisclose-title-comp'
	import pcdiscloseListComp from '@/components/wiki/sub/pcdisclose-list-comp'

	export default {
             components: {
			    pcdiscloseSearchComp,
			    pcdiscloseTitleComp,
			    pcdiscloseListComp
			  }
	}
</script>