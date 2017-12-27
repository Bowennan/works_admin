<template>
	<div class="tables">
		<aa-search-comp></aa-search-comp>
        <aa-title-comp></aa-title-comp>
        <aa-list-comp class="tables"></aa-list-comp>
	</div>
</template>

<script>
    import aaSearchComp from '@/components/community/aa-search-comp'
	import aaTitleComp from '@/components/community/aa-title-comp'
	import aaListComp from '@/components/community/aa-list-comp'

	export default {
             components: {
			    aaSearchComp,
			    aaTitleComp,
			    aaListComp
			  }
	}
</script>