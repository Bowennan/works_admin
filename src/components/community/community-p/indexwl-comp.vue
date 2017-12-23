<template>
	<div class="um">
		<indexwl-search-comp></indexwl-search-comp>
        <indexwl-title-comp></indexwl-title-comp>
        <indexwl-list-comp class="tables"></indexwl-list-comp>
	</div>
</template>

<script>
    import indexwlSearchComp from '@/components/community/community-t/indexwl-search-comp'
	import indexwlTitleComp from '@/components/community/community-t/indexwl-title-comp'
	import indexwlListComp from '@/components/community/community-t/indexwl-list-comp'

	export default {
             components: {
			    indexwlSearchComp,
			    indexwlTitleComp,
			    indexwlListComp
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