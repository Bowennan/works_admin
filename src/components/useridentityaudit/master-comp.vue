<template>
	<div class="nutbt">
		<master-search-comp></master-search-comp>
		<master-title-comp></master-title-comp>
        <master-lists-comp></master-lists-comp>
	</div>
</template>

<script>
	import masterListsComp from '@/components/useridentityaudit/master-lists-comp'
    import masterSearchComp from '@/components/useridentityaudit/master-search-comp'
    import masterTitleComp from '@/components/useridentityaudit/master-title-comp'
	export default {
             components: {
			    masterListsComp,
			    masterSearchComp,
			    masterTitleComp
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