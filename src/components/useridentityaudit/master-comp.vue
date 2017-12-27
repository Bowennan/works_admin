<template>
	<div class="tables">
		<master-search-comp></master-search-comp>
		<master-title-comp></master-title-comp>
        <master-lists-comp></master-lists-comp>
	</div>
</template>

<script>
	import masterListsComp from '@/components/useridentityaudit/master-lists-comp'
    import masterSearchComp from '@/components/useridentityaudit/master-search-comp'
    import masterTitleComp from '@/components/useridentityaudit/master-title-comp'
	export default {
             components: {
			    masterListsComp,
			    masterSearchComp,
			    masterTitleComp
			  }
	}
</script>
