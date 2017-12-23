<template>
	<div class="um">
		<indexwll-search-comp></indexwll-search-comp>
        <indexwll-title-comp></indexwll-title-comp>
        <indexwll-list-comp class="tables"></indexwll-list-comp>
	</div>
</template>

<script>
    import indexwllSearchComp from '@/components/community/community-t/indexwll-search-comp'
	import indexwllTitleComp from '@/components/community/community-t/indexwll-title-comp'
	import indexwllListComp from '@/components/community/community-t/indexwll-list-comp'

	export default {
             components: {
			    indexwllSearchComp,
			    indexwllTitleComp,
			    indexwllListComp
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