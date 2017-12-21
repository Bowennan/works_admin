<template>
	<div class="um">
		<recommend-search-comp></recommend-search-comp>
        <recommend-title-comp></recommend-title-comp>
        <recommend-list-comp class="tables"></recommend-list-comp>
	</div>
</template>

<script>
    import recommendSearchComp from '@/components/community/common-m/recommend-search-comp'
	import recommendTitleComp from '@/components/community/common-m/recommend-title-comp'
	import recommendListComp from '@/components/community/common-m/recommend-list-comp'

	export default {
             components: {
			    recommendSearchComp,
			    recommendTitleComp,
			    recommendListComp
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
</style>