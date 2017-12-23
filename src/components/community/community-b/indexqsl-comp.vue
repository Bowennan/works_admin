<template>
	<div class="um">
		<indexqsl-search-comp></indexqsl-search-comp>
        <indexqsl-title-comp></indexqsl-title-comp>
        <indexqsl-list-comp class="tables"></indexqsl-list-comp>
	</div>
</template>

<script>
    import indexqslSearchComp from '@/components/community/community-b/indexqsl-search-comp'
	import indexqslTitleComp from '@/components/community/community-b/indexqsl-title-comp'
	import indexqslListComp from '@/components/community/community-b/indexqsl-list-comp'

	export default {
             components: {
			    indexqslSearchComp,
			    indexqslTitleComp,
			    indexqslListComp
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