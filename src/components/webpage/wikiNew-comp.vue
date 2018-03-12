<template>
	<div class="tables">
		<wikinew-search-comp></wikinew-search-comp>
        <wikinew-title-comp></wikinew-title-comp>
        <wikinew-list-comp></wikinew-list-comp>
	</div>
</template>

<script>
    import wikinewSearchComp from '@/components/webpage/wikiNew-search-comp'
	import wikinewTitleComp from '@/components/webpage/wikiNew-title-comp'
	import wikinewListComp from '@/components/webpage/wikiNew-list-comp'

	export default {
             components: {
			    wikinewSearchComp,
			    wikinewTitleComp,
			    wikinewListComp
			  }
	}
</script>