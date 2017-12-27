<template>
	<div class="tables">
		<rename-search-comp></rename-search-comp>
		<rename-title-comp></rename-title-comp>
        <rename-lists-comp></rename-lists-comp>
	</div>
</template>

<script>
	import renameListsComp from '@/components/useridentityaudit/rename-lists-comp'
    import renameSearchComp from '@/components/useridentityaudit/rename-search-comp'
    import renameTitleComp from '@/components/useridentityaudit/rename-title-comp'
	export default {
             components: {
			    renameListsComp,
			    renameSearchComp,
			    renameTitleComp
			  }
	}
</script>