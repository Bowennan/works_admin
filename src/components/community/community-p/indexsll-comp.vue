<template>
	<div class="um">
		<indexsll-search-comp></indexsll-search-comp>
        <indexsll-title-comp></indexsll-title-comp>
        <indexsll-list-comp class="tables"></indexsll-list-comp>
	</div>
</template>

<script>
    import indexsllSearchComp from '@/components/community/community-p/indexsll-search-comp'
	import indexsllTitleComp from '@/components/community/community-p/indexsll-title-comp'
	import indexsllListComp from '@/components/community/community-p/indexsll-list-comp'

	export default {
             components: {
			    indexsllSearchComp,
			    indexsllTitleComp,
			    indexsllListComp
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