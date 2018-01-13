<template>
	<div class="tables">
		<posting-search-comp @chiose="chiose" @searchtitle="searchTitle"  @searchid="searchId"></posting-search-comp>
        <posting-title-comp @refresh="refresh"  @changeOrderType="changeOrderType"></posting-title-comp>
        <posting-list-comp :postingListData="postingData" class="tables" @refresh="getPostingData"></posting-list-comp>

        <Page class="pages" :current.sync="current" :total="totalPages" show-sizer :page-size="limitPages" :page-size-opts="pageArray"
              @on-change="turnPage"
              @on-page-size-change="turnPages"
        ></Page>
	</div>
</template>

<script>
    import postingSearchComp from '@/components/community/posting-search-comp'
	import postingTitleComp from '@/components/community/posting-title-comp'
	import postingListComp from '@/components/community/posting-list-comp'
    import {communityPosting} from '@/axios/api'

    import {mapGetters, mapMutations} from "vuex"

    const _Ok = 200;
	export default {
		    data() {
               return {
               	 postingData:[],
               	 totalPages:0,
               	 pageArray:[5,10,20],
               	 limitPages:10,
               	 current:1

               }
		    },
            computed: {
            	...mapGetters([
                       "orderType",
                       "id",
                       "title",
                       "begin",
                       "end",
                       "articleType",
                       "imageType"
            		])
            },
		     created() {
                this.getPostingData();
		     },
		     methods: {
		     	...mapMutations([
		     		"setTitle",
		     		"setOrderType",
		     		"setBegin",
		     		"setEnd",
		     		"setImageType",
		     		"setArticleType"
		     	]),
		     	getPostingData(paras) {
		     		communityPosting(paras).then(res => {
		     			// console.log(res.data.data)
                       if(_Ok === res.status){
                       	this.postingData = res.data.data;
                       	this.totalPages = res.data.meta.total;
                       	// console.log(this.postingData)
                       }
		     		}).catch(err => {
		     			console.log(err, '请求失败')
		     		})
		     	},
		     	turnPage(pageNum){
		     		this.getPostingData({
		     			page: pageNum,
		     			limit: this.limitPages,
		     			sort_field: this.orderType,
		     			title: this.title,
		     			content_type: this.imageType,
                        article_type: this.articleType,
                        begin_pulished_at: this.begin,
                        end_published_at: this.end
		     		})
		     	},
		     	turnPages(pagesNum) {
                    this.limitPages = pagesNum
		     	    this.getPostingData({
		     	    	limit: this.limitPages,
		     	    	sort_field: this.orderType,
		     	    	title: this.title,
		     	    	content_type: this.imageType,
                        article_type: this.articleType,
                        begin_pulished_at: this.begin,
                        end_published_at: this.end
		     	    })
		     	},
		     	searchId() {
                   this.getPostingData({
                   	id: this.id
                   });
		     	},
		     	searchTitle() {
		     		this.getPostingData({
		     			title: this.title
		     		})
		     	},
		     	refresh() {
		     		this.setTitle('')
		     		this.setOrderType("id")
		     		this.getPostingData()
		     		this.limitPages = 10
		     		this.current = 1
		     		this.setArticleType('')
		     		this.setImageType('')
		     		this.setBegin('')
		     		this.setEnd('')
		     	},
		     	changeOrderType() {
		     		this.getPostingData({
		     			sort_field: this.orderType,
		     			limit: this.limitPages,
		     			content_type: this.imageType,
                        article_type: this.articleType,
                        begin_pulished_at: this.begin,
                        end_published_at: this.end
		     		})

		     		this.current = 1
		     	},
		     	chiose(paras) {
                   this.getPostingData({
                      content_type: this.imageType,
                      article_type: this.articleType,
                      begin_pulished_at: this.begin,
                      end_published_at: this.end
                   });
		     	}
		     },
             components: {
			    postingSearchComp,
			    postingTitleComp,
			    postingListComp
			  }
	}
</script>