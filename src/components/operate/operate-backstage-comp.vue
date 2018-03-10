<template>
	<div class="tables">
		<operate-search-comp></operate-search-comp>
        <operate-title-comp></operate-title-comp>
        <operate-list-comp></operate-list-comp>
	</div>
</template>

<script>
    import operateSearchComp from '@/components/operate/operate-backstage-search-comp'
	import operateTitleComp from '@/components/operate/operate-backstage-title-comp'
	import operateListComp from '@/components/operate/operate-backstage-list-comp'

	export default {
             components: {
			    operateSearchComp,
			    operateTitleComp,
			    operateListComp
			  }
	}
</script>