<template>
	<div class="um">
		<disclo-search-comp></disclo-search-comp>
        <disclo-title-comp></disclo-title-comp>
        <disclo-list-comp class="tables"></disclo-list-comp>
	</div>
</template>

<script>
    import discloSearchComp from '@/components/community/disclo-search-comp'
	import discloTitleComp from '@/components/community/disclo-title-comp'
	import discloListComp from '@/components/community/disclo-list-comp'

	export default {
             components: {
			    discloSearchComp,
			    discloTitleComp,
			    discloListComp
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