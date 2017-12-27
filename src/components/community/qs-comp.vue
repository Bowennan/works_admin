<template>
	<div class="tables">
		<qs-search-comp></qs-search-comp>
        <qs-title-comp></qs-title-comp>
        <qs-list-comp class="tables"></qs-list-comp>
	</div>
</template>

<script>
    import qsSearchComp from '@/components/community/qs-search-comp'
	import qsTitleComp from '@/components/community/qs-title-comp'
	import qsListComp from '@/components/community/qs-list-comp'

	export default {
             components: {
			    qsSearchComp,
			    qsTitleComp,
			    qsListComp
			  }
	}
</script>