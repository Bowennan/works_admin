<template>
	<div class="tables">
		<tbcsh-search-comp></tbcsh-search-comp>
        <tbcsh-title-comp></tbcsh-title-comp>
        <tbcsh-list-comp class="tables"></tbcsh-list-comp>
	</div>
</template>

<script>
    import tbcshSearchComp from '@/components/community/tbcsh-search-comp'
	import tbcshTitleComp from '@/components/community/tbcsh-title-comp'
	import tbcshListComp from '@/components/community/tbcsh-list-comp'

	export default {
             components: {
			    tbcshSearchComp,
			    tbcshTitleComp,
			    tbcshListComp
			  }
	}
</script>