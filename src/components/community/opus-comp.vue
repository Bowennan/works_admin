<template>
	<div class="tables">
		<opus-search-comp></opus-search-comp>
        <opus-title-comp></opus-title-comp>
        <opus-list-comp class="tables"></opus-list-comp>
	</div>
</template>

<script>
    import opusSearchComp from '@/components/community/opus-search-comp'
	import opusTitleComp from '@/components/community/opus-title-comp'
	import opusListComp from '@/components/community/opus-list-comp'

	export default {
             components: {
			    opusSearchComp,
			    opusTitleComp,
			    opusListComp
			  }
	}
</script>