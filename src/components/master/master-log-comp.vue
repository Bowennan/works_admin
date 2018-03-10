<template>
	<div class="tables">
		<master-search-comp></master-search-comp>
        <master-title-comp></master-title-comp>
        <master-list-comp></master-list-comp>
	</div>
</template>

<script>
    import masterSearchComp from '@/components/master/master-search-comp'
	import masterTitleComp from '@/components/master/master-title-comp'
	import masterListComp from '@/components/master/master-list-comp'

	export default {
             components: {
			    masterSearchComp,
			    masterTitleComp,
			    masterListComp
			  }
	}
</script>