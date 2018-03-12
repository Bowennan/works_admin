<template>
	<div class="tables">
		<procomm-search-comp></procomm-search-comp>
        <procomm-title-comp></procomm-title-comp>
        <procomm-list-comp></procomm-list-comp>
	</div>
</template>

<script>
    import procommSearchComp from '@/components/webpage/procomm-search-comp'
	import procommTitleComp from '@/components/webpage/procomm-title-comp'
	import procommListComp from '@/components/webpage/procomm-list-comp'

	export default {
             components: {
			    procommSearchComp,
			    procommTitleComp,
			    procommListComp
			  }
	}
</script>