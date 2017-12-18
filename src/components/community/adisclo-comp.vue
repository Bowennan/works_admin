<template>
	<div class="um">
		<adisclo-search-comp></adisclo-search-comp>
        <adisclo-title-comp></adisclo-title-comp>
        <adisclo-list-comp class="tables"></adisclo-list-comp>
	</div>
</template>

<script>
    import adiscloSearchComp from '@/components/community/adisclo-search-comp'
	import adiscloTitleComp from '@/components/community/adisclo-title-comp'
	import adiscloListComp from '@/components/community/adisclo-list-comp'

	export default {
             components: {
			    adiscloSearchComp,
			    adiscloTitleComp,
			    adiscloListComp
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