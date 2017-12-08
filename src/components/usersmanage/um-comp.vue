<template>
	<div class="um">
		<um-search-comp></um-search-comp>
        <um-title-comp></um-title-comp>
        <table-comp class="tables"></table-comp>
	</div>
</template>

<script>
    import umSearchComp from '@/components/usersmanage/um-search-comp'
	import umTitleComp from '@/components/usersmanage/um-title-comp'
	import tableComp from '@/components/table-comp'

	export default {
             components: {
			    umSearchComp,
			    umTitleComp,
			    tableComp
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