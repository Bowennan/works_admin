<template>
	<div class="tables">
		<bo-search-comp></bo-search-comp>
		<bo-title-comp></bo-title-comp>
        <bo-lists-comp></bo-lists-comp>
	</div>
</template>

<script>
	import boListsComp from '@/components/useridentityaudit/bo-lists-comp'
    import boSearchComp from '@/components/useridentityaudit/bo-search-comp'
    import boTitleComp from '@/components/useridentityaudit/bo-title-comp'
	export default {
             components: {
			    boListsComp,
			    boSearchComp,
			    boTitleComp
			  }
	}
</script>