<template>
	<div class="tables">
		<onlinelist-search-comp></onlinelist-search-comp>
        <onlinelist-title-comp></onlinelist-title-comp>
        <onlinelist-list-comp class="tables"></onlinelist-list-comp>
	</div>
</template>

<script>
    import onlinelistSearchComp from '@/components/wiki/sub/onlinelist-search-comp'
	import onlinelistTitleComp from '@/components/wiki/sub/onlinelist-title-comp'
	import onlinelistListComp from '@/components/wiki/sub/onlinelist-list-comp'

	export default {
             components: {
			    onlinelistSearchComp,
			    onlinelistTitleComp,
			    onlinelistListComp
			  }
	}
</script>