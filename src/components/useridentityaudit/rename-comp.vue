<template>
	<div class="nutbt">
		<rename-search-comp></rename-search-comp>
		<rename-title-comp></rename-title-comp>
        <rename-lists-comp></rename-lists-comp>
	</div>
</template>

<script>
	import renameListsComp from '@/components/useridentityaudit/rename-lists-comp'
    import renameSearchComp from '@/components/useridentityaudit/rename-search-comp'
    import renameTitleComp from '@/components/useridentityaudit/rename-title-comp'
	export default {
             components: {
			    renameListsComp,
			    renameSearchComp,
			    renameTitleComp
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