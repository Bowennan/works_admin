<template>
	<div class="tables">
		<tbco-search-comp></tbco-search-comp>
        <tbco-title-comp></tbco-title-comp>
        <tbco-list-comp class="tables"></tbco-list-comp>
	</div>
</template>

<script>
    import tbcoSearchComp from '@/components/community/tbco-search-comp'
	import tbcoTitleComp from '@/components/community/tbco-title-comp'
	import tbcoListComp from '@/components/community/tbco-list-comp'

	export default {
             components: {
			    tbcoSearchComp,
			    tbcoTitleComp,
			    tbcoListComp
			  }
	}
</script>