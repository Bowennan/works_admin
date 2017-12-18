<template>
	<div class="um">
		<tbcsh-search-comp></tbcsh-search-comp>
        <tbcsh-title-comp></tbcsh-title-comp>
        <tbcsh-list-comp class="tables"></tbcsh-list-comp>
	</div>
</template>

<script>
    import tbcshSearchComp from '@/components/community/tbcsh-search-comp'
	import tbcshTitleComp from '@/components/community/tbcsh-title-comp'
	import tbcshListComp from '@/components/community/tbcsh-list-comp'

	export default {
             components: {
			    tbcshSearchComp,
			    tbcshTitleComp,
			    tbcshListComp
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