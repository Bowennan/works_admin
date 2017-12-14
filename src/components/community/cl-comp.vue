<template>
	<div class="um">
		<cl-search-comp></cl-search-comp>
        <cl-title-comp></cl-title-comp>
        <cl-list-comp class="tables"></cl-list-comp>
	</div>
</template>

<script>
    import clSearchComp from '@/components/community/cl-search-comp'
	import clTitleComp from '@/components/community/cl-title-comp'
	import clListComp from '@/components/community/cl-list-comp'

	export default {
             components: {
			    clSearchComp,
			    clTitleComp,
			    clListComp
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