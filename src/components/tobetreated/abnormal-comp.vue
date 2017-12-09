<template>
	<div class="nutbt">
		<abnormal-search-comp></abnormal-search-comp>
		<abnormal-title-comp></abnormal-title-comp>
        <table-comp class="tables">
        	<span class="tbt" slot="tbt">待处理</span>
        </table-comp>
	</div>
</template>

<script>
	import tableComp from '@/components/tobetreated/table-comp'
    import abnormalSearchComp from '@/components/tobetreated/abnormal-search-comp'
    import abnormalTitleComp from '@/components/tobetreated/abnormal-title-comp'
	export default {
             components: {
			    tableComp,
			    abnormalSearchComp,
			    abnormalTitleComp
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