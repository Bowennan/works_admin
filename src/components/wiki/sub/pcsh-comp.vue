<template>
	<div class="tables">
		<pcsh-search-comp></pcsh-search-comp>
        <pcsh-title-comp></pcsh-title-comp>
        <pcsh-list-comp class="tables"></pcsh-list-comp>
	</div>
</template>

<script>
    import pcshSearchComp from '@/components/wiki/sub/pcsh-search-comp'
	import pcshTitleComp from '@/components/wiki/sub/pcsh-title-comp'
	import pcshListComp from '@/components/wiki/sub/pcsh-list-comp'

	export default {
             components: {
			    pcshSearchComp,
			    pcshTitleComp,
			    pcshListComp
			  }
	}
</script>