<template>
	<div class="tables">
		<lpm-search-comp></lpm-search-comp>
        <lpm-title-comp></lpm-title-comp>
        <lpm-list-comp class="tables"></lpm-list-comp>
	</div>
</template>

<script>
    import lpmSearchComp from '@/components/wiki/lpm-search-comp'
	import lpmTitleComp from '@/components/wiki/lpm-title-comp'
	import lpmListComp from '@/components/wiki/lpm-list-comp'

	export default {
             components: {
			    lpmSearchComp,
			    lpmTitleComp,
			    lpmListComp
			  }
	}
</script>