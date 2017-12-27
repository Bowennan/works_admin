<template>
	<div class="tables">
		<asking-search-comp></asking-search-comp>
        <asking-title-comp></asking-title-comp>
        <asking-list-comp class="tables"></asking-list-comp>
	</div>
</template>

<script>
    import askingSearchComp from '@/components/community/asking-search-comp'
	import askingTitleComp from '@/components/community/asking-title-comp'
	import askingListComp from '@/components/community/asking-list-comp'

	export default {
             components: {
			    askingSearchComp,
			    askingTitleComp,
			    askingListComp
			  }
	}
</script>