<template>
	<div class="tables">
		<eo-search-comp></eo-search-comp>
		<eo-title-comp></eo-title-comp>
        <eo-lists-comp></eo-lists-comp>
	</div>
</template>

<script>
	import eoListsComp from '@/components/useridentityaudit/eo-lists-comp'
    import eoSearchComp from '@/components/useridentityaudit/eo-search-comp'
    import eoTitleComp from '@/components/useridentityaudit/eo-title-comp'
	export default {
             components: {
			    eoListsComp,
			    eoSearchComp,
			    eoTitleComp
			  }
	}
</script>