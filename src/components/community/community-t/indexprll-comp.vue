<template>
	<div class="um">
		<indexprll-search-comp></indexprll-search-comp>
        <indexprll-title-comp></indexprll-title-comp>
        <indexprll-list-comp class="tables"></indexprll-list-comp>
	</div>
</template>

<script>
    import indexprllSearchComp from '@/components/community/community-t/indexprll-search-comp'
	import indexprllTitleComp from '@/components/community/community-t/indexprll-title-comp'
	import indexprllListComp from '@/components/community/community-t/indexprll-list-comp'

	export default {
             components: {
			    indexprllSearchComp,
			    indexprllTitleComp,
			    indexprllListComp
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