<template>
	<div class="um">
		<indexqll-search-comp></indexqll-search-comp>
        <indexqll-title-comp></indexqll-title-comp>
        <indexqll-list-comp class="tables"></indexqll-list-comp>
	</div>
</template>

<script>
    import indexqllSearchComp from '@/components/community/community-t/indexqll-search-comp'
	import indexqllTitleComp from '@/components/community/community-t/indexqll-title-comp'
	import indexqllListComp from '@/components/community/community-t/indexqll-list-comp'

	export default {
             components: {
			    indexqllSearchComp,
			    indexqllTitleComp,
			    indexqllListComp
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