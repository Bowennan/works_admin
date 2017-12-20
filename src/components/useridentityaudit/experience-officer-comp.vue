<template>
	<div class="nutbt">
		<eo-search-comp></eo-search-comp>
		<eo-title-comp></eo-title-comp>
        <eo-lists-comp></eo-lists-comp>
	</div>
</template>

<script>
	import eoListsComp from '@/components/useridentityaudit/eo-lists-comp'
    import eoSearchComp from '@/components/useridentityaudit/eo-search-comp'
    import eoTitleComp from '@/components/useridentityaudit/eo-title-comp'
	export default {
             components: {
			    eoListsComp,
			    eoSearchComp,
			    eoTitleComp
			  }
	}
</script>

<style scoped>
	  .tables {
	    width:96%;
	    min-width:1052px;
	    margin:0 10px;
	  }
</style>