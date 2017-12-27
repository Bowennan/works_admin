<template>
	<div class="tables">
		<tbcc-search-comp></tbcc-search-comp>
        <tbcc-title-comp></tbcc-title-comp>
        <tbcc-list-comp class="tables"></tbcc-list-comp>
	</div>
</template>

<script>
    import tbccSearchComp from '@/components/community/tbcc-search-comp'
	import tbccTitleComp from '@/components/community/tbcc-title-comp'
	import tbccListComp from '@/components/community/tbcc-list-comp'

	export default {
             components: {
			    tbccSearchComp,
			    tbccTitleComp,
			    tbccListComp
			  }
	}
</script>