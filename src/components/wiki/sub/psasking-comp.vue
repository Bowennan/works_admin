<template>
	<div class="tables">
		<psasking-search-comp></psasking-search-comp>
        <psasking-title-comp></psasking-title-comp>
        <psasking-list-comp class="tables"></psasking-list-comp>
	</div>
</template>

<script>
    import psaskingSearchComp from '@/components/wiki/sub/psasking-search-comp'
	import psaskingTitleComp from '@/components/wiki/sub/psasking-title-comp'
	import psaskingListComp from '@/components/wiki/sub/psasking-list-comp'

	export default {
             components: {
			    psaskingSearchComp,
			    psaskingTitleComp,
			    psaskingListComp
			  }
	}
</script>