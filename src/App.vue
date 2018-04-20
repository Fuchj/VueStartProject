<template>
  <div id="app" class="dd">
    <!-- <img src="./assets/logo.png"> -->
    <h1>凌云木Vue</h1> 
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view/>
   
  </div>
</template>
 
<script>
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource) ;
export default {
  name: 'App',
  mounted() {
            this.drawLine();
        },
  methods: {
            drawLine: function () {              
                this.$http.get('http://192.168.0.89:10111/api/Values/GetUserData').then((data) => { 
                  console.log("调用接口成功");
                  console.log("--------------------------------------------");
                  console.log(data.body);
                  console.log("--------------------------------------------");
                 });                                                  
            }
        }
}
</script>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; 
}
</style>
