<template>
	<div class="um">
		<tbcask-search-comp></tbcask-search-comp>
        <tbcask-title-comp></tbcask-title-comp>
        <tbcask-list-comp class="tables"></tbcask-list-comp>
	</div>
</template>

<script>
    import tbcaskSearchComp from '@/components/community/tbcask-search-comp'
	import tbcaskTitleComp from '@/components/community/tbcask-title-comp'
	import tbcaskListComp from '@/components/community/tbcask-list-comp'

	export default {
             components: {
			    tbcaskSearchComp,
			    tbcaskTitleComp,
			    tbcaskListComp
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