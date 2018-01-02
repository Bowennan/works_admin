<template>
	<div class="tables">
		<sublm-search-comp></sublm-search-comp>
        <sublm-title-comp></sublm-title-comp>
        <sublm-list-comp class="tables"></sublm-list-comp>
	</div>
</template>

<script>
    import sublmSearchComp from '@/components/wiki/sublm-search-comp'
	import sublmTitleComp from '@/components/wiki/sublm-title-comp'
	import sublmListComp from '@/components/wiki/sublm-list-comp'

	export default {
             components: {
			    sublmSearchComp,
			    sublmTitleComp,
			    sublmListComp
			  }
	}
</script>