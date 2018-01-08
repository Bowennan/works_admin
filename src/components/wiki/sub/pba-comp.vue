<template>
	<div class="tables">
		<pba-search-comp></pba-search-comp>
        <pba-title-comp></pba-title-comp>
        <pba-list-comp class="tables"></pba-list-comp>
	</div>
</template>

<script>
    import pbaSearchComp from '@/components/wiki/sub/pba-search-comp'
	import pbaTitleComp from '@/components/wiki/sub/pba-title-comp'
	import pbaListComp from '@/components/wiki/sub/pba-list-comp'

	export default {
             components: {
			    pbaSearchComp,
			    pbaTitleComp,
			    pbaListComp
			  }
	}
</script>