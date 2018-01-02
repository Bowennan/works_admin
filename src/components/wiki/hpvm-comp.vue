<template>
	<div class="tables">
		<hpvm-search-comp></hpvm-search-comp>
        <hpvm-title-comp></hpvm-title-comp>
        <hpvm-list-comp class="tables"></hpvm-list-comp>
	</div>
</template>

<script>
    import hpvmSearchComp from '@/components/wiki/hpvm-search-comp'
	import hpvmTitleComp from '@/components/wiki/hpvm-title-comp'
	import hpvmListComp from '@/components/wiki/hpvm-list-comp'

	export default {
             components: {
			    hpvmSearchComp,
			    hpvmTitleComp,
			    hpvmListComp
			  }
	}
</script>