<template>
	<div class="tables">
		<tbcgp-search-comp></tbcgp-search-comp>
        <tbcgp-title-comp></tbcgp-title-comp>
        <tbcgp-list-comp class="tables"></tbcgp-list-comp>
	</div>
</template>

<script>
    import tbcgpSearchComp from '@/components/community/tbcgp-search-comp'
	import tbcgpTitleComp from '@/components/community/tbcgp-title-comp'
	import tbcgpListComp from '@/components/community/tbcgp-list-comp'

	export default {
             components: {
			    tbcgpSearchComp,
			    tbcgpTitleComp,
			    tbcgpListComp
			  }
	}
</script>