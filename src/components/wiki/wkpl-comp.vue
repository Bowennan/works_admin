<template>
	<div class="tables">
		<wkpl-search-comp></wkpl-search-comp>
        <wkpl-title-comp></wkpl-title-comp>
        <wkpl-list-comp class="tables"></wkpl-list-comp>
	</div>
</template>

<script>
    import wkplSearchComp from '@/components/wiki/wkpl-search-comp'
	import wkplTitleComp from '@/components/wiki/wkpl-title-comp'
	import wkplListComp from '@/components/wiki/wkpl-list-comp'

	export default {
             components: {
			    wkplSearchComp,
			    wkplTitleComp,
			    wkplListComp
			  }
	}
</script>