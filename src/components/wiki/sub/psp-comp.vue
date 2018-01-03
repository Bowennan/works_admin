<template>
	<div class="tables">
		<psp-search-comp></psp-search-comp>
        <psp-title-comp></psp-title-comp>
        <psp-list-comp class="tables"></psp-list-comp>
	</div>
</template>

<script>
    import pspSearchComp from '@/components/wiki/sub/psp-search-comp'
	import pspTitleComp from '@/components/wiki/sub/psp-title-comp'
	import pspListComp from '@/components/wiki/sub/psp-list-comp'

	export default {
             components: {
			    pspSearchComp,
			    pspTitleComp,
			    pspListComp
			  }
	}
</script>