<template>
	<div class="send-box ">
		<send-search></send-search>
		<send-editor></send-editor>
		<send-lists></send-lists>
	</div>
</template>

<script>
    import sendSearch from '@/components/sendmessage/send-search-comp'
    import sendEditor from '@/components/sendmessage/send-editor-comp'
    import sendLists from '@/components/sendmessage/send-lists-comp'
	export default {
       components: {
       	 sendSearch,
		 sendEditor,
		 sendLists
       }
	}
</script>

<style scoped>
	.send-box {
		width:100%;
	}
</style>