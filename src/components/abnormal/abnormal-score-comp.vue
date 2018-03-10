<template>
	<div class="tables">
		<abnormal-search-comp></abnormal-search-comp>
        <abnormal-title-comp></abnormal-title-comp>
        <abnormal-list-comp></abnormal-list-comp>
	</div>
</template>

<script>
    import abnormalSearchComp from '@/components/abnormal/abnormal-score-search-comp'
	import abnormalTitleComp from '@/components/abnormal/abnormal-score-title-comp'
	import abnormalListComp from '@/components/abnormal/abnormal-score-list-comp'

	export default {
             components: {
			    abnormalSearchComp,
			    abnormalTitleComp,
			    abnormalListComp
			  }
	}
</script>