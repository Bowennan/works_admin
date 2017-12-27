<template>
	<div class="title-box">
		<span class="titulo">操作日志</span>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop">刷新</Button>
		</div>
		<div class="result-container">
			 <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
		</div>
	</div>
</template>

<script>
	export default {
	}
</script>