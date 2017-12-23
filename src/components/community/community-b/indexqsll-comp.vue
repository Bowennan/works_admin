<template>
	<div class="um">
		<indexqsll-search-comp></indexqsll-search-comp>
        <indexqsll-title-comp></indexqsll-title-comp>
        <indexqsll-list-comp class="tables"></indexqsll-list-comp>
	</div>
</template>

<script>
    import indexqsllSearchComp from '@/components/community/community-t/indexqsll-search-comp'
	import indexqsllTitleComp from '@/components/community/community-t/indexqsll-title-comp'
	import indexqsllListComp from '@/components/community/community-t/indexqsll-list-comp'

	export default {
             components: {
			    indexqsllSearchComp,
			    indexqsllTitleComp,
			    indexqsllListComp
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