<template>
	<div class="tables">
		<senhand-search-comp></senhand-search-comp>
        <senhand-title-comp></senhand-title-comp>
        <senhand-list-comp class="tables"></senhand-list-comp>
	</div>
</template>

<script>
    import senhandSearchComp from '@/components/community/senhand-search-comp'
	import senhandTitleComp from '@/components/community/senhand-title-comp'
	import senhandListComp from '@/components/community/senhand-list-comp'

	export default {
             components: {
			    senhandSearchComp,
			    senhandTitleComp,
			    senhandListComp
			  }
	}
</script>