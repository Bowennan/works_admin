<template>
	<div class="tables">
		<wktm-search-comp></wktm-search-comp>
        <wktm-title-comp></wktm-title-comp>
        <wktm-list-comp class="tables"></wktm-list-comp>
	</div>
</template>

<script>
    import wktmSearchComp from '@/components/wiki/wktm-search-comp'
	import wktmTitleComp from '@/components/wiki/wktm-title-comp'
	import wktmListComp from '@/components/wiki/wktm-list-comp'

	export default {
             components: {
			    wktmSearchComp,
			    wktmTitleComp,
			    wktmListComp
			  }
	}
</script>