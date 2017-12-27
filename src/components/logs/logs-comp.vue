<template>
	<div class="tables">
		<logs-search-comp></logs-search-comp>
		<logs-title-comp></logs-title-comp>
        <logs-lists-comp></logs-lists-comp>
	</div>
</template>

<script>
	import logsListsComp from '@/components/logs/logs-lists-comp'
    import logsSearchComp from '@/components/logs/logs-search-comp'
    import logsTitleComp from '@/components/logs/logs-title-comp'
	export default {
             components: {
			    logsListsComp,
			    logsSearchComp,
			    logsTitleComp
			  }
	}
</script>