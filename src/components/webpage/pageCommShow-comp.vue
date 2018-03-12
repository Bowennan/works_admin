<template>
	<div class="tables">
		<pagecomm-search-comp></pagecomm-search-comp>
        <pagecomm-title-comp></pagecomm-title-comp>
        <pagecomm-list-comp class="tables"></pagecomm-list-comp>
	</div>
</template>

<script>
    import pagecommSearchComp from '@/components/webpage/pagecomm-search-comp'
	import pagecommTitleComp from '@/components/webpage/pagecomm-title-comp'
	import pagecommListComp from '@/components/webpage/pagecomm-list-comp'

	export default {
             components: {
			    pagecommSearchComp,
			    pagecommTitleComp,
			    pagecommListComp
			  }
	}
</script>