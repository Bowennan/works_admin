<template>
	<div class="um">
		<fpsh-search-comp></fpsh-search-comp>
        <fpsh-title-comp></fpsh-title-comp>
        <fpsh-list-comp class="tables"></fpsh-list-comp>
	</div>
</template>

<script>
    import fpshSearchComp from '@/components/community/community-f/fpsh-search-comp'
	import fpshTitleComp from '@/components/community/community-f/fpsh-title-comp'
	import fpshListComp from '@/components/community/community-f/fpsh-list-comp'

	export default {
             components: {
			    fpshSearchComp,
			    fpshTitleComp,
			    fpshListComp
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