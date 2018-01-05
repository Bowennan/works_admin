<template>
	<div class="tables">
		<pcgp-search-comp></pcgp-search-comp>
        <pcgp-title-comp></pcgp-title-comp>
        <pcgp-list-comp class="tables"></pcgp-list-comp>
	</div>
</template>

<script>
    import pcgpSearchComp from '@/components/wiki/sub/pcgp-search-comp'
	import pcgpTitleComp from '@/components/wiki/sub/pcgp-title-comp'
	import pcgpListComp from '@/components/wiki/sub/pcgp-list-comp'

	export default {
             components: {
			    pcgpSearchComp,
			    pcgpTitleComp,
			    pcgpListComp
			  }
	}
</script>