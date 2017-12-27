<template>
	<div class="tables">
		<bestkit-search-comp></bestkit-search-comp>
		<bestkit-title-comp></bestkit-title-comp>
        <bestkit-lists-comp></bestkit-lists-comp>
	</div>
</template>

<script>
	import bestkitListsComp from '@/components/useridentityaudit/bestkit-lists-comp'
    import bestkitSearchComp from '@/components/useridentityaudit/bestkit-search-comp'
    import bestkitTitleComp from '@/components/useridentityaudit/bestkit-title-comp'
	export default {
             components: {
			    bestkitListsComp,
			    bestkitSearchComp,
			    bestkitTitleComp
			  }
	}
</script>