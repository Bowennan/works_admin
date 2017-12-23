<template>
	<div class="um">
		<indexprl-search-comp></indexprl-search-comp>
        <indexprl-title-comp></indexprl-title-comp>
        <indexprl-list-comp class="tables"></indexprl-list-comp>
	</div>
</template>

<script>
    import indexprlSearchComp from '@/components/community/community-b/indexprl-search-comp'
	import indexprlTitleComp from '@/components/community/community-b/indexprl-title-comp'
	import indexprlListComp from '@/components/community/community-b/indexprl-list-comp'

	export default {
             components: {
			    indexprlSearchComp,
			    indexprlTitleComp,
			    indexprlListComp
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