<template>
	<div class="nutbt">
		<tagged-search-comp></tagged-search-comp>
		<tagged-title-comp></tagged-title-comp>
        <table-comp class="tables"></table-comp>
	</div>
</template>

<script>
	import tableComp from '@/components/tobetreated/table-comp'
    import taggedSearchComp from '@/components/tobetreated/tagged-search-comp'
    import taggedTitleComp from '@/components/tobetreated/tagged-title-comp'
	export default {
             components: {
			    tableComp,
			    taggedSearchComp,
			    taggedTitleComp
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