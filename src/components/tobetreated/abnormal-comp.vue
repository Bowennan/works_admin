<template>
	<div class="nutbt">
		<abnormal-search-comp></abnormal-search-comp>
		<abnormal-title-comp></abnormal-title-comp>
        <table-comp class="tables"></table-comp>
	</div>
</template>

<script>
	import tableComp from '@/components/tobetreated/table-comp'
    import abnormalSearchComp from '@/components/tobetreated/abnormal-search-comp'
    import abnormalTitleComp from '@/components/tobetreated/abnormal-title-comp'
	export default {
             components: {
			    tableComp,
			    abnormalSearchComp,
			    abnormalTitleComp
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