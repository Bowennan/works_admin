<template>
	<div class="um">
		<al-search-comp></al-search-comp>
        <al-title-comp></al-title-comp>
        <al-list-comp class="tables"></al-list-comp>
	</div>
</template>

<script>
    import alSearchComp from '@/components/community/al-search-comp'
	import alTitleComp from '@/components/community/al-title-comp'
	import alListComp from '@/components/community/al-list-comp'

	export default {
             components: {
			    alSearchComp,
			    alTitleComp,
			    alListComp
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