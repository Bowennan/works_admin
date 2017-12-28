<template>
	<div class="tables">
		<tbcdisclo-search-comp></tbcdisclo-search-comp>
        <tbcdisclo-title-comp></tbcdisclo-title-comp>
        <tbcdisclo-list-comp class="tables"></tbcdisclo-list-comp>
	</div>
</template>

<script>
    import tbcdiscloSearchComp from '@/components/community/tbcdisclo-search-comp'
	import tbcdiscloTitleComp from '@/components/community/tbcdisclo-title-comp'
	import tbcdiscloListComp from '@/components/community/tbcdisclo-list-comp'

	export default {
             components: {
			    tbcdiscloSearchComp,
			    tbcdiscloTitleComp,
			    tbcdiscloListComp
			  }
	}
</script>