<template>
	<div class="um">
		<fpq-search-comp></fpq-search-comp>
        <fpq-title-comp></fpq-title-comp>
        <fpq-list-comp class="tables"></fpq-list-comp>
	</div>
</template>

<script>
    import fpqSearchComp from '@/components/community/community-f/fpq-search-comp'
	import fpqTitleComp from '@/components/community/community-f/fpq-title-comp'
	import fpqListComp from '@/components/community/community-f/fpq-list-comp'

	export default {
             components: {
			    fpqSearchComp,
			    fpqTitleComp,
			    fpqListComp
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