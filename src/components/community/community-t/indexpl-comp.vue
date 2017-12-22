<template>
	<div class="um">
		<indexpl-search-comp></indexpl-search-comp>
        <indexpl-title-comp></indexpl-title-comp>
        <indexpl-list-comp class="tables"></indexpl-list-comp>
	</div>
</template>

<script>
    import indexplSearchComp from '@/components/community/community-t/indexpl-search-comp'
	import indexplTitleComp from '@/components/community/community-t/indexpl-title-comp'
	import indexplListComp from '@/components/community/community-t/indexpl-list-comp'

	export default {
             components: {
			    indexplSearchComp,
			    indexplTitleComp,
			    indexplListComp
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