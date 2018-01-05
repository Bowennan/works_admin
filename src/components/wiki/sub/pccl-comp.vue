<template>
	<div class="tables">
		<pccl-search-comp></pccl-search-comp>
        <pccl-title-comp></pccl-title-comp>
        <pccl-list-comp class="tables"></pccl-list-comp>
	</div>
</template>

<script>
    import pcclSearchComp from '@/components/wiki/sub/pccl-search-comp'
	import pcclTitleComp from '@/components/wiki/sub/pccl-title-comp'
	import pcclListComp from '@/components/wiki/sub/pccl-list-comp'

	export default {
             components: {
			    pcclSearchComp,
			    pcclTitleComp,
			    pcclListComp
			  }
	}
</script>