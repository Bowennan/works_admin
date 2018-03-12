<template>
  <div class="datas">
           <div style="text-align:center">
            <h3 style="text-align:center; padding:10px 0; color:#2d8cf0; font-size:14px">网站后台数据面板</h3>
            <Button size="large" type="primary" shape="circle" icon="ios-loop-strong">刷新</Button>
          </div>

          <div ref="bars" class="data-bars">
            <!-- 这里动态生成柱状图 -->
          </div>
     <Menu class="data-nav"  mode="horizontal" :theme="theme" >
          
          <MenuItem name="1-1">
             <router-link to="/datas">

              <span>用户数据面板</span>
             </router-link> 
          </MenuItem>
          <MenuItem name="1-2">
             <router-link to="/datas/content_data" >
      
              <span>内容数据面板</span>
             </router-link>
          </MenuItem>
          <MenuItem name="1-3">
             <router-link to="/datas/community_data" >
      
              <span>社区数据面板</span>
             </router-link>
          </MenuItem>
          <MenuItem name="1-4">
             <router-link to="/datas/wiki_data" >
      
              <span>百科数据面板</span>
             </router-link>
          </MenuItem>
          <MenuItem name="1-5">
             <router-link to="/datas/lab_data" >
      
              <span>实验室数据面板</span>
             </router-link>
          </MenuItem>
          <MenuItem name="1-6">
             <router-link to="/datas/abnormal_data" >
      
              <span>异常数据面板</span>
             </router-link>
          </MenuItem>
            </Menu>

            <div>
              <router-view></router-view>
            </div>
  </div>
</template>

<script>
  export default {
       data() {
        return {
          theme: "light",
          summaryData: [
              {
                num: 15669,
                value: '用户总数'
              },
              {
                num: 55689,
                value: '帖子总数'
              },
              {
                num: 1255,
                value: '今日浏览量'
              },
              {
                num: 698,
                value: '百科产品收录'
              },
              {
                num: 254,
                value: '用户待处理事项'
              },
              {
                num: 45,
                value: '内容待处理事项'
              },
              {
                num: 12,
                value: '实验室待处理事项'
              },
              {
                num: 56,
                value: '异常待处理事项'
              }
          ]
        }
       },

       mounted() {
         this.drawLine()
       },

       methods: {
        drawLine () {
          let barBox = this.$refs.bars
          let myChart = this.$echarts.init(barBox)

          myChart.setOption({
            title: {
              text: 'Bestkit 数据概览'
            },
            tooltip: {},
            xAxis: {
              data: this.summaryData,
              splitNumber: 1
            },

            yAxis: {},
            series: [{
              name: '数量',
              type: 'bar',
              data: [15669,5689,1255,698,254,45,12,56]
            }]
          })
        }
       }
  }
</script>

<style scoped>
   .datas {
     position: relative;
   }
  .data-nav {
    text-align: center;
  }
  .data-bars {
    width:1100px;
    height: 300px;
    margin:20px auto;
    border:1px solid #ff7800;
  }
</style>