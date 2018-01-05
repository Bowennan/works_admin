<template>
	<div class="tables">
		<pcpl-search-comp></pcpl-search-comp>
        <pcpl-title-comp></pcpl-title-comp>
        <pcpl-list-comp class="tables"></pcpl-list-comp>
	</div>
</template>

<script>
    import pcplSearchComp from '@/components/wiki/sub/pcpl-search-comp'
	import pcplTitleComp from '@/components/wiki/sub/pcpl-title-comp'
	import pcplListComp from '@/components/wiki/sub/pcpl-list-comp'

	export default {
             components: {
			    pcplSearchComp,
			    pcplTitleComp,
			    pcplListComp
			  }
	}
</script>