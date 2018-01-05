<template>
	<div class="tables">
		<pcqs-search-comp></pcqs-search-comp>
        <pcqs-title-comp></pcqs-title-comp>
        <pcqs-list-comp class="tables"></pcqs-list-comp>
	</div>
</template>

<script>
    import pcqsSearchComp from '@/components/wiki/sub/pcqs-search-comp'
	import pcqsTitleComp from '@/components/wiki/sub/pcqs-title-comp'
	import pcqsListComp from '@/components/wiki/sub/pcqs-list-comp'

	export default {
             components: {
			    pcqsSearchComp,
			    pcqsTitleComp,
			    pcqsListComp
			  }
	}
</script>