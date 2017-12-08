<template>
	<div class="nutbt">
		<bo-search-comp></bo-search-comp>
		<bo-title-comp></bo-title-comp>
        <bo-lists-comp></bo-lists-comp>
	</div>
</template>

<script>
	import boListsComp from '@/components/useridentityaudit/bo-lists-comp'
    import boSearchComp from '@/components/useridentityaudit/bo-search-comp'
    import boTitleComp from '@/components/useridentityaudit/bo-title-comp'
	export default {
             components: {
			    boListsComp,
			    boSearchComp,
			    boTitleComp
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