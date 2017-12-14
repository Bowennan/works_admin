<template>
	<div class="um">
		<posting-search-comp></posting-search-comp>
        <posting-title-comp></posting-title-comp>
        <posting-list-comp class="tables"></posting-list-comp>
	</div>
</template>

<script>
    import postingSearchComp from '@/components/community/posting-search-comp'
	import postingTitleComp from '@/components/community/posting-title-comp'
	import postingListComp from '@/components/community/posting-list-comp'

	export default {
             components: {
			    postingSearchComp,
			    postingTitleComp,
			    postingListComp
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