<template>
	<div class="tables">
		<community-search-comp></community-search-comp>
		<community-title-comp></community-title-comp>
        <community-lists-comp></community-lists-comp>
	</div>
</template>

<script>
	import communityListsComp from '@/components/useridentityaudit/community-lists-comp'
    import communitySearchComp from '@/components/useridentityaudit/community-search-comp'
    import communityTitleComp from '@/components/useridentityaudit/community-title-comp'
	export default {
             components: {
			    communityListsComp,
			    communitySearchComp,
			    communityTitleComp
			  }
	}
</script>