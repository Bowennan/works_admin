<template>
	<div class="tables">
		<ptm-search-comp></ptm-search-comp>
        <ptm-title-comp></ptm-title-comp>
        <ptm-list-comp class="tables"></ptm-list-comp>
	</div>
</template>

<script>
    import ptmSearchComp from '@/components/wiki/ptm-search-comp'
	import ptmTitleComp from '@/components/wiki/ptm-title-comp'
	import ptmListComp from '@/components/wiki/ptm-list-comp'

	export default {
             components: {
			    ptmSearchComp,
			    ptmTitleComp,
			    ptmListComp
			  }
	}
</script>