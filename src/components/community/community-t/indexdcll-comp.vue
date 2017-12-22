<template>
	<div class="um">
		<fpp-search-comp></fpp-search-comp>
        <fpp-title-comp></fpp-title-comp>
        <fpp-list-comp class="tables"></fpp-list-comp>
	</div>
</template>

<script>
    import fppSearchComp from '@/components/community/community-f/fpp-search-comp'
	import fppTitleComp from '@/components/community/community-f/fpp-title-comp'
	import fppListComp from '@/components/community/community-f/fpp-list-comp'

	export default {
             components: {
			    fppSearchComp,
			    fppTitleComp,
			    fppListComp
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