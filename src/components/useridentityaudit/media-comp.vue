<template>
	<div class="tables">
		<media-search-comp></media-search-comp>
		<media-title-comp></media-title-comp>
        <media-lists-comp></media-lists-comp>
	</div>
</template>

<script>
	import mediaListsComp from '@/components/useridentityaudit/media-lists-comp'
    import mediaSearchComp from '@/components/useridentityaudit/media-search-comp'
    import mediaTitleComp from '@/components/useridentityaudit/media-title-comp'
	export default {
             components: {
			    mediaListsComp,
			    mediaSearchComp,
			    mediaTitleComp
			  }
	}
</script>