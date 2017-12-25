<template>
	<div class="title-box">
		<h3 class="titulo">用户管理</h3>
		<div class="btns-container">
           <Button  class="refresh re-btn" type="primary" shape="circle" icon="ios-loop" @click="refreshData">刷新</Button>      
        </div>
		<div class="result-container">
			<span class="total-result">共
	          <span class="c-azul">{{total}}</span>人被筛选
			</span>
			<Select class="order-sel" v-model="model1">
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