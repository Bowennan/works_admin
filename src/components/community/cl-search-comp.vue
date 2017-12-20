<template>
	<div class="search-box">
		<div class="id-name-search">
			
		</div>

		<div class="range-search">

			<div class="lev-search">
				    <Select class="commity-group" v-model="commentType">
				        <Option v-for="item in selectorList" :value="item.value" :key="item.value">{{ item.label}}</Option>
				    </Select>
			</div>

			<div class="lev-search">
				 <date-to-date></date-to-date>
			</div>

			<div class="lev-search">
				<confirm-btn></confirm-btn>
			</div>
		</div>
	</div>
</template>

<script>
   import idSearch from '@/components/base-comp/id-search'
   import dateToDate from '@/components/base-comp/date-to-date'
   import confirmBtn from '@/components/base-comp/confirm-btn'
   import levelSearch from '@/components/base-comp/level-search'
	export default {
       data() {
       	return {
       		commentType:0,
       		selectorList:[
   				{
   					label:"评论所属内容",
   					value:0,
   				},
   				{
   					label:"帖子评论",
   					value:1
   				},
   				{
   					label:"作品评论",
   					value:2
   				},
   				{
   					label:"装备秀评论",
   					value:3
   				},
   				{
   					label:"好价评论",
   					value:4
   				},
   				{
   					label:"二手评论",
   					value:5
   				},
   				{
   					label:"爆料评论",
   					value:6
   				}
       		]
       	}
       },

       components: {
       	  idSearch,
       	  dateToDate,
       	  confirmBtn,
       	  levelSearch
       }

	}
</script>

<style scoped>
	.search-box {
		box-sizing:border-box;
		width:100%;
		min-width:1250px;
		height:78px;
		border-right:1px solid #dddee1;
		border-bottom:1px solid #dddee1;
		position:relative;
	}
	.id-name-search {
       position: absolute;
       top:20px;
       left:28px;
	}

	.range-search {
		position: absolute;
		right: 0;
		top:18px;
	}

	.lev-search {
		float:left;
		margin-right:38px;
	}

	.level-group, .commity-group, .brand-group {
		width:115px;
	}
    .ivu-select-arrow {
    	color:blue !important;
    }
</style>