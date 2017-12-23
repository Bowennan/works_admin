<template>
	<div class="um">
		<indexpll-search-comp></indexpll-search-comp>
        <indexpll-title-comp></indexpll-title-comp>
        <indexpll-list-comp class="tables"></indexpll-list-comp>
	</div>
</template>

<script>
    import indexpllSearchComp from '@/components/community/community-t/indexpll-search-comp'
	import indexpllTitleComp from '@/components/community/community-t/indexpll-title-comp'
	import indexpllListComp from '@/components/community/community-t/indexpll-list-comp'

	export default {
             components: {
			    indexpllSearchComp,
			    indexpllTitleComp,
			    indexpllListComp
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