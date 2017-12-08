<template>
	<div class="nutbt">
		<logs-search-comp></logs-search-comp>
		<logs-title-comp></logs-title-comp>
        <logs-lists-comp></logs-lists-comp>
	</div>
</template>

<script>
	import logsListsComp from '@/components/logs/logs-lists-comp'
    import logsSearchComp from '@/components/logs/logs-search-comp'
    import logsTitleComp from '@/components/logs/logs-title-comp'
	export default {
             components: {
			    logsListsComp,
			    logsSearchComp,
			    logsTitleComp
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