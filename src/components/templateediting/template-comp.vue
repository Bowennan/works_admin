<template>
	<div class="send-box">
		<template-search></template-search>
		<template-editor></template-editor>
		<template-lists></template-lists>
	</div>
</template>

<script>
    import templateSearch from '@/components/templateediting/template-search-comp'
    import templateEditor from '@/components/templateediting/template-editor-comp'
    import templateLists from '@/components/templateediting/template-lists-comp'
	export default {
       components: {
       	 templateSearch,
		 templateEditor,
		 templateLists
       }
	}
</script>

<style scoped>
	.send-box {
		width:100%;
	}
</style>