<template>
	<div class="title-box">
		<h3 class="titulo">异常回答列表</h3>
		<div class="btns-container">
			<Button class="re-btn" type="primary" shape="circle" icon="ios-loop">刷新</Button>

		</div>
		
		<div class="result-container">
			<span class="c-gris">全部：
	          <span class="c-naranja">{{totalPages}}</span>
			</span>
		</div>
	</div>
</template>

<script>
    import {mapGetters} from 'vuex'
	export default {
       data() {
       	return {
       		model1:''
       	}
       },

       computed: {
       	...mapGetters('replysData', [
               'totalPages'
       		])
       }
	}
</script>