<template>
	<div class="um">
		<fpgp-search-comp></fpgp-search-comp>
        <fpgp-title-comp></fpgp-title-comp>
        <fpgp-list-comp class="tables"></fpgp-list-comp>
	</div>
</template>

<script>
    import fpgpSearchComp from '@/components/community/community-f/fpgp-search-comp'
	import fpgpTitleComp from '@/components/community/community-f/fpgp-title-comp'
	import fpgpListComp from '@/components/community/community-f/fpgp-list-comp'

	export default {
             components: {
			    fpgpSearchComp,
			    fpgpTitleComp,
			    fpgpListComp
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