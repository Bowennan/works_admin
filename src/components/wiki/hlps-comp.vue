<template>
	<div class="tables">
		<hlps-search-comp></hlps-search-comp>
        <hlps-title-comp></hlps-title-comp>
        <hlps-list-comp class="tables"></hlps-list-comp>
	</div>
</template>

<script>
    import hlpsSearchComp from '@/components/wiki/hlps-search-comp'
	import hlpsTitleComp from '@/components/wiki/hlps-title-comp'
	import hlpsListComp from '@/components/wiki/hlps-list-comp'

	export default {
             components: {
			    hlpsSearchComp,
			    hlpsTitleComp,
			    hlpsListComp
			  }
	}
</script>