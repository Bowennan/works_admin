<template>
	<div class="um">
		<indexdcl-search-comp></indexdcl-search-comp>
        <indexdcl-title-comp></indexdcl-title-comp>
        <indexdcl-list-comp class="tables"></indexdcl-list-comp>
	</div>
</template>

<script>
    import indexdclSearchComp from '@/components/community/community-t/indexdcl-search-comp'
	import indexdclTitleComp from '@/components/community/community-t/indexdcl-title-comp'
	import indexdclListComp from '@/components/community/community-t/indexdcl-list-comp'

	export default {
             components: {
			    indexdclSearchComp,
			    indexdclTitleComp,
			    indexdclListComp
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