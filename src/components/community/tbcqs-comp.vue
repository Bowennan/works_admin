<template>
	<div class="tables">
		<tbcqs-search-comp></tbcqs-search-comp>
        <tbcqs-title-comp></tbcqs-title-comp>
        <tbcqs-list-comp class="tables"></tbcqs-list-comp>
	</div>
</template>

<script>
    import tbcqsSearchComp from '@/components/community/tbcqs-search-comp'
	import tbcqsTitleComp from '@/components/community/tbcqs-title-comp'
	import tbcqsListComp from '@/components/community/tbcqs-list-comp'

	export default {
             components: {
			    tbcqsSearchComp,
			    tbcqsTitleComp,
			    tbcqsListComp
			  }
	}
</script>