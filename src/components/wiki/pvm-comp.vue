<template>
	<div class="tables">
		<pvm-search-comp></pvm-search-comp>
        <pvm-title-comp></pvm-title-comp>
        <pvm-list-comp class="tables"></pvm-list-comp>
	</div>
</template>

<script>
    import pvmSearchComp from '@/components/wiki/pvm-search-comp'
	import pvmTitleComp from '@/components/wiki/pvm-title-comp'
	import pvmListComp from '@/components/wiki/pvm-list-comp'

	export default {
             components: {
			    pvmSearchComp,
			    pvmTitleComp,
			    pvmListComp
			  }
	}
</script>