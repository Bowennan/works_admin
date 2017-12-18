<template>
	<div class="um">
		<ash-search-comp></ash-search-comp>
        <ash-title-comp></ash-title-comp>
        <ash-list-comp class="tables"></ash-list-comp>
	</div>
</template>

<script>
    import ashSearchComp from '@/components/community/ash-search-comp'
	import ashTitleComp from '@/components/community/ash-title-comp'
	import ashListComp from '@/components/community/ash-list-comp'

	export default {
             components: {
			    ashSearchComp,
			    ashTitleComp,
			    ashListComp
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