<template>
	<div class="tables">
		<coupons-search-comp></coupons-search-comp>
        <coupons-title-comp></coupons-title-comp>
        <coupons-list-comp></coupons-list-comp>
	</div>
</template>

<script>
    import couponsSearchComp from '@/components/webpage/coupons-search-comp'
	import couponsTitleComp from '@/components/webpage/coupons-title-comp'
	import couponsListComp from '@/components/webpage/coupons-list-comp'

	export default {
             components: {
			    couponsSearchComp,
			    couponsTitleComp,
			    couponsListComp
			  }
	}
</script>