<template>
  <div class="hello">
    <home-header></home-header>
    <h3>{{ msg }}</h3> 
    <div>{{ $route.params.id }} </div>
    <h3>自学跨行准菜鸟，侵权必追</h3>    
    <bottom></bottom> 
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader'
import bottom from '../components/bottom'
export default {
  name: 'GuanYu',
  data () {
    return {
      msg: '关于凌云木'
    }
  },
   watch: {//使用watch监视路由的变化
    '$route' (to, from) {
      // 对路由变化作出响应...  
      console.log("from:");
      console.log(from);//打印from
      console.log("------------------------------------------------------------------------------");
      console.log("to:");
      console.log(to);//打印to
      console.log("------------------------------------------------------------------------------");
      console.log(this.$route);//
    }
   },
  components: {
      HomeHeader	,
      bottom		
},
}
</script>
<style scoped>
.hello {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; 
}
</style>