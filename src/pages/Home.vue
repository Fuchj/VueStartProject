<template>
  <div class="hello">
   	<home-header></home-header>
    <h1>{{ msg }}</h1> 
    <ul>
      <li>Vue.js（读音 /vjuː/, 类似于 view） 是一套构建用户界面的渐进式框架。</li>
      <li>Vue 只关注视图层， 采用自底向上增量开发的设计。</li>
    </ul>
    <ul>
      <li>Vue 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。</li>
      <li>Vue 学习起来非常简单.</li>
    </ul>  
     <div id="myChart" :style="{ height: '700px',margin:'0px'}"></div> 
     <bottom></bottom> 
  </div>
</template>

<script>
import Vue from 'vue';
import HomeHeader from '../components/HomeHeader'
import bottom from '../components/bottom'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts ;
export default {
  name: 'Home',
  mounted(){
    this.SetEchart();
  },
  data () {
    return {
      msg: 'Welcome to 凌云木 Vue.js App'
    }
  },
// 在components字段中，包含导入的子组件
components: {
            HomeHeader,
            bottom			
},
  methods: {
    SetEchart(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
      var   option = {
    title: {
        text: '郑州1月最低生活费组成（单位:元）',    
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        data : ['总费用','房租','水电费','交通费','伙食费','日用品数']
    },
    yAxis: {
        type : 'value'
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack:  '总量',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [0, 1700, 1400, 1200, 300, 0]
        },
        {
            name: '生活费',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                }
            },
            data:[3900, 2200, 300, 200, 900, 300]
        }
    ]
};
        myChart.setOption(option);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2,h3 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
