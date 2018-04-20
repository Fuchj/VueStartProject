<template>
  <div class="hello">
    <h3>{{ msg }}</h3> 
    <h3>自学跨行准菜鸟，侵权必追</h3>    
  </div>
</template>

<script>
export default {
  name: 'GuanYu',
  data () {
    return {
      msg: '关于凌云木'
    }
  }
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