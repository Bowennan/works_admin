<template>
	<div class="nutbt">
		<community-search-comp></community-search-comp>
		<community-title-comp></community-title-comp>
        <community-lists-comp></community-lists-comp>
	</div>
</template>

<script>
	import communityListsComp from '@/components/useridentityaudit/community-lists-comp'
    import communitySearchComp from '@/components/useridentityaudit/community-search-comp'
    import communityTitleComp from '@/components/useridentityaudit/community-title-comp'
	export default {
             components: {
			    communityListsComp,
			    communitySearchComp,
			    communityTitleComp
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