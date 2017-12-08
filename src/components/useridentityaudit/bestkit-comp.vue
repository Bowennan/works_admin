<template>
	<div class="nutbt">
		<bestkit-search-comp></bestkit-search-comp>
		<bestkit-title-comp></bestkit-title-comp>
        <bestkit-lists-comp></bestkit-lists-comp>
	</div>
</template>

<script>
	import bestkitListsComp from '@/components/useridentityaudit/bestkit-lists-comp'
    import bestkitSearchComp from '@/components/useridentityaudit/bestkit-search-comp'
    import bestkitTitleComp from '@/components/useridentityaudit/bestkit-title-comp'
	export default {
             components: {
			    bestkitListsComp,
			    bestkitSearchComp,
			    bestkitTitleComp
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