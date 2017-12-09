<template>
	<div class="um">
		<tbcc-search-comp></tbcc-search-comp>
        <tbcc-title-comp></tbcc-title-comp>
        <tbcc-list-comp class="tables"></tbcc-list-comp>
	</div>
</template>

<script>
    import tbccSearchComp from '@/components/commonpostings/tbcc-search-comp'
	import tbccTitleComp from '@/components/commonpostings/tbcc-title-comp'
	import tbccListComp from '@/components/commonpostings/tbcc-list-comp'

	export default {
             components: {
			    tbccSearchComp,
			    tbccTitleComp,
			    tbccListComp
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