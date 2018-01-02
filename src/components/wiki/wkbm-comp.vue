<template>
	<div class="tables">
		<wkbm-search-comp></wkbm-search-comp>
        <wkbm-title-comp></wkbm-title-comp>
        <wkbm-list-comp class="tables"></wkbm-list-comp>
	</div>
</template>

<script>
    import wkbmSearchComp from '@/components/wiki/wkbm-search-comp'
	import wkbmTitleComp from '@/components/wiki/wkbm-title-comp'
	import wkbmListComp from '@/components/wiki/wkbm-list-comp'

	export default {
             components: {
			    wkbmSearchComp,
			    wkbmTitleComp,
			    wkbmListComp
			  }
	}
</script>