<template>
	<div class="search-box">

		<div class="range-search">

			<div class="conditions-box">
				    <Select class="conditions-width" v-model="commentType">
				        <Option v-for="item in selectorList" :value="item.value" :key="item.value">{{ item.label}}</Option>
				    </Select>
			</div>

			<div class="conditions-box">
				 <DatePicker type="daterange" placement="bottom-end" placeholder="用户注册时间区间选择" style="width: 200px"></DatePicker>
			</div>

			<div class="conditions-box">
				<Button type="primary" class="confirm-group">确认筛选</Button>
			</div>
		</div>
	</div>
</template>

<script>
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
       }

	}
</script>