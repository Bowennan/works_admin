<template>
	<div class="nutbt">
		<nutbt-search-comp></nutbt-search-comp>
		<nutbt-title-comp></nutbt-title-comp>
        <table-comp class="tables"></table-comp>
	</div>
</template>

<script>
	import tableComp from '@/components/tobetreated/table-comp'
    import nutbtSearchComp from '@/components/tobetreated/nutbt-search-comp'
    import nutbtTitleComp from '@/components/tobetreated/nutbt-title-comp'
	export default {
             components: {
			    tableComp,
			    nutbtSearchComp,
			    nutbtTitleComp
			  }
	}
</script>