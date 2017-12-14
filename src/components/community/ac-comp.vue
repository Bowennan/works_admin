<template>
	<div class="um">
		<ac-search-comp></ac-search-comp>
        <ac-title-comp></ac-title-comp>
        <ac-list-comp class="tables"></ac-list-comp>
	</div>
</template>

<script>
    import acSearchComp from '@/components/community/ac-search-comp'
	import acTitleComp from '@/components/community/ac-title-comp'
	import acListComp from '@/components/community/ac-list-comp'

	export default {
             components: {
			    acSearchComp,
			    acTitleComp,
			    acListComp
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