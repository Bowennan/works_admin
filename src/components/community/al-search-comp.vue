<template>
	<div class="search-box">
			<Input class="id-search" v-model="searchVal">
			        <Select v-model="searchType" slot="prepend" style="width: 80px">
			            <Option value="id">回复ID</Option>
			        </Select>
			        <Button slot="append" icon="ios-search" @click="search"></Button>
			    </Input>

			    <span v-show="status" class="c-naranja" style='position: absolute; bottom: 5px; left: 106px;'>输入正确ID号</span>

		<div class="range-search">
			<div class="conditions-box">
				<Select class="conditions-width" v-model="model1">
				        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
				    </Select>
			</div>

			<div class="conditions-box">
				    <Select class="conditions-width" v-model="model1">
				        <Option v-for="item in 5" :value="item" :key="item">{{ item }}</Option>
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
    import {mapMutations,  mapActions, mapGetters} from "vuex"
	export default {
       data() {
       	return {
       		status:false,
       		searchVal: '',
       		searchType: 'id',

       	}
       },

       computed: {
       	...mapGetters('replysData', [
               'id',
               'summary_catalog'
       		])
       },


       methods: {
       	...mapMutations('replysData', [
              'setId',
              'setSummarycatalog'
       		]),
       	...mapActions('replysData', [
       		 'getReplyData'
       		]),

       	search() {
              if(this.searchType == "id" && /^[0-9]*$/.test(this.searchVal) && this.searchVal !== '' ){
              this.status = false
              this.setId(this.searchVal)
              this.getReplyData({
                 id: this.id,
                 summary_catalog: this.summary_catalog
               })
            }else {
              this.status = true
              setTimeout(()=>{
                this.status = false
              },1500)
            }

             this.searchVal=''
          },
       	}

	}
</script>