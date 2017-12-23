<template>
	<div class="um">
		<indexql-search-comp></indexql-search-comp>
        <indexql-title-comp></indexql-title-comp>
        <indexql-list-comp class="tables"></indexql-list-comp>
	</div>
</template>

<script>
    import indexqlSearchComp from '@/components/community/community-t/indexql-search-comp'
	import indexqlTitleComp from '@/components/community/community-t/indexql-title-comp'
	import indexqlListComp from '@/components/community/community-t/indexql-list-comp'

	export default {
             components: {
			    indexqlSearchComp,
			    indexqlTitleComp,
			    indexqlListComp
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