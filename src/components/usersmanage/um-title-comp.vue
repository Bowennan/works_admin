<template>
	<div class="title-box">
		<h3 class="title">用户管理</h3>
		<Button class="refresh" type="primary" shape="circle" icon="ios-loop" @click="refreshData">刷新</Button>
		<div class="search-and-result">
			<span class="result">共
	          <span class="res-num">{{total}}</span>人被筛选
			</span>
			<Select class="search-group" v-model="model1">
		        <Option v-for="item in orderClass" :value="item.value" :key="item.value">{{ item.label }}</Option>
		    </Select>
		</div>
	</div>
</template>

<script>
	export default {
	   props:{
         total:{
         	type:Number
         }
	   },
       data() {
       	return {
       		orderClass: [
                    {
                        value: '方式1',
                        label: '被举报数'
                    },
                    {
                        value: '方式2',
                        label: '粉丝数'
                    },
                    {
                        value: '方式3',
                        label: '信用分'
                    },
                    {
                        value: '方式4',
                        label: '文章总评分'
                    },
                    {
                        value: '方式5',
                        label: '作品数量'
                    },

                    {
                        value: '方式6',
                        label: '好价发布数量'
                    },
                    {
                        value: '方式7',
                        label: '装备秀数量'
                    },
                    {
                        value: '方式8',
                        label: '闲置发布数量'
                    },
                    {
                        value: '方式9',
                        label: '回答数量'
                    },
                    {
                        value: '方式10',
                        label: '爆料数量'
                    },
                    {
                        value: '方式11',
                        label: '收获喜欢数量'
                    },
                    {
                        value: '方式12',
                        label: '帖子总数'
                    },
                    {
                        value: '方式13',
                        label: '评论总数'
                    },
                    {
                        value: 0,
                        label: '降序排列全部'
                    }
                ],
                model1: 0
       	}
       },
       methods: {
       	refreshData() {
       		this.$emit("refreshData")
       	}
       }
	}
</script>

<style scoped>
	.title-box {
		width:100%;
		min-width:1250px;
		height:118px;
		box-sizing: border-box;
		padding:1px;
		position: relative;
	}
	.title {
		font-size:16px;
		color:#1c24338;
		display: inline-block;
		margin:24px 0 22px 28px;
	}
	.refresh {
		position: absolute;
		width:92px;
		font-size:14px;
		color:#fff;
		bottom:24px;
		left:28px;
	}
	.search-group {
		width:150px;
		margin-top:20px;
		display: block;
		text-align: left;
	}
	.search-and-result {
		position:absolute;
		right:38px;
		top:50%;
		transform: translateY(-50%);
		text-align: right;
		z-index: 1000;
	}
	.result {
		font-size:14px;
		color:#80848f;
	}
	.res-num {
		color:#2b85e4;
	}
</style>