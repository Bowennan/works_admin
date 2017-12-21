<template>
	<div class="um">
		<banner-search-comp></banner-search-comp>
        <banner-title-comp @open="changeCover"></banner-title-comp>
        <banner-list-comp :cover = "coverStatus" @close="changeCover" class="tables"></banner-list-comp>
	</div>
</template>

<script>
    import bannerSearchComp from '@/components/community/common-m/banner-search-comp'
	import bannerTitleComp from '@/components/community/common-m/banner-title-comp'
	import bannerListComp from '@/components/community/common-m/banner-list-comp'

	export default {
		     data() {
                return {
                	coverStatus:false
                }
		     },
		     methods: {
		     	changeCover() {
		     		this.coverStatus = !this.coverStatus
		     	}
		     },
             components: {
			    bannerSearchComp,
			    bannerTitleComp,
			    bannerListComp
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