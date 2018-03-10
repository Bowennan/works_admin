<template>
	<div class="tables">
		<operate-search-comp></operate-search-comp>
        <operate-title-comp></operate-title-comp>
        <operate-list-comp></operate-list-comp>
	</div>
</template>

<script>
    import operateSearchComp from '@/components/operate/operate-authority-search-comp'
	import operateTitleComp from '@/components/operate/operate-authority-title-comp'
	import operateListComp from '@/components/operate/operate-authority-list-comp'

	export default {
             components: {
			    operateSearchComp,
			    operateTitleComp,
			    operateListComp
			  }
	}
</script>