<template>
	<div class="um">
		<ao-search-comp></ao-search-comp>
        <ao-title-comp></ao-title-comp>
        <ao-list-comp class="tables"></ao-list-comp>
	</div>
</template>

<script>
    import aoSearchComp from '@/components/community/ao-search-comp'
	import aoTitleComp from '@/components/community/ao-title-comp'
	import aoListComp from '@/components/community/ao-list-comp'

	export default {
             components: {
			    aoSearchComp,
			    aoTitleComp,
			    aoListComp
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