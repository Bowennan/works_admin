<template>
	<div class="um">
		<products-search-comp></products-search-comp>
        <products-title-comp @open="changeCover"></products-title-comp>
        <products-list-comp :cover = "coverStatus" @close="changeCover" class="tables"></products-list-comp>
	</div>
</template>

<script>
    import productsSearchComp from '@/components/community/common-m/products-search-comp'
	import productsTitleComp from '@/components/community/common-m/products-title-comp'
	import productsListComp from '@/components/community/common-m/products-list-comp'

	export default {
		     data() {
		     	return {
		     		coverStatus:false
		     	}
		     },
		     methods: {
		     	changeCover() {
		     		this.coverStatus = !this.coverStatus;
		     	}
		     },
             components: {
			    productsSearchComp,
			    productsTitleComp,
			    productsListComp
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