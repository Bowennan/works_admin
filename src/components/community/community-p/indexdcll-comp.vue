<template>
	<div class="um">
		<indexdcll-search-comp></indexdcll-search-comp>
        <indexdcll-title-comp></indexdcll-title-comp>
        <indexdcll-list-comp class="tables"></indexdcll-list-comp>
	</div>
</template>

<script>
    import indexdcllSearchComp from '@/components/community/community-p/indexdcll-search-comp'
	import indexdcllTitleComp from '@/components/community/community-p/indexdcll-title-comp'
	import indexdcllListComp from '@/components/community/community-p/indexdcll-list-comp'

	export default {
             components: {
			    indexdcllSearchComp,
			    indexdcllTitleComp,
			    indexdcllListComp
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