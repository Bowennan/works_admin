<template>
	<div class="um">
		<ap-search-comp></ap-search-comp>
        <ap-title-comp></ap-title-comp>
        <ap-list-comp class="tables"></ap-list-comp>
	</div>
</template>

<script>
    import apSearchComp from '@/components/commonpostings/ap-search-comp'
	import apTitleComp from '@/components/commonpostings/ap-title-comp'
	import apListComp from '@/components/commonpostings/ap-list-comp'

	export default {
             components: {
			    apSearchComp,
			    apTitleComp,
			    apListComp
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