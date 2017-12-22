<template>
	<div class="um">
		<indexsl-search-comp></indexsl-search-comp>
        <indexsl-title-comp></indexsl-title-comp>
        <indexsl-list-comp class="tables"></indexsl-list-comp>
	</div>
</template>

<script>
    import indexslSearchComp from '@/components/community/community-t/indexsl-search-comp'
	import indexslTitleComp from '@/components/community/community-t/indexsl-title-comp'
	import indexslListComp from '@/components/community/community-t/indexsl-list-comp'

	export default {
             components: {
			    indexslSearchComp,
			    indexslTitleComp,
			    indexslListComp
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