<template>
	<div class="title-box01">
		<span class="title">操作日志</span>
		<refresh-btn class="refresh"></refresh-btn>
		<date-to-date class="date"></date-to-date>
	</div>
</template>

<script>
    import refreshBtn from '@/components/base-comp/refresh-btn'
    import dateToDate from '@/components/base-comp/date-to-date'
	export default {
      components: {
      	refreshBtn,
      	dateToDate
      }
	}
</script>

<style scoped>
	.title-box01 {
		width:100%;
		height:118px;
		box-sizing: border-box;
		padding:1px;
		position: relative;
	}
	.title {
		position: absolute;
		top:24px;
		left:28px;
		font-size:16px;
		color:#1c24338;
		font-weight: bold;
	}
	.refresh {
		position: absolute;
		bottom:24px;
		left:28px;
		font-size:14px;
		color:#fff;
	}
	.date {
		position:absolute;
		right:38px;
		bottom:24px;
	}
</style>