<template>
	<div class="nutbt">
		<media-search-comp></media-search-comp>
		<media-title-comp></media-title-comp>
        <media-lists-comp></media-lists-comp>
	</div>
</template>

<script>
	import mediaListsComp from '@/components/useridentityaudit/media-lists-comp'
    import mediaSearchComp from '@/components/useridentityaudit/media-search-comp'
    import mediaTitleComp from '@/components/useridentityaudit/media-title-comp'
	export default {
             components: {
			    mediaListsComp,
			    mediaSearchComp,
			    mediaTitleComp
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