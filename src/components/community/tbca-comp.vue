<template>
	<div class="um">
		<tbca-search-comp></tbca-search-comp>
        <tbca-title-comp></tbca-title-comp>
        <tbca-list-comp class="tables"></tbca-list-comp>
	</div>
</template>

<script>
    import tbcaSearchComp from '@/components/community/tbca-search-comp'
	import tbcaTitleComp from '@/components/community/tbca-title-comp'
	import tbcaListComp from '@/components/community/tbca-list-comp'

	export default {
             components: {
			    tbcaSearchComp,
			    tbcaTitleComp,
			    tbcaListComp
			  }
	}
</script>

<style scoped>
	  .tables {
	  	height: 100%;
	    width:96%;
	    min-width:1052px;
	    margin:0 10px;
	  }
</style>