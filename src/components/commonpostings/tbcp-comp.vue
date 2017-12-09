<template>
	<div class="um">
		<tbcp-search-comp></tbcp-search-comp>
        <tbcp-title-comp></tbcp-title-comp>
        <tbcp-list-comp class="tables"></tbcp-list-comp>
	</div>
</template>

<script>
    import tbcpSearchComp from '@/components/commonpostings/tbcp-search-comp'
	import tbcpTitleComp from '@/components/commonpostings/tbcp-title-comp'
	import tbcpListComp from '@/components/commonpostings/tbcp-list-comp'

	export default {
             components: {
			    tbcpSearchComp,
			    tbcpTitleComp,
			    tbcpListComp
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