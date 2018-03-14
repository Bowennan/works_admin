<template>
  <div class="datas">
          
            <!-- <h3 style="text-align:center; padding:10px 0; color:#2d8cf0; font-size:14px">网站后台数据面板</h3> -->

          <div ref="bars" class="data-bars">
            
            <!-- 这里动态生成柱状图 -->
          </div>
          <Button class="refresh" size="small" type="primary" shape="circle" icon="ios-loop-strong">刷新</Button>
     <Menu class="data-nav"  mode="horizontal" :theme="theme" >
          
          <MenuItem class="item" name="1-1">
             <router-link to="/datas">

              <span>用户数据面板</span>
             </router-link> 
          </MenuItem>
          <MenuItem class="item" name="1-2">
             <router-link to="/datas/content_data" >
      
              <span>内容数据面板</span>
             </router-link>
          </MenuItem>
          <MenuItem class="item" name="1-3">
             <router-link to="/datas/community_data" >
      
              <span>社区数据面板</span>
             </router-link>
          </MenuItem>
          <MenuItem class="item" name="1-4">
             <router-link to="/datas/wiki_data" >
      
              <span>百科数据面板</span>
             </router-link>
          </MenuItem>
          <MenuItem class="item" name="1-5">
             <router-link to="/datas/lab_data" >
      
              <span>实验室数据面板</span>
             </router-link>
          </MenuItem>
          <MenuItem class="item" name="1-6">
             <router-link to="/datas/abnormal_data" >
      
              <span>异常数据面板</span>
             </router-link>
          </MenuItem>
            </Menu>

            <div class="data-show">
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
              text: 'Bestkit 数据概览',
              left:'center',
              top: '0%'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '5%',
                top:'10%',
                containLabel: true
            },
            xAxis: {
              type : 'category',
              data: this.summaryData,
              axisTick: {
                  alignWithLabel: true
              }
            },

            yAxis: {
              show: false
            },
            series: [{
              name: '数量',
              type: 'bar',
              barWidth: '50%',
              label: {
                  normal: {
                      show: true,
                      position: 'top',
                      fontSize: 16,
                      fontWeight: 'bold'
                  }
              },
              itemStyle:{
                                    normal:{
                                        color: function(params) { 
                    var colorList = ['#2d8cf0','#2d8cf0','#2d8cf0','#2d8cf0','#fc7600', '#fc7600','#fc7600','#fc7600']; 
                    return colorList[params.dataIndex] 
                }
                                    }
                                },
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
    width:1200px;
    margin:10px auto;
    display: flex;
  }
  .item {
    flex:1;
    text-align: center;
  }
  .data-bars {
    width:1100px;
    height: 300px;
    margin:20px auto;
  }
  .refresh {
    display: block;
    width:80px;
    margin:18px auto;
  }
  .data-show {
    width:1200px;
    margin: 8px auto;
    border:1px solid #ccc;
  }
</style>