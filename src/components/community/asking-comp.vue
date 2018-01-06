<template>
	<div class="tables">
		<asking-search-comp></asking-search-comp>
        <asking-title-comp></asking-title-comp>
        <asking-list-comp :questionListData="questionData" class="tables"></asking-list-comp>

        <Page class="pages"
              :total="totalPages"
              show-sizer
              :page-size-opts="pageArray"
              @on-change = "turnPage"
              @on-page-size-change = "turnPages"
        ></Page>
	</div>
</template>

<script>
    import askingSearchComp from '@/components/community/asking-search-comp'
	import askingTitleComp from '@/components/community/asking-title-comp'
	import askingListComp from '@/components/community/asking-list-comp'

	import {communityQuestion, communities} from '@/axios/api'
    
    const _Ok = 200;
	export default {

		     data() {
		     	return {
		     		questionData:[],
		     		totalPages:0,
		     		pageArray:[5,10,20],
		     		limitPages:10
		     	}
		     },

		     created() {
		     	this.getQuestionData();
		     },

		     methods: {
		     	getQuestionData(paras) {
                   communityQuestion(paras).then(res => {
                   	if(_Ok === res.status) {
                   		this.questionData = res.data.questionList.data;
                   		this.totalPages = res.data.questionList.total;
                   		console.log(this.questionData)
                   	}
                   }).catch(err => {
                   	console.log(err, '请求失败')
                   })
		     	},

		     	turnPage(pageNum) {
		     		this.getQuestionData({
		     			page:pageNum,
		     			limit:this.limitPages
		     		})
		     	},

		     	turnPages(pagesNum) {
		     		this.limitPages = pagesNum;
		     		this.getQuestionData({
		     			limit: this.limitPages
		     		})
		     	}
		     },
             components: {
			    askingSearchComp,
			    askingTitleComp,
			    askingListComp
			  }
	}
</script>