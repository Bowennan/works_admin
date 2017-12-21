<template>
	<div class="um">
		<bulletin-search-comp></bulletin-search-comp>
        <bulletin-title-comp></bulletin-title-comp>
        <bulletin-list-comp class="tables"></bulletin-list-comp>
	</div>
</template>

<script>
    import bulletinSearchComp from '@/components/community/common-m/bulletin-search-comp'
	import bulletinTitleComp from '@/components/community/common-m/bulletin-title-comp'
	import bulletinListComp from '@/components/community/common-m/bulletin-list-comp'

	export default {
             components: {
			    bulletinSearchComp,
			    bulletinTitleComp,
			    bulletinListComp
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