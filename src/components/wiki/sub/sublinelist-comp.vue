<template>
	<div class="tables">
		<sublinelist-search-comp></sublinelist-search-comp>
        <sublinelist-title-comp></sublinelist-title-comp>
        <sublinelist-list-comp class="tables"></sublinelist-list-comp>
	</div>
</template>

<script>
    import sublinelistSearchComp from '@/components/wiki/sub/sublinelist-search-comp'
	import sublinelistTitleComp from '@/components/wiki/sub/sublinelist-title-comp'
	import sublinelistListComp from '@/components/wiki/sub/sublinelist-list-comp'

	export default {
             components: {
			    sublinelistSearchComp,
			    sublinelistTitleComp,
			    sublinelistListComp
			  }
	}
</script>