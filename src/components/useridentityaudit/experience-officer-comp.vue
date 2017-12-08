<template>
	<div class="nutbt">
		<eo-search-comp></eo-search-comp>
		<eo-title-comp></eo-title-comp>
        <eo-lists-comp></eo-lists-comp>
	</div>
</template>

<script>
	import eoListsComp from '@/components/useridentityaudit/eo-lists-comp'
    import eoSearchComp from '@/components/useridentityaudit/eo-search-comp'
    import eoTitleComp from '@/components/useridentityaudit/eo-title-comp'
	export default {
             components: {
			    eoListsComp,
			    eoSearchComp,
			    eoTitleComp
			  }
	}
</script>

<style scoped>
	  .tables {
	    width:96%;
	    min-width:1052px;
	    margin:0 10px;
	  }
	  .tbt {
	  	display: inline-block;
	  	width:52px;
	  	height:21px;
	  	line-height: 21px;
	  	text-align: center;
	  	background: #f90;
	  	border-radius: 5px;
	  	color:#fff;
	  	font-size:12px;
	  	font-weight: bold;
	  }
</style>