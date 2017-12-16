<template>
	<div class="um">
		<agp-search-comp></agp-search-comp>
        <agp-title-comp></agp-title-comp>
        <agp-list-comp class="tables"></agp-list-comp>
	</div>
</template>

<script>
    import agpSearchComp from '@/components/community/agp-search-comp'
	import agpTitleComp from '@/components/community/agp-title-comp'
	import agpListComp from '@/components/community/agp-list-comp'

	export default {
             components: {
			    agpSearchComp,
			    agpTitleComp,
			    agpListComp
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