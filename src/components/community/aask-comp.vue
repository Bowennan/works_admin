<template>
	<div class="tables">
		<aask-search-comp></aask-search-comp>
        <aask-title-comp></aask-title-comp>
        <aask-list-comp class="tables"></aask-list-comp>
	</div>
</template>

<script>
    import aaskSearchComp from '@/components/community/aask-search-comp'
	import aaskTitleComp from '@/components/community/aask-title-comp'
	import aaskListComp from '@/components/community/aask-list-comp'

	export default {
             components: {
			    aaskSearchComp,
			    aaskTitleComp,
			    aaskListComp
			  }
	}
</script>