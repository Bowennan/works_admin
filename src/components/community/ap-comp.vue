<template>
	<div class="tables">
		<ap-search-comp></ap-search-comp>
        <ap-title-comp></ap-title-comp>
        <ap-list-comp class="tables"></ap-list-comp>
	</div>
</template>

<script>
    import apSearchComp from '@/components/community/ap-search-comp'
	import apTitleComp from '@/components/community/ap-title-comp'
	import apListComp from '@/components/community/ap-list-comp'

	export default {
             components: {
			    apSearchComp,
			    apTitleComp,
			    apListComp
			  }
	}
</script>