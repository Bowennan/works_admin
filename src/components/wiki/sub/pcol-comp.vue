<template>
	<div class="tables">
		<pcol-search-comp></pcol-search-comp>
        <pcol-title-comp></pcol-title-comp>
        <pcol-list-comp class="tables"></pcol-list-comp>
	</div>
</template>

<script>
    import pcolSearchComp from '@/components/wiki/sub/pcol-search-comp'
	import pcolTitleComp from '@/components/wiki/sub/pcol-title-comp'
	import pcolListComp from '@/components/wiki/sub/pcol-list-comp'

	export default {
             components: {
			    pcolSearchComp,
			    pcolTitleComp,
			    pcolListComp
			  }
	}
</script>