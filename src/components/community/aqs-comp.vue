<template>
	<div class="um">
		<aqs-search-comp></aqs-search-comp>
        <aqs-title-comp></aqs-title-comp>
        <aqs-list-comp class="tables"></aqs-list-comp>
	</div>
</template>

<script>
    import aqsSearchComp from '@/components/community/aqs-search-comp'
	import aqsTitleComp from '@/components/community/aqs-title-comp'
	import aqsListComp from '@/components/community/aqs-list-comp'

	export default {
             components: {
			    aqsSearchComp,
			    aqsTitleComp,
			    aqsListComp
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