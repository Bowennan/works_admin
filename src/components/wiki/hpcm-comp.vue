<template>
	<div class="tables">
		<hpcm-search-comp></hpcm-search-comp>
        <hpcm-title-comp></hpcm-title-comp>
        <hpcm-list-comp class="tables"></hpcm-list-comp>
	</div>
</template>

<script>
    import hpcmSearchComp from '@/components/wiki/hpcm-search-comp'
	import hpcmTitleComp from '@/components/wiki/hpcm-title-comp'
	import hpcmListComp from '@/components/wiki/hpcm-list-comp'

	export default {
             components: {
			    hpcmSearchComp,
			    hpcmTitleComp,
			    hpcmListComp
			  }
	}
</script>