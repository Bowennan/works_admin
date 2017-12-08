<template>
	<div class="nutbt">
		<tagged-search-comp></tagged-search-comp>
		<tagged-title-comp></tagged-title-comp>
        <table-comp class="tables">
        	<span class="tbt" slot="tbt">待处理</span>
        </table-comp>
	</div>
</template>

<script>
	import tableComp from '@/components/table-comp'
    import taggedSearchComp from '@/components/tobetreated/tagged-search-comp'
    import taggedTitleComp from '@/components/tobetreated/tagged-title-comp'
	export default {
             components: {
			    tableComp,
			    taggedSearchComp,
			    taggedTitleComp
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