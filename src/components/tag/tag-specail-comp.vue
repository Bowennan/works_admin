<template>
	<div class="tables">
		<tag-search-comp></tag-search-comp>
        <tag-title-comp></tag-title-comp>
        <tag-list-comp></tag-list-comp>
	</div>
</template>

<script>
    import tagSearchComp from '@/components/tag/tag-specail-search-comp'
	import tagTitleComp from '@/components/tag/tag-specail-title-comp'
	import tagListComp from '@/components/tag/tag-specail-list-comp'

	export default {
             components: {
			    tagSearchComp,
			    tagTitleComp,
			    tagListComp
			  }
	}
</script>